'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Counts a figure up when it first scrolls into view.
 *
 * Three rules, all of them from the HIG's stance that motion must be
 * purposeful, brief, and optional:
 *
 *  1. The final value is what renders on the server. There is no "0" in the
 *     HTML, so a reader with JS off, a crawler, or a print stylesheet sees the
 *     real number — the animation is added to a correct page, never required
 *     to produce one.
 *  2. It runs once, on entry, for 900ms. A number that re-counts every time it
 *     scrolls past is decoration; this is a build-up that draws the eye to the
 *     figure the first time and then stops.
 *  3. prefers-reduced-motion skips it entirely.
 *
 * Only the digit run is animated. "$250K/yr" keeps its prefix and suffix fixed
 * and counts the 250, because animating the characters around a number is what
 * makes a counter look like a slot machine.
 */
export default function CountUp({ text, className = '' }: { text: string; className?: string }) {
  // Split "$2,000+" into "$" / "2,000" / "+". No digits → nothing to count.
  const match = /^([^\d]*)([\d,]+)(.*)$/.exec(text);
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (!match) return;
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const [, prefix = '', digits = '', suffix = ''] = match;
    const target = Number(digits.replace(/,/g, ''));
    if (!Number.isFinite(target) || target === 0) return;
    // Whether the source wrote the number with thousands separators.
    const grouped = digits.includes(',');

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || done.current) return;
        done.current = true;
        observer.disconnect();

        const DURATION = 900;
        const started = performance.now();
        let frame = 0;

        const tick = (now: number) => {
          const t = Math.min((now - started) / DURATION, 1);
          // Same expo-out curve as the reveal easing, so the count decelerates
          // on the exact profile the section it sits in animates on.
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          const n = Math.round(target * eased);
          setDisplay(prefix + (grouped ? n.toLocaleString('en-US') : String(n)) + suffix);
          if (t < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // `match` is derived from `text`; depending on the array identity would
    // re-run this effect on every render and restart the count.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
