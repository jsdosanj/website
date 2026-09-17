'use client';

import { useState } from 'react';

/**
 * Seamless horizontal marquee. Two identical tracks scroll as one; it pauses on
 * hover and focus-within, reverses with `reverse`, and carries a
 * keyboard-reachable pause/play control — WCAG 2.2.2 requires a way to stop
 * anything that moves for more than five seconds, and hover alone does not
 * reach a keyboard or touch user.
 *
 * Under prefers-reduced-motion the CSS slows it to a crawl rather than killing
 * it, because the content is a list and a static crop would hide most of it.
 */
export default function Marquee({
  items,
  reverse = false,
  dur = 40,
  className = '',
  label = 'Tools and technologies',
}: {
  items: string[];
  reverse?: boolean;
  dur?: number;
  className?: string;
  label?: string;
}) {
  const [paused, setPaused] = useState(false);

  const track = (hidden: boolean) => (
    <div className="marquee__track" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <span key={it} className="marquee__item">
          <span className="marquee__dot" aria-hidden="true">
            ◆
          </span>
          {it}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee ${paused ? 'is-paused' : ''} ${className}`}
      {...(reverse ? { 'data-rev': '' } : {})}
      style={{ '--marquee-dur': `${dur}s` } as React.CSSProperties}
      role="region"
      aria-label={label}
    >
      <div className="marquee__viewport">
        {track(false)}
        {track(true)}
      </div>
      <button
        type="button"
        className="marquee__toggle"
        onClick={() => setPaused((v) => !v)}
        aria-label={paused ? 'Resume scrolling' : 'Pause scrolling'}
      >
        <span aria-hidden="true">{paused ? '▶' : '❙❙'}</span>
      </button>
    </div>
  );
}
