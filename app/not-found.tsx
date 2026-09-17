import Link from 'next/link';
import Icon from '@/components/Icon';
import Khanda from '@/components/Khanda';
import { nav } from '@/data/site';
import { pageMetadata } from '@/lib/site-metadata';

/**
 * The Astro 404 printed the requested path. A not-found page in the App Router
 * renders without the request URL, and rather than reach for a client component
 * to read `location.pathname` — shipping JS so a dead-end page can quote a
 * string back — the copy simply owns the situation and points at the way out.
 */
export const metadata = pageMetadata({
  path: '/404',
  title: 'Page not found',
  description: "404 — that page doesn't exist on this site.",
  noindex: true,
});

export default function NotFound() {
  return (
    <section className="container-x pt-44 sm:pt-52 pb-24 text-center">
      <Khanda size={64} className="mx-auto text-kesari-500 animate-float" />
      <p className="mt-6 type-display-1 text-kesari-gradient">404</p>
      <h1 className="mt-4 type-title-2 text-navy-900">This page doesn’t exist.</h1>
      <p className="mt-3 max-w-md mx-auto text-ink-600">
        That address isn’t part of this site — it may have moved, or never existed. Everything that is
        here is one click away.
      </p>

      <nav className="reveal is-visible mt-8 max-w-lg mx-auto" aria-label="Site sections">
        <ul className="flex flex-wrap justify-center gap-2" role="list">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex items-center min-h-11 rounded-lg border border-navy-800/14 px-4 type-subhead font-medium text-ink-700 hover:text-navy-900 hover:border-navy-800/30 transition-colors btn-press"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          <Icon name="arrow" size={18} className="rotate-180" /> Back home
        </Link>
        <Link href="/work" className="btn btn-secondary">
          View case studies
        </Link>
      </div>
    </section>
  );
}
