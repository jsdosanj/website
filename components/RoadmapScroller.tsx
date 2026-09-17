'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';

/**
 * The roadmap's chart shell: the legend row with its two pan controls, and the
 * horizontal scroll region they drive.
 *
 * WHY THE BUTTONS EXIST
 *
 * The chart is wider than its viewport by design, and the most important part
 * of it — the current role — sits at the right-hand end. Measured on a real
 * desktop page, the ways to reach it were: a trackpad swipe, shift-wheel, the
 * arrow keys after focusing the region, or dragging a scrollbar that turns out
 * to occupy zero layout height here (an overlay scrollbar, invisible at rest).
 * A plain mouse wheel over the chart scrolls the page, which is the correct,
 * non-hijacking behaviour — but it leaves a recruiter on a laptop with a mouse
 * no obvious way to see 2026.
 *
 * So: two real controls. Deliberately not a wheel handler that turns vertical
 * scroll into horizontal — that fights the page, surprises the reader, and is
 * the kind of scroll-jacking the rest of this design system avoids.
 *
 * The buttons disable at each end rather than sitting dead, and `atStart` /
 * `atEnd` are tracked in state off the region's own scroll event, so the
 * disabled styling stays truthful when the reader pans by any other means.
 *
 * They are not aria-hidden: they are ordinary focusable buttons, which is what
 * a keyboard or switch-access user needs. The region is also focusable and
 * scrollable with the arrow keys, and the chart's content is carried in the
 * sr-only list beside it, so nothing here is the only route to the data.
 */
export default function RoadmapScroller({
  legend,
  children,
}: {
  legend: React.ReactNode;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    // 1px of slack: fractional layout widths mean scrollLeft rarely lands
    // exactly on max, and a button that never re-enables reads as broken.
    setAtEnd(el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, [sync]);

  /** Pan by most of a viewport, so successive presses keep a little overlap. */
  const page = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 mb-4">
        {legend}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            className="rm-nav btn-press"
            onClick={() => page(-1)}
            disabled={atStart}
            aria-label="Scroll the roadmap toward earlier years"
          >
            <Icon name="arrow" size={16} className="rotate-180" />
          </button>
          <button
            type="button"
            className="rm-nav btn-press"
            onClick={() => page(1)}
            disabled={atEnd}
            aria-label="Scroll the roadmap toward the present"
          >
            <Icon name="arrow" size={16} />
          </button>
        </div>
      </div>

      <div className="card overflow-hidden roadmap-chart" data-roadmap>
        <div
          ref={ref}
          onScroll={sync}
          className="rm-scroll"
          tabIndex={0}
          role="region"
          aria-label="Career roadmap, scrollable horizontally"
        >
          {children}
        </div>
      </div>
    </>
  );
}
