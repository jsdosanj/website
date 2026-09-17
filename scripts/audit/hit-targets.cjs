// Every interactive element must meet Apple's 44x44pt minimum target,
// with ~12pt clear space between adjacent controls (HIG § Accessibility).
const { BASE, PATHS, VIEWPORTS, browser } = require('./lib.cjs');
(async () => {
  const b = await browser();
  const small = new Map();
  for (const path of PATHS) {
    for (const w of [390, 1440]) {
      const p = await b.newPage({ viewport: { width: w, height: 1000 } });
      await p.goto(BASE + path, { waitUntil: 'load' });
      await p.waitForTimeout(1200);
      // Reveal/parallax sections sit at scale(0.96) until scrolled into view,
      // which would make every control inside them measure ~4% short. Play the
      // page through first so we measure settled layout, not mid-animation.
      await p.evaluate(async () => {
        const h = document.body.scrollHeight;
        for (let y = 0; y < h; y += 400) { window.scrollTo(0, y); await new Promise(r => requestAnimationFrame(r)); }
        window.scrollTo(0, 0);
      });
      await p.waitForTimeout(1400);
      const bad = await p.evaluate(() => {
        const out = [];
        for (const el of document.querySelectorAll('a[href],button,input,select,textarea,[role="tab"],[role="button"]')) {
          const cs = getComputedStyle(el);
          if (cs.display === 'none' || cs.visibility === 'hidden') continue;
          const r = { width: el.offsetWidth, height: el.offsetHeight };
          if (r.width < 1 || r.height < 1) continue;            // truly hidden
          if (el.closest('.sr-only')) continue;
          // Inline links inside a paragraph are exempt: they flow with text
          // and the HIG's target rule is about standalone controls.
          const par = el.parentElement;
          const inlineInProse = par && /^(P|LI|SPAN|TD|DD|BLOCKQUOTE)$/.test(par.tagName)
            && getComputedStyle(el).display.startsWith('inline')
            && par.textContent.trim().length > el.textContent.trim().length + 12;
          if (inlineInProse) continue;
          if (r.height < 43.5 || r.width < 43.5) {
            out.push({ t: (el.textContent || el.getAttribute('aria-label') || el.tagName).trim().slice(0, 30),
                       w: Math.round(r.width), h: Math.round(r.height),
                       cls: el.className.toString().slice(0, 54) });
          }
        }
        return out;
      });
      for (const x of bad) { const k = x.cls + '|' + x.t; if (!small.has(k)) small.set(k, { ...x, where: `${path} @${w}` }); }
      await p.close();
    }
  }
  console.log(`=== controls under 44px (${small.size} unique) ===`);
  for (const x of small.values()) console.log(` ${String(x.w).padStart(4)}x${String(x.h).padStart(3)}  "${x.t}"\n        .${x.cls}  [${x.where}]`);
  await b.close();
  process.exitCode = small.size ? 1 : 0;
})();
