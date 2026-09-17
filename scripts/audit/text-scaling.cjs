// Faithful text-only 200% scaling: snapshot every computed font-size first,
// then apply, so nested text can't compound. Layout metrics stay untouched —
// this is what Dynamic Type / a browser minimum-font-size does.
const { BASE, PATHS, VIEWPORTS, browser } = require('./lib.cjs');
(async () => {
  const b = await browser();
  let tot = 0, worst = 0;
  for (const path of PATHS) {
    const p = await b.newPage({ viewport: { width: 390, height: 900 } });
    await p.goto(BASE + path, { waitUntil: 'load' });
    await p.evaluate(() => {
      const els = [...document.querySelectorAll('*')];
      const sizes = els.map(e => parseFloat(getComputedStyle(e).fontSize));
      els.forEach((e, i) => { if (sizes[i]) e.style.setProperty('font-size', sizes[i] * 2 + 'px', 'important'); });
    });
    await p.waitForTimeout(700);
    const r = await p.evaluate(() => {
      const vw = document.documentElement.clientWidth, out = [];
      // Excluded on purpose:
      //  .marquee__viewport / .overflow-x-auto  — scroll containers; content
      //      wider than the box is the point.
      //  [data-kinetic]                         — masked lines, clipped by design.
      //  svg text / [aria-hidden]               — SVG text scales with its
      //      viewBox, not with a browser text-size setting, so doubling its
      //      font-size models nothing a real user can do; decoration likewise
      //      carries no text to reflow.
      const intentional = el =>
        !!el.closest('.marquee__viewport,.overflow-x-auto,.snap-rail,[data-kinetic],[aria-hidden="true"]') ||
        el.namespaceURI === 'http://www.w3.org/2000/svg';
      for (const el of document.querySelectorAll('p,h1,h2,h3,h4,li,dt,dd,td,th,span,a,button')) {
        const cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.position === 'fixed') continue;
        const t = (el.textContent || '').trim(); if (!t) continue;
        if ([...el.childNodes].some(n => n.nodeType === 1)) continue;
        const bb = el.getBoundingClientRect();
        if (bb.right <= vw + 2 || bb.width < 30 || intentional(el)) continue;
        out.push(el.tagName + ' "' + t.slice(0, 24) + '" .' + el.className.toString().slice(0, 36));
      }
      // scrollWidth counts boxes that an overflow:hidden ancestor clips, so
      // it over-reports. Ask the browser whether the page can actually be
      // scrolled sideways instead — that is what a reader would experience.
      const before = document.documentElement.scrollLeft;
      document.documentElement.scrollLeft = 99999;
      const doc = document.documentElement.scrollLeft;
      document.documentElement.scrollLeft = before;
      return { clipped: out, doc };
    });
    tot += r.clipped.length; worst = Math.max(worst, r.doc);
    console.log('  ' + path.padEnd(11) + (r.clipped.length ? r.clipped.length + ' clipped' : 'ok').padEnd(12) + 'doc overflow ' + r.doc + 'px');
    r.clipped.slice(0, 3).forEach(x => console.log('      ' + x));
    await p.close();
  }
  console.log('\n  total clipped: ' + tot + '   worst doc overflow: ' + worst + 'px');
  await b.close();
  process.exitCode = tot || worst ? 1 : 0;
})();
