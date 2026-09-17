// prefers-reduced-motion, the focus indicator, and press-state coverage.
//
// Text scaling is deliberately NOT checked here: an earlier version of this
// file set html{font-size:32px}, which scales layout metrics as well as text.
// No accessibility setting does that, so it reported failures that cannot
// happen. text-scaling.cjs does it faithfully instead — snapshot every
// computed font-size, then double those, leaving layout untouched.
const { BASE, browser } = require('./lib.cjs');

const PRESS_PATHS = ['/', '/work', '/about', '/products', '/contact', '/resume'];

/**
 * Runs in the page. Returns the focus rule and every control lacking a press
 * state.
 *
 * Passed as a function rather than a source string on purpose: an evaluated
 * template literal breaks the moment a comment inside it contains a backtick,
 * which it did, three times.
 */
function inspectControls() {
  // Flatten the stylesheet, descending into grouping rules. Two traps, both of
  // which produced wildly wrong results before they were handled:
  //   - Tailwind v4 emits every @utility inside "@layer utilities", and a flat
  //     read of styleSheets[].cssRules never sees into it.
  //   - A CSSStyleRule also exposes .cssRules now (nested CSS), so "has
  //     cssRules" does not mean "is a grouping rule" — treating it that way
  //     discards the rule itself.
  const flat = [];
  const walk = (rules) => {
    for (const r of rules) {
      if (r.selectorText) flat.push(r);
      if (r.cssRules && r.cssRules.length) walk(r.cssRules);
    }
  };
  for (const sheet of document.styleSheets) {
    try {
      walk(sheet.cssRules);
    } catch {
      /* cross-origin sheet */
    }
  }

  const activeRules = flat.filter((r) => r.selectorText.includes(':active'));

  // The CSSOM cannot decompose a shorthand containing a var() into longhands —
  // outline declared with a custom property reads back with an empty
  // outlineStyle — so read the shorthand itself. The rule that removes the
  // ring for pointer users also matches ':focus-visible', hence the 'none'
  // check.
  const focusRule = flat.find((r) => {
    if (!r.selectorText.includes(':focus-visible')) return false;
    const outline = r.style.getPropertyValue('outline');
    return outline && outline !== 'none';
  });
  const focus = focusRule
    ? focusRule.style.getPropertyValue('outline') +
      ' / offset ' +
      focusRule.style.getPropertyValue('outline-offset') +
      (focusRule.style.getPropertyValue('box-shadow') ? ' + halo' : '')
    : null;

  // An inline link inside running prose is not a custom button: a press
  // transform on it would shift the surrounding text. Same exemption
  // hit-targets.cjs applies for the 44pt rule.
  const inProse = (el) =>
    getComputedStyle(el).display.startsWith('inline') &&
    !!el.closest('p,li,blockquote,figcaption,.prose-jsd');

  let total = 0;
  const missing = [];
  for (const el of document.querySelectorAll('a[href],button')) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || !el.offsetWidth || inProse(el)) continue;
    total++;
    const hasPress = activeRules.some((r) => {
      try {
        return el.matches(r.selectorText.replace(/:active/g, ''));
      } catch {
        return false;
      }
    });
    if (!hasPress) missing.push(el.tagName.toLowerCase() + '.' + String(el.className).slice(0, 56));
  }
  return { total, missing, focus, activeRuleCount: activeRules.length };
}

/** Runs in the page. Reports motion that survived prefers-reduced-motion. */
function inspectMotion() {
  const running = [];
  let stuck = 0;
  for (const el of document.querySelectorAll('*')) {
    const cs = getComputedStyle(el);
    // The global reduced-motion reset collapses every animation to 0.001ms,
    // which still reports as "running" for one millisecond. Only a duration a
    // person could perceive counts as motion.
    const ms = parseFloat(cs.animationDuration) * (cs.animationDuration.endsWith('ms') ? 1 : 1000);
    if (cs.animationName !== 'none' && cs.animationPlayState === 'running' && ms > 20) {
      running.push(el.tagName.toLowerCase() + '.' + String(el.className).slice(0, 40) + ' -> ' + cs.animationName);
    }
    // The failure that matters most: motion removed, content left hidden.
    if (el.classList.contains('reveal') && parseFloat(cs.opacity) < 0.05) stuck++;
  }
  return { running: running.slice(0, 8), stuck };
}

(async () => {
  const b = await browser();
  let failures = 0;

  console.log('=== prefers-reduced-motion ===');
  const rm = await b.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  await rm.goto(BASE + '/', { waitUntil: 'load' });
  await rm.waitForTimeout(900);
  const motion = await rm.evaluate(inspectMotion);
  console.log(`  elements still animating: ${motion.running.length}`);
  motion.running.forEach((x) => console.log('      ' + x));
  console.log(`  .reveal stuck at opacity 0 (content hidden): ${motion.stuck}`);
  failures += motion.running.length + motion.stuck;
  await rm.close();

  console.log('\n=== focus ring + press state ===');
  for (const path of PRESS_PATHS) {
    const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
    await p.goto(BASE + path, { waitUntil: 'load' });
    await p.waitForTimeout(1000);
    const r = await p.evaluate(inspectControls);
    console.log(
      `  ${path.padEnd(11)} controls ${String(r.total).padStart(3)}   no press state: ${r.missing.length}` +
        `   focus ring: ${r.focus || 'MISSING'}`
    );
    [...new Set(r.missing)].slice(0, 6).forEach((m) => console.log('      ' + m));
    failures += r.missing.length + (r.focus ? 0 : 1);
    await p.close();
  }

  await b.close();
  console.log(`\ntotal motion/focus/press failures: ${failures}`);
  process.exitCode = failures ? 1 : 0;
})();
