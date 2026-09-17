import Link from 'next/link';
import Icon from './Icon';
import { essayBySlug } from '@/app/blog/essays';

/**
 * Shared frame for a long-form essay: back link, header, the prose measure,
 * and the sources card. The title, dek and date come from the essays manifest
 * rather than being retyped here, so the index and the post can't disagree.
 *
 * Measure is 72ch. The HIG's guidance on reading length maps to roughly
 * 50–75 characters per line; 72 is the top of that, which suits a technical
 * essay with long proper nouns in it.
 */
export default function EssayShell({
  slug,
  sources,
  children,
}: {
  slug: string;
  sources: { label: string; href: string }[];
  children: React.ReactNode;
}) {
  const essay = essayBySlug(slug);
  if (!essay) return null;

  return (
    <article className="container-x relative pt-32 sm:pt-40 pb-24">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-20 h-72 w-72 rounded-full bg-kesari-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[72ch] mx-auto">
        <Link href="/blog" className="link-control type-subhead font-medium text-ink-600 hover:text-navy-900 btn-press">
          <span className="rotate-180 inline-flex">
            <Icon name="arrow" size={15} />
          </span>{' '}
          All writing
        </Link>
      </div>

      <header className="relative max-w-[72ch] mx-auto mt-8 reveal is-visible">
        <p className="eyebrow">Essay</p>
        <h1 className="mt-4 type-display-2 text-navy-900">{essay.title}</h1>
        <p className="mt-6 type-title-4 font-normal text-ink-700">{essay.dek}</p>
        <p className="mt-6 type-subhead text-ink-500">
          By Jasvant Singh Dosanjh ·{' '}
          <time dateTime={essay.published}>{essay.date}</time>
        </p>
        <div className="mt-8 hairline" />
      </header>

      <div className="prose-jsd relative max-w-[72ch] mx-auto mt-10">{children}</div>

      <div className="relative max-w-[72ch] mx-auto mt-16">
        <div className="card border-glow p-6 sm:p-8">
          <h2 className="eyebrow">Sources</h2>
          <ul className="mt-5 space-y-2.5" role="list">
            {sources.map((s) => (
              <li key={s.href} className="flex gap-2.5 type-subhead leading-relaxed text-ink-600">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-kesari-500/70 shrink-0" aria-hidden="true" />
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-700 hover:underline underline-offset-4 break-words min-w-0"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
