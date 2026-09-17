import Icon from './Icon';
import ProductVisual from './ProductVisual';
import { statusMeta, type Product } from '@/data/products';
import { getLiveStats } from '@/data/live';
import { withInlineCode } from '@/lib/rich-text';

/**
 * Async server component: the live PyPI version badge is fetched on the server
 * and revalidated on its own clock (see data/live.ts), so a new release shows
 * up without a rebuild. `getLiveStats` is deduped per render, so rendering
 * twelve cards still costs one round of requests.
 */
export default async function ProductCard({ product }: { product: Product }) {
  const meta = statusMeta[product.status];

  const livePackageKey =
    product.slug === 'gurmukhifix' ? 'gurmukhifix' : product.slug === 'cairn' ? 'cairn-sync' : null;
  const liveVersion = livePackageKey ? (await getLiveStats()).packages[livePackageKey]?.version : undefined;

  const accentText = product.accent === 'kesari' ? 'text-kesari-700' : 'text-navy-600';
  const accentDot = product.accent === 'kesari' ? 'bg-kesari-500' : 'bg-navy-600';
  const statusColor =
    product.status === 'live'
      ? 'text-kesari-700 border-kesari-500/30 bg-kesari-500/10'
      : product.status === 'beta' || product.status === 'wip'
        ? 'text-navy-600 border-navy-500/30 bg-navy-500/10'
        : 'text-ink-600 border-navy-800/12 bg-navy-900/[0.03]';

  return (
    <article className="card card-hover border-glow reveal p-6 sm:p-6 flex flex-col h-full">
      {/* Generated cover art */}
      <div className="relative -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 mb-5 rounded-t-[0.9rem] overflow-hidden border-b border-navy-800/[0.10]">
        <ProductVisual product={product} />
        {product.openSource && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-navy-950/70 backdrop-blur px-2 py-1 type-mono-sm text-status-green border border-status-green/20">
            <span className="h-1.5 w-1.5 rounded-full bg-status-green" />
            open source
          </span>
        )}
        {product.freeLimited && (
          <span className="absolute top-3 left-3 max-w-[calc(100%-1.5rem)] inline-flex items-center gap-1.5 rounded-md bg-navy-950/70 backdrop-blur px-2 py-1 type-mono-sm text-kesari-300 border border-kesari-400/25">
            <span className="h-1.5 w-1.5 rounded-full bg-kesari-400" />
            free · limited time
          </span>
        )}
      </div>

      {/* flex-wrap, not nowrap-and-hope: at 200% text "Published Jun 13, 2026"
          is wider than a phone card, so the status column drops below the
          title instead of pushing off the edge. */}
      <div className="flex flex-wrap items-start justify-between gap-4 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <span
            className={`grid place-items-center h-11 w-11 rounded-xl bg-paper-200 border border-navy-800/12 shrink-0 ${accentText}`}
          >
            {product.gurmukhi ? (
              <span className="gurmukhi type-title-4 leading-none" lang="pa">
                {product.gurmukhi}
              </span>
            ) : (
              <span className="font-display font-bold type-body">{product.name.charAt(0)}</span>
            )}
          </span>
          <div className="min-w-0">
            <h3 className="font-display type-body font-semibold text-navy-900">{product.name}</h3>
            {product.gurmukhiName && (
              <p className="gurmukhi type-subhead leading-tight text-ink-700" lang="pa">
                {product.gurmukhiName}
              </p>
            )}
            <p className="type-label text-ink-500 mt-0.5">{product.category}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 min-w-0 text-right">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 type-caption-2 font-medium ${statusColor}`}
          >
            <span aria-hidden="true">{meta.symbol}</span>
            {meta.label}
          </span>
          {product.published && (
            <span className="type-mono-sm text-ink-500">
              {product.published === 'Ongoing' ? 'Ongoing' : `Published ${product.published}`}
            </span>
          )}
          {liveVersion && (
            <span className="inline-flex items-center gap-1 type-mono-sm text-status-green" title="Live version on PyPI">
              <span className="h-1.5 w-1.5 rounded-full bg-status-green animate-pulse-glow" />v{liveVersion}
            </span>
          )}
        </div>
      </div>

      <p className={`mt-5 type-subhead font-medium ${accentText}`}>{product.tagline}</p>
      <p className="mt-2 type-subhead leading-relaxed text-ink-600">{product.description}</p>

      <ul className="mt-5 space-y-2 flex-1" role="list">
        {product.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 type-subhead text-ink-700">
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${accentDot}`} aria-hidden="true" />
            <span className="min-w-0">{withInlineCode(h)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {product.tech.map((t) => (
          <span key={t} className="type-mono-sm text-ink-600 border border-navy-800/12 rounded-md px-2 py-1">
            {t}
          </span>
        ))}
      </div>

      {product.links.length > 0 && (
        <div className="mt-5 pt-5 hairline flex flex-wrap gap-3">
          {product.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`link-control type-subhead font-medium hover:underline underline-offset-4 btn-press ${accentText}`}
            >
              <Icon name={l.icon} size={15} />
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
