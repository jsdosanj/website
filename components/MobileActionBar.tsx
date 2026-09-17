'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from './Icon';

/**
 * Mobile-only action bar, pinned to the bottom of the viewport.
 *
 * Mobile was previously the desktop layout stacked, which left the two primary
 * actions — talk to him, read the résumé — scrolled far off screen. On a phone
 * those belong in the thumb zone, always reachable, which is why this exists at
 * all rather than being a second copy of the nav.
 *
 * It appears only after the hero has scrolled past, so it never competes with
 * the hero's own buttons, and it hides itself on /contact where it would be
 * pointing at the page you are already on.
 */
export default function MobileActionBar() {
  const pathname = usePathname();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Threshold is one viewport height: past the fold, the hero CTAs are gone.
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (pathname === '/contact') return null;

  return (
    <div
      className={`md:hidden action-bar ${shown ? 'is-shown' : ''}`}
      // Hidden from the tab order and the screen reader while off screen, so a
      // keyboard user never lands on a control they cannot see.
      {...(!shown ? { inert: '' as unknown as boolean, 'aria-hidden': true } : {})}
    >
      <div className="action-bar__inner">
        <Link href="/contact" className="btn btn-primary flex-1" data-magnetic="0.2">
          Let’s talk
          <Icon name="arrow" size={17} />
        </Link>
        <Link href="/resume" className="btn btn-secondary" aria-label="View résumé">
          <Icon name="file" size={17} />
          <span className="type-footnote">Résumé</span>
        </Link>
      </div>
    </div>
  );
}
