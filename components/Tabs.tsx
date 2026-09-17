'use client';

import { useRef, useState } from 'react';

/**
 * An ARIA tab list with the keyboard behaviour the pattern actually requires:
 * a roving tabindex (one stop for the whole list, not one per tab), arrow keys
 * to move between tabs, and Home/End to jump to the ends.
 *
 * Panels are passed in as already-rendered server content, so the interactive
 * shell is the only thing that ships as client JavaScript — the cards inside
 * stay server components.
 *
 * Note what is deliberately absent: the panels' contents are not `.reveal`.
 * A scroll-reveal inside a hidden panel gets measured at zero size and can
 * stick at opacity 0 the first time its tab is opened; the Astro version
 * worked around that by force-clearing the styles on switch. Not marking them
 * for reveal at all removes the bug instead of patching it — they animate in
 * with the section around them.
 */
export default function Tabs({
  label,
  tabs,
}: {
  label: string;
  tabs: { id: string; label: string; panel: React.ReactNode }[];
}) {
  const [active, setActive] = useState(tabs[0]?.id ?? '');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (from: number, key: string) => {
    let next = from;
    if (key === 'ArrowLeft') next = (from - 1 + tabs.length) % tabs.length;
    else if (key === 'ArrowRight') next = (from + 1) % tabs.length;
    else if (key === 'Home') next = 0;
    else if (key === 'End') next = tabs.length - 1;
    else return false;
    const target = tabs[next];
    if (!target) return false;
    setActive(target.id);
    refs.current[next]?.focus();
    return true;
  };

  return (
    <div>
      <div role="tablist" aria-label={label} className="flex justify-center gap-1.5">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-controls={`panel-${t.id}`}
            aria-selected={active === t.id}
            tabIndex={active === t.id ? 0 : -1}
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => {
              if (move(i, e.key)) e.preventDefault();
            }}
            className="tab-btn"
          >
            <span className="text-ink-400" aria-hidden="true">#</span> {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          hidden={active !== t.id}
          className="tab-panel mt-6 grid gap-5 md:grid-cols-2"
        >
          {t.panel}
        </div>
      ))}
    </div>
  );
}
