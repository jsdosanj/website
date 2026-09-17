import { experience, type Role } from '@/data/experience';

/**
 * Career as a delivery roadmap: one swimlane per role, bars positioned by real
 * start/end dates so the overlaps are visible (UW, Tencent and Omni all ran
 * concurrently in 2022). A flat vertical list hid exactly the thing a hiring
 * manager wants to see — how much was in flight at once.
 *
 * TWO LAYOUTS, NOT ONE RESPONSIVE COMPROMISE
 *
 * A Gantt chart needs horizontal room it does not have on a phone, and the
 * previous version simply dropped the chart column — leaving mobile readers a
 * plain table, i.e. the thing the chart replaced. So the phone gets its own
 * design: a vertical timeline where the same span data becomes a proportional
 * left-edge rail, and concurrency shows as a "ran alongside" note rather than
 * as overlapping bars. Both layouts read the same array; neither is a
 * degradation of the other.
 *
 * THE PLAYHEAD (desktop)
 *
 * As the section scrolls, a playhead sweeps left to right across the decade and
 * each bar fills as it passes — the roadmap plays back rather than appearing.
 * The mechanics are deliberately CSS-first:
 *
 *   --play   0 → 1, the playhead's position. Registered via @property with an
 *            initial value of 1, so with no JS, no GSAP, or reduced motion the
 *            chart renders fully drawn. Motion only ever animates it from 0.
 *   --from   each bar's own left edge as a 0–1 fraction.
 *   --inv    1 / (to − from), precomputed here in TypeScript: CSS division by
 *            a custom property is not portable yet, multiplication is.
 *
 * so a bar's own progress is clamp(0, (--play − --from) × --inv, 1) — pure CSS,
 * one variable animated on one element, no per-bar JS.
 *
 * ACCESSIBILITY
 *
 * Bars are decorative positioning and are aria-hidden; the row header and the
 * span cell carry the same information as text, so a screen reader gets
 * "Technical Program Manager, Dosanjh Labs, Mar 2026 – Present".
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

/** Grid template shared by the axis header and every row, so they stay aligned. */
const GRID = 'md:grid md:grid-cols-[14rem_1fr_10.75rem]';

/** Does `b` overlap `a` in time? Used for the phone layout's concurrency note. */
function overlaps(a: Role, b: Role) {
  return a.start < (b.end ?? NOW) && b.start < (a.end ?? NOW);
}

export default function ProgramRoadmap() {
  const roles = [...experience].sort(
    (a, b) => (b.end ?? NOW) - (a.end ?? NOW) || b.start - a.start
  );

  const spanStart = Math.floor(Math.min(...roles.map((r) => r.start)));
  const spanEnd = Math.ceil(Math.max(...roles.map((r) => r.end ?? NOW)));
  const total = spanEnd - spanStart;
  const years = Array.from({ length: total + 1 }, (_, i) => spanStart + i);

  /** Fraction (0–1) of the track for a decimal year. */
  const frac = (y: number) => (y - spanStart) / total;

  return (
    <div className="reveal">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5">
        {(['program', 'ic', 'contract'] as const).map((t) => (
          <span key={t} className="inline-flex items-center gap-2 type-caption text-ink-600">
            <span className={`h-3 w-6 rounded-[3px] shrink-0 ${trackClass[t]}`} aria-hidden="true" />
            {trackLabel[t]}
          </span>
        ))}
      </div>

      {/* ---------------- Phone: vertical timeline ---------------- */}
      <ol className="flex flex-col md:hidden roadmap-stack list-none" role="list">
        {roles.map((r, i) => {
          const end = r.end ?? NOW;
          const concurrent = roles.filter((o, j) => j !== i && overlaps(r, o));
          return (
            <li key={`${r.company}-${r.title}`} className="roadmap-stack__item">
              <span
                className={`roadmap-stack__rail ${trackClass[r.track]}`}
                style={{ '--len': `${Math.max(((end - r.start) / total) * 100 * 2.2, 14)}%` } as React.CSSProperties}
                aria-hidden="true"
              />
              <p className="type-footnote font-semibold text-navy-900 leading-snug">{r.title}</p>
              <p className="type-caption text-navy-600 leading-snug">{r.company}</p>
              <p className="mt-1 type-mono-sm text-ink-500">{r.date}</p>
              {concurrent.length > 0 && (
                <p className="mt-1.5 type-caption-2 text-ink-500">
                  Ran alongside {concurrent.map((c) => c.shortLabel.split(' · ')[0]).join(', ')}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      {/* ---------------- Desktop: swimlane Gantt ---------------- */}
      <div className="hidden md:block card overflow-hidden roadmap-chart" data-roadmap>
        {/* Year axis */}
        <div className={`border-b border-navy-800/10 bg-paper-200/60 ${GRID}`} aria-hidden="true">
          <div className="px-4 py-2 type-label font-semibold text-ink-400">Role</div>
          <div className="relative h-8">
            <div className="absolute inset-y-0 left-3 right-3">
              {years.map((y) => (
                <span
                  key={y}
                  className="absolute top-2 type-mono-sm text-ink-400 -translate-x-1/2"
                  style={{ left: `${frac(y) * 100}%` }}
                >
                  {y}
                </span>
              ))}
            </div>
          </div>
          <div className="pl-2 pr-4 py-2 type-label font-semibold text-ink-400 md:text-right">Span</div>
        </div>

        <table className="w-full text-left">
          <caption className="sr-only">
            Career roadmap, {spanStart} to present. Each row gives a role, its organization, and
            its span; overlapping spans indicate concurrent engagements.
          </caption>
          <thead className="sr-only">
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Timeline</th>
              <th scope="col">Span</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((r) => {
              const end = r.end ?? NOW;
              const from = frac(r.start);
              // Floor the width so a 3-month engagement is still a visible bar.
              const width = Math.max(frac(end) - from, 0.012);
              return (
                <tr
                  key={`${r.company}-${r.title}`}
                  className={`border-t border-navy-800/[0.07] md:items-center hover:bg-paper-200/50 transition-colors ${GRID}`}
                >
                  <th scope="row" className="block px-4 pt-2.5 pb-1 md:py-2.5 font-normal align-middle">
                    <span className="block type-footnote font-semibold text-navy-900 leading-snug">
                      {r.title}
                    </span>
                    <span className="block type-caption text-navy-600 leading-snug">{r.company}</span>
                  </th>
                  <td className="hidden md:block roadmap-lane" aria-hidden="true">
                    <div className="absolute inset-y-0 left-3 right-3">
                      <span
                        className={`roadmap-bar ${trackClass[r.track]}`}
                        style={
                          {
                            left: `${from * 100}%`,
                            width: `${width * 100}%`,
                            '--from': from,
                            '--inv': 1 / width,
                          } as React.CSSProperties
                        }
                        title={`${r.shortLabel} · ${r.date}`}
                      />
                    </div>
                  </td>
                  <td className="block px-4 pb-2.5 md:pl-2 md:pr-4 md:py-2.5 type-mono-sm text-ink-500 md:text-right md:whitespace-nowrap">
                    {r.date}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Playhead. Spans the chart body only — it starts below the year axis
            so it reads as a cursor over the bars, not a second gridline. */}
        <div className="roadmap-playhead-track" aria-hidden="true">
          <div className="roadmap-playhead" data-roadmap-playhead>
            <span className="roadmap-playhead__year" data-roadmap-year>
              {spanEnd}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-3 type-caption text-ink-500">
        Bars are to scale. Where they overlap, the work overlapped — contract engagements ran
        alongside a full-time role.
      </p>
    </div>
  );
}
