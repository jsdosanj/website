// The career roadmap's geometry invariants.
//
// The roadmap positions every bar and label by arithmetic, and two of its
// guarantees are the kind that break silently — the chart still renders, it is
// just subtly wrong — so they are asserted here rather than eyeballed.
//
//  1. THE PACKING INVARIANT. packLanes() in ProgramRoadmap.tsx reserves
//     LABEL_YEARS of axis for each role's label, where LABEL_YEARS is
//     --rm-label expressed in years at --rm-year. That is only true while the
//     axis content box measures exactly --rm-year * --rm-years. Tailwind's
//     reset makes box-sizing: border-box global, so the canvas has to add
//     --rm-label back into its declared width or the real scale drops and the
//     reservation under-counts (it did: 180.3px/year against a 200px
//     assumption, so labels occupied 1.165 years while packing reserved 1.05).
//
//  2. NOTHING OVERLAPS. Labels must not collide with the next role in their
//     lane, and must not spill into the lane below, where the next lane's bars
//     are drawn. A longer job title is all it takes: at phone label widths a
//     three-line title plus a two-line organization overflowed an 8.25rem lane
//     and struck through the dates beneath it.
//
// Both are checked at the two viewports where the scale differs.
const { BASE, VIEWPORTS, browser } = require('./lib.cjs');

/** Runs in the page. Measures the axis, then hunts for any overlap. */
function inspect() {
  const scroll = document.querySelector('.rm-scroll');
  const canvas = document.querySelector('.rm-canvas');
  const lane = document.querySelector('.rm-lane');
  if (!scroll || !canvas || !lane) return { missing: true };

  const cs = getComputedStyle(canvas);
  const years = parseFloat(cs.getPropertyValue('--rm-years'));
  const labelPx = parseFloat(cs.paddingRight);
  const axis = lane.clientWidth;
  const pxPerYear = axis / years;

  const grid = document.querySelector('.rm-grid');
  const now = document.querySelector('.rm-now');

  // Within a lane: does any label reach into the next role's label?
  const collisions = [];
  const spills = [];
  const lanes = [...document.querySelectorAll('.rm-lane')];
  lanes.forEach((ln, i) => {
    const laneBottom = ln.getBoundingClientRect().bottom;
    const items = [...ln.querySelectorAll('.rm-role')]
      .map((role) => {
        const label = role.querySelector('.rm-label');
        const r = label.getBoundingClientRect();
        return { left: r.left, right: r.right, bottom: r.bottom, title: role.querySelector('.rm-label__title').textContent.trim() };
      })
      .sort((a, b) => a.left - b.left);

    for (const it of items) {
      if (it.bottom > laneBottom + 0.5) {
        spills.push(`lane ${i + 1}: "${it.title}" overflows by ${Math.round(it.bottom - laneBottom)}px`);
      }
    }
    for (let j = 1; j < items.length; j++) {
      if (items[j].left < items[j - 1].right - 1) {
        collisions.push(`lane ${i + 1}: "${items[j - 1].title}" / "${items[j].title}"`);
      }
    }
  });

  return {
    years,
    labelPx,
    axis,
    pxPerYear,
    labelYears: labelPx / pxPerYear,
    gridWidth: grid ? grid.getBoundingClientRect().width : null,
    nowOffset: now ? now.getBoundingClientRect().left - lane.getBoundingClientRect().left : null,
    scrollable: scroll.scrollWidth > scroll.clientWidth,
    laneCount: lanes.length,
    roleCount: document.querySelectorAll('.rm-role').length,
    collisions,
    spills,
  };
}

/** LABEL_YEARS in components/ProgramRoadmap.tsx. Kept in sync by hand. */
const LABEL_YEARS = 1.05;

(async () => {
  const b = await browser();
  let failures = 0;

  for (const width of VIEWPORTS) {
    const p = await b.newPage({ viewport: { width, height: 1000 } });
    await p.goto(`${BASE}/about`, { waitUntil: 'load' });
    await p.waitForTimeout(900);
    await p.locator('.rm-scroll').scrollIntoViewIfNeeded();
    await p.waitForTimeout(400);
    const r = await p.evaluate(inspect);

    if (r.missing) {
      console.log(`  ${String(width).padStart(4)}  roadmap not found on /about`);
      failures++;
      await p.close();
      continue;
    }

    const labelOff = Math.abs(r.labelYears - LABEL_YEARS) > 0.01;
    const gridOff = Math.abs(r.gridWidth - r.axis) > 1;
    const nowOff = Math.abs(r.nowOffset - r.axis) > 1;

    console.log(
      `  ${String(width).padStart(4)}  ${r.roleCount} roles in ${r.laneCount} lanes  ` +
        `axis ${Math.round(r.axis)}px @ ${r.pxPerYear.toFixed(1)}px/yr  ` +
        `label ${r.labelYears.toFixed(3)}yr${labelOff ? ` != ${LABEL_YEARS} PACKING INVARIANT BROKEN` : ''}`
    );
    console.log(
      `        grid ${gridOff ? `${Math.round(r.gridWidth)} != axis MISALIGNED` : 'aligned'}  ` +
        `today ${nowOff ? 'OFF AXIS END' : 'at axis end'}  ` +
        `scrollable ${r.scrollable ? 'yes' : 'NO — chart fits, nothing to pan'}`
    );
    r.collisions.forEach((c) => console.log(`        label collision: ${c}`));
    r.spills.forEach((s) => console.log(`        label spill: ${s}`));

    failures +=
      (labelOff ? 1 : 0) + (gridOff ? 1 : 0) + (nowOff ? 1 : 0) + r.collisions.length + r.spills.length;
    await p.close();
  }

  await b.close();
  console.log(`\ntotal roadmap geometry failures: ${failures}`);
  process.exitCode = failures ? 1 : 0;
})();
