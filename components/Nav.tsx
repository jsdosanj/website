'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { nav, site } from '@/data/site';

/**
 * Site navigation. This is the one place translucent material is used: per the
 * HIG, glass belongs to the functional layer floating above content, never to
 * the content layer itself.
 *
 * Every control carries the 44pt minimum target and a press state.
 */
export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => {
    const current = pathname.replace(/\/$/, '') || '/';
    const target = href.replace(/\/$/, '') || '/';
    return target === current || (href !== '/' && current.startsWith(target));
  };

  // Route change closes the menu — without this it would stay open behind the
  // new page after a client-side navigation.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!menuRef.current?.contains(t) && !toggleRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="container-x mt-4" aria-label="Main navigation">
        <div className="glass rounded-2xl pl-3 pr-2.5 sm:pl-4 py-2 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center min-h-11 gap-3 min-w-0 btn-press"
            aria-label="Jasvant Dosanjh — home"
          >
            <Logo emblemSize={28} className="gap-2" />
          </Link>

          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={[
                    'inline-flex items-center min-h-11 px-3 rounded-lg type-subhead font-medium tracking-tight transition-colors btn-press',
                    isActive(item.href)
                      ? 'text-navy-900 bg-navy-900/[0.06]'
                      : 'text-ink-600 hover:text-navy-900 hover:bg-navy-900/[0.035]',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/resume"
              className="hidden lg:inline-flex items-center min-h-11 gap-1.5 rounded-lg border border-navy-800/14 px-4 type-footnote font-medium text-ink-600 hover:text-navy-900 hover:border-navy-800/28 transition-colors btn-press"
            >
              Résumé
            </Link>
            <Link
              href="/contact"
              data-magnetic="0.25"
              className="hidden sm:inline-flex items-center min-h-11 gap-2 rounded-lg bg-kesari-500 text-navy-950 px-4 type-footnote font-semibold hover:bg-kesari-400 transition-colors btn-press"
            >
              Let’s talk
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid place-items-center h-11 w-11 rounded-lg text-ink-800 hover:bg-navy-900/5 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="7" x2="21" y2="7" className={`burger-bar ${open ? 'is-open-top' : ''}`} />
                <line x1="3" y1="12" x2="21" y2="12" className={`burger-bar ${open ? 'is-open-mid' : ''}`} />
                <line x1="3" y1="17" x2="21" y2="17" className={`burger-bar ${open ? 'is-open-bottom' : ''}`} />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={menuRef}
          id="mobile-menu"
          className={`md:hidden mobile-menu mt-2 glass rounded-2xl p-2 ${open ? 'is-open' : ''}`}
          {...(!open ? { inert: '' as unknown as boolean } : {})}
        >
          <ul className="flex flex-col" role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    'flex items-center min-h-11 px-4 rounded-lg type-subhead font-medium transition-colors btn-press',
                    isActive(item.href) ? 'text-navy-900 bg-navy-900/[0.06]' : 'text-ink-700 hover:bg-navy-900/5',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="p-2">
              <Link
                href="/contact"
                className="flex items-center justify-center min-h-11 rounded-lg bg-kesari-500 text-navy-950 px-4 font-semibold btn-press"
              >
                Let’s talk
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export { site };
