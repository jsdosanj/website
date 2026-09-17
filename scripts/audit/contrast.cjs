// Contrast + layout audit.
//
// Chromium returns `oklab(...)` / `color(srgb ...)` from getComputedStyle for
// anything declared with color-mix(), which a naive rgb regex reads as
// near-black and reports as a contrast failure. This converts every format to
// linear-light RGB before computing luminance, and composites translucent
// backgrounds over their ancestors, so the numbers are real.
const { BASE, PATHS, VIEWPORTS, browser } = require('./lib.cjs');

const PAGE_FN = () => {
  // ---- colour parsing -> linear-light RGB + alpha ----
  const srgbToLinear = (v) => (v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));

  function oklabToLinear(L, a, bb) {
    const l_ = L + 0.3963377774 * a + 0.2158037573 * bb;
    const m_ = L - 0.1055613458 * a - 0.0638541728 * bb;
    const s_ = L - 0.0894841775 * a - 1.291485548 * bb;
    const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
    return [
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
    ];
  }

  /** -> [rLin, gLin, bLin, alpha] or null */
  function parse(c) {
    if (!c) return null;
    c = c.trim();
    if (c === 'transparent') return [0, 0, 0, 0];
    let m;
    if ((m = c.match(/^rgba?\(([^)]+)\)$/i))) {
      const p = m[1].split(/[\s,\/]+/).filter(Boolean).map(Number);
      return [srgbToLinear(p[0] / 255), srgbToLinear(p[1] / 255), srgbToLinear(p[2] / 255), p.length > 3 ? p[3] : 1];
    }
    if ((m = c.match(/^color\(srgb\s+([^)]+)\)$/i))) {
      const p = m[1].split(/[\s\/]+/).filter(Boolean).map(Number);
      return [srgbToLinear(p[0]), srgbToLinear(p[1]), srgbToLinear(p[2]), p.length > 3 ? p[3] : 1];
    }
    if ((m = c.match(/^oklab\(([^)]+)\)$/i))) {
      const p = m[1].split(/[\s\/]+/).filter(Boolean).map((x) => (x.endsWith('%') ? parseFloat(x) / 100 : Number(x)));
      const [r, g, b] = oklabToLinear(p[0], p[1], p[2]);
      return [r, g, b, p.length > 3 ? p[3] : 1];
    }
    return null;
  }

  const lumOf = ([r, g, b]) => 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const over = (fg, bg) => {
    const a = fg[3];
    return [fg[0] * a + bg[0] * (1 - a), fg[1] * a + bg[1] * (1 - a), fg[2] * a + bg[2] * (1 - a), 1];
  };
  const ratio = (l1, l2) => {
    const hi = Math.max(l1, l2), lo = Math.min(l1, l2);
    return (hi + 0.05) / (lo + 0.05);
  };

  /** Composite an element's effective background over its ancestors. */
  function effectiveBg(el) {
    const stack = [];
    let n = el;
    while (n && n !== document.documentElement) {
      const c = parse(getComputedStyle(n).backgroundColor);
      if (c && c[3] > 0) {
        stack.push(c);
        if (c[3] >= 0.999) break;
      }
      n = n.parentElement;
    }
    const rootBg = parse(getComputedStyle(document.body).backgroundColor) || [1, 1, 1, 1];
    let acc = rootBg[3] >= 0.999 ? rootBg : [1, 1, 1, 1];
    for (let i = stack.length - 1; i >= 0; i--) acc = over(stack[i], acc);
    return acc;
  }

  const fails = [];
  const gradients = [];
  for (const el of document.querySelectorAll('p,li,span,a,h1,h2,h3,h4,dt,dd,td,th,button,label,figcaption,blockquote,caption')) {
    const txt = el.textContent && el.textContent.trim();
    if (!txt) continue;
    // only leaf text nodes, so we measure the element that actually paints it
    if ([...el.childNodes].some((n) => n.nodeType === 1)) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none') continue;
    const op = parseFloat(cs.opacity);
    if (op < 0.6) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    if (el.closest('.sr-only') || cs.clip === 'rect(0px, 0px, 0px, 0px)') continue;
    // aria-hidden content is not exposed as text, so WCAG 1.4.3 (4.5:1) does
    // not apply to it — 1.4.11 non-text contrast (3:1) does. Hold those to 3:1.
    const decorative = !!el.closest('[aria-hidden="true"]');

    // background-clip:text paints the glyphs from a gradient, so computed
    // `color` is transparent and tells us nothing. Bucket these separately and
    // check their gradient stops by value instead of pretending to measure them.
    const clip = cs.webkitBackgroundClip || cs.backgroundClip;
    if (clip === 'text') {
      gradients.push({ txt: txt.slice(0, 40), cls: el.className.toString().slice(0, 60), img: cs.backgroundImage.slice(0, 110) });
      continue;
    }
    const fgRaw = parse(cs.color);
    if (!fgRaw) continue;
    const bg = effectiveBg(el);
    const fg = over(fgRaw, bg);
    const size = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight, 10) >= 700;
    const need = decorative || size >= 24 || (size >= 18.66 && bold) ? 3 : 4.5;
    const rr = ratio(lumOf(fg), lumOf(bg));
    if (rr < need - 0.01) {
      fails.push({
        txt: txt.slice(0, 40),
        cls: el.className.toString().slice(0, 60),
        color: cs.color,
        size: Math.round(size),
        r: +rr.toFixed(2),
        need,
        decorative,
      });
    }
  }
  const of = document.documentElement.scrollWidth - document.documentElement.clientWidth;
  return { of, fails, gradients };
};

(async () => {
  const paths = process.argv[2] ? [process.argv[2]] : PATHS;
  const b = await browser();
  let totalFails = 0;
  const seen = new Map();
  const gradText = new Map();
  for (const path of paths) {
    for (const w of VIEWPORTS) {
      const p = await b.newPage({ viewport: { width: w, height: 1000 } });
      const errs = [];
      p.on('pageerror', (e) => errs.push(String(e).slice(0, 90)));
      await p.goto(BASE + path, { waitUntil: 'load' });
      await p.waitForTimeout(1500);
      const r = await p.evaluate(PAGE_FN);
      totalFails += r.fails.length;
      for (const f of r.fails) {
        const k = f.cls + '|' + f.color;
        if (!seen.has(k)) seen.set(k, { ...f, where: `${path} @${w}` });
      }
      for (const g of r.gradients) {
        const k = 'GRAD|' + g.cls;
        if (!gradText.has(k)) gradText.set(k, { ...g, where: path });
      }
      console.log(
        path.padEnd(11),
        String(w).padStart(5),
        ('overflow ' + r.of + 'px').padEnd(15),
        ('contrast fails: ' + r.fails.length).padEnd(20),
        errs.length ? 'JS ERROR: ' + errs[0] : ''
      );
      await p.close();
    }
  }
  console.log('\n=== unique contrast failures (by class + colour) ===');
  if (!seen.size) console.log('none');
  for (const f of seen.values()) {
    console.log(` r=${String(f.r).padStart(5)} need ${f.need}  ${String(f.size).padStart(2)}px  ${f.color.padEnd(22)} "${f.txt}"`);
    console.log(`        .${f.cls}   [${f.where}]`);
  }
  console.log('\n=== gradient text (background-clip:text — stops checked by value, not measurable here) ===');
  for (const g of gradText.values()) console.log(` "${g.txt}"  [${g.where}]\n        ${g.img}`);
  console.log(`\ntotal failing elements: ${totalFails}`);
  await b.close();
  process.exitCode = totalFails ? 1 : 0;
})();
