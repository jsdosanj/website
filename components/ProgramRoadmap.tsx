import { experience, type Role } from '@/data/experience';

/**
 * Career as a delivery roadmap, read the way a roadmap is actually read: left
 * to right along a time axis, scrolled horizontally.
 *
 * WHY HORIZONTAL, AND WHY LANES
 *
 * The previous version gave every role its own row. Twelve roles meant a chart
 * taller than the viewport, so reading the bottom of it scrolled the year axis
 * off the top — the reader lost the one piece of context that made the bars
 * mean anything. Stacking more roles made it worse, which is the wrong
 * direction for a chart that gains a row per job.
 *
 * So time runs along the x-axis and the reader scrolls the decade instead of
 * scrolling a list. Roles are then packed into the fewest lanes that keep them
 * from colliding — twelve roles collapse to three lanes, because most of them
 * did not overlap. That makes the chart short enough to sit entirely on screen
 * (no vertical cutoff, at any breakpoint) while keeping the thing a flat list
 * hid: where two bars share a column, the work genuinely ran concurrently.
 *
 * PACKING BY LABEL, NOT BY BAR
 *
 * A three-month contract is a ~40px bar carrying a ~190px label. Packing on
 * bar extent alone would let the next role in the lane start underneath the
 * previous one's text, so `extent()` reserves whichever is longer — the bar or
 * its label. Bars stay exactly to scale; only the collision test is padded.
 *
 * THE PLAYBACK
 *
 * Bars still fill left to right as the section enters the viewport, driven by
 * the single `--play` custom property that Motion.tsx tweens on [data-roadmap]
 * (see the @property block in globals.css). Each bar derives its own progress
 * in CSS from --from and --inv, precomputed here because CSS division by a
 * custom property is not portable. `--play` rests at 1, so with no JS or under
 * reduced motion the chart renders fully drawn. The moving playhead line that
 * used to accompany it is gone: on a canvas wider than its viewport it spent
 * most of its sweep off-screen, where a cursor is worse than no cursor. The
 * fixed "today" edge marker carries that meaning instead.
 *
 * ACCESSIBILITY
 *
 * The chart is a positioned graphic, so it is aria-hidden and paired with an
 * sr-only ordered list carrying the same roles, companies and dates in
 * sequence. The scroller itself is a labelled, focusable region so it can be
 * panned from the keyboard.
 */

const NOW = 2026 + 8 / 12; // Sep 2026 — the "present" edge of the chart

const trackClass = {
  program: 'roadmap-bar-pm',
  ic: 'roadmap-bar-ic',
  contract: 'roadmap-bar-contract',
} as const;

const trackLabel = {
  program: 'Program / project management',
  ic: 'Engineering & operations',
  contract: 'Contract',
} as const;

/**
 * Horizontal room a label needs, expressed in years of the axis so it can be
 * compared with a bar's span. Kept in step with --rm-label / --rm-year in
 * globals.css; erring high only costs an extra lane, erring low overlaps text.
 */
const LABEL_YEARS = 1.05;

/** A role's footprint on the axis: its bar, or its label if that runs longer. */
function extent(r: Role) {
  return Math.max(r.end ?? NOW, r.start + LABEL_YEARS);
}

/**
 * Greedy first-fit: walk roles oldest-first and drop each into the first lane
 * whose previous occupant has finished. Optimal in lane count for intervals
 * sorted by start, and stable — the same data always yields the same chart.
 */
function packLanes(roles: Role[]): Role[][] {
  const lanes: Role[][] = [];
  const freeFrom: number[] = [];
  for (const r of roles) {
    let lane = freeFrom.findIndex((f) => f <= r.start);
    if (lane === -1) {
      lane = lanes.length;
      lanes.push([]);
      freeFrom.push(0);
    }
    lanes[lane]!.push(r);
    freeFrom[lane] = extent(r);
  }
  return lanes;
}

export default function ProgramRoadmap() {
  // Oldest first: the reader scrolls rightward into the present, so the array
  // order and the reading order agree.
  const roles = [...experience].sort((a, b) => a.start - b.start || (a.end ?? NOW) - (b.end ?? NOW));

  const spanStart = Math.floor(Math.min(...roles.map((r) => r.start)));
  const spanEnd = NOW; // stop at today rather than the end of the year
  const total = spanEnd - spanStart;
  const years = Array.from({ length: Math.floor(total) + 1 }, (_, i) => spanStart + i);

  /** Fraction (0–1) of the axis for a decimal year. */
  const frac = (y: number) => (y - spanStart) / total;

  const lanes = packLanes(roles);

  return (
    <div className="reveal">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-4">
        {(['program', 'ic', 'contract'] as const).map((t) => (
          <span key={t} className="inline-flex items-center gap-2 type-caption text-ink-600">
            <span className={`h-3 w-6 rounded-[3px] shrink-0 ${trackClass[t]}`} aria-hidden="true" />
            {trackLabel[t]}
          </span>
        ))}
      </div>

      <div className="card overflow-hidden roadmap-chart" data-roadmap>
        <div
          className="rm-scroll"
          tabIndex={0}
          role="region"
          aria-label="Career roadmap, scrollable horizontally"
        >
          <div
            className="rm-canvas"
            style={{ '--rm-years': total } as React.CSSProperties}
            aria-hidden="true"
          >
            {/* Year axis. Sits at the top of the canvas and travels with it, so
                the year under a bar is always the year beside it. */}
            <div className="rm-axis">
              {years.map((y) => (
                <span key={y} className="rm-tick type-mono-sm" style={{ left: `${frac(y) * 100}%` }}>
                  {y}
                </span>
              ))}
            </div>

            {/* One dashed gridline per year, behind the lanes. */}
            <div className="rm-grid">
              {years.slice(1).map((y) => (
                <span key={y} className="rm-gridline" style={{ left: `${frac(y) * 100}%` }} />
              ))}
              <span className="rm-now" style={{ left: '100%' }}>
                <span className="rm-now__label type-mono-sm">today</span>
              </span>
            </div>

            {/* Lanes */}
            <div className="rm-lanes">
              {lanes.map((lane, laneIndex) => (
                <div key={laneIndex} className="rm-lane">
                  {lane.map((r) => {
                    const end = r.end ?? NOW;
                    const from = frac(r.start);
                    // Floor the width so a three-month engagement is still a bar.
                    const width = Math.max(frac(end) - from, 0.008);
                    return (
                      <div
                        key={`${r.company}-${r.title}`}
                        className="rm-role"
                        style={{ left: `${from * 100}%`, width: `${width * 100}%` }}
                      >
                        <span
                          className={`roadmap-bar rm-bar ${trackClass[r.track]}`}
                          style={{ '--from': from, '--inv': 1 / width } as React.CSSProperties}
                          title={`${r.shortLabel} · ${r.date}`}
                        />
                        <span className="rm-label">
                          <span className="rm-label__title type-footnote">{r.title}</span>
                          <span className="rm-label__org type-caption">{r.company}</span>
                          <span className="rm-label__date type-mono-sm">{r.date}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The same data, in order, for screen readers and for print. */}
        <ol className="sr-only">
          {roles.map((r) => (
            <li key={`sr-${r.company}-${r.title}`}>
              {r.title}, {r.company}, {r.date}
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-3 type-caption text-ink-500">
        Scroll the roadmap sideways to move through the decade. Bars are to scale, and where two
        share a column the work overlapped — contract engagements ran alongside a full-time role.
      </p>
    </div>
  );
}
