import Link from 'next/link';
import Icon from './Icon';
import Logo from './Logo';
import { nav, site } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-28 pb-20 md:pb-0">
      <div className="container-x">
        <div className="type-footnote text-ink-600 border-y border-navy-800/[0.11] py-3 flex flex-wrap items-center gap-x-5 gap-y-1.5">
          <span className="chip chip-delivered">open to work</span>
          <span>
            Seeking <span className="font-medium text-navy-900">{site.targetRole}</span> roles
          </span>
          <span className="hidden sm:inline text-ink-400">·</span>
          <span className="hidden sm:inline">{site.location}</span>
          <span className="ml-auto hidden lg:inline type-mono-sm text-ink-400">
            10 years delivering technical programs
          </span>
        </div>
      </div>

      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo emblemSize={34} textClass="type-body" />
            <p className="mt-4 max-w-sm type-subhead leading-relaxed text-ink-600">{site.tagline}</p>
            <Link
              href="/contact#resumes"
              data-magnetic="0.3"
              className="mt-6 inline-flex items-center min-h-11 gap-2 rounded-xl bg-kesari-500 text-navy-950 px-5 type-subhead font-semibold hover:bg-kesari-400 transition-colors btn-press"
            >
              <Icon name="download" size={16} /> Download résumé
            </Link>
            <Link href="/resume" className="link-control type-caption text-ink-500 hover:text-navy-900">
              or view it online →
            </Link>
          </div>

          <div>
            <h3 className="type-label font-semibold text-ink-500">Navigate</h3>
            <ul className="mt-4 space-y-1" role="list">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-control min-w-11 type-subhead text-ink-600 hover:text-navy-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="type-label font-semibold text-ink-500">Connect</h3>
            <ul className="mt-4 space-y-1" role="list">
              <li>
                <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="link-control type-subhead text-ink-600 hover:text-navy-900">
                  <Icon name="linkedin" size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="link-control type-subhead text-ink-600 hover:text-navy-900">
                  <Icon name="github" size={16} /> GitHub
                </a>
              </li>
              <li>
                <Link href="/contact" className="link-control type-subhead text-ink-600 hover:text-navy-900">
                  <Icon name="arrow" size={16} /> Contact form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 hairline flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="type-caption text-ink-500 flex items-center gap-3 flex-wrap justify-center">
            <span>© {year} {site.founder}</span>
            <span className="text-ink-400">·</span>
            <Link href="/ai-policy" className="link-control hover:text-navy-900 underline underline-offset-4">
              AI &amp; content policy
            </Link>
          </p>
          <p className="gurmukhi type-subhead text-ink-600">
            <span lang="pa">ਚੜ੍ਹਦੀ ਕਲਾ</span> —{' '}
            <span className="font-sans not-italic text-ink-500">built in chardi kala</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
