import CountUp from './CountUp';
import Icon from './Icon';
import { metricGroups } from '@/data/value';

/**
 * Delivery metrics as a grouped KPI panel rather than a flat strip of numbers.
 * Each figure carries the program it came from, so a reader can trace "$750K"
 * back to the Tencent buildout instead of taking it on faith — which is the
 * difference between a dashboard and a wall of trivia.
 *
 * The figures count up once as each panel enters (see CountUp), which is the
 * one place on the site where motion carries meaning rather than polish: a
 * dashboard that builds reads as live, and these numbers are the page's claim.
 */
export default function MetricsDashboard() {
  return (
    <div className="reveal grid gap-5 sm:grid-cols-2">
      {metricGroups.map((g) => {
        const id = `kpi-${g.title.toLowerCase().replace(/\s+/g, '-')}`;
        return (
          <section key={g.title} className="card overflow-hidden" aria-labelledby={id}>
            <header className="flex items-center gap-2.5 px-5 py-3 border-b border-navy-800/10 bg-paper-200/60">
              <span className="grid place-items-center h-7 w-7 rounded-lg bg-paper-50 border border-navy-800/12 text-kesari-600">
                <Icon name={g.icon} size={15} />
              </span>
              <h3 id={id} className="type-label font-semibold text-navy-800">
                {g.title}
              </h3>
            </header>
            <dl className="divide-y divide-navy-800/[0.07]">
              {g.metrics.map((m) => (
                <div key={m.label} className="flex items-baseline gap-4 px-5 py-3.5">
                  <dd className="type-metric shrink-0 tabular-nums">
                    <CountUp text={m.value} />
                    {m.unit && <span className="type-callout font-semibold text-kesari-700">{m.unit}</span>}
                  </dd>
                  <dt className="min-w-0">
                    <span className="block type-footnote leading-snug text-ink-700">{m.label}</span>
                    <span className="block type-mono-sm leading-snug text-ink-400 mt-0.5">{m.source}</span>
                  </dt>
                </div>
              ))}
            </dl>
          </section>
        );
      })}
    </div>
  );
}
