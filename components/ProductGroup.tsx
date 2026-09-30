'use client';

import { createContext, useCallback, useContext, useId, useMemo, useState } from 'react';
import Icon from './Icon';

/**
 * Collapsible product cards.
 *
 * `ProductGroup` wraps one section's grid and owns which cards are open, so a
 * single "Expand all / Collapse all" button can drive the whole section while
 * every card still toggles on its own. `ProductDetails` is the per-card
 * disclosure. Outside a group (the home page's featured trio) there is no
 * context and the details simply render open, with no button.
 *
 * Collapsed content is `inert` as well as clipped: a 0-height row still leaves
 * its links in the tab order unless it is made inert.
 */
type Ctx = { open: Set<string>; toggle: (id: string) => void };
const GroupContext = createContext<Ctx | null>(null);

export function ProductGroup({
  ids,
  label,
  toolbar = true,
  defaultOpen = false,
  children,
}: {
  /** Every product id in this section, so "expand all" knows what "all" is. */
  ids: string[];
  /** Section name, used to make the section button's accessible name specific. */
  label: string;
  /** Show the "Expand all" bar. Off where the cards are a short highlight, not a catalogue. */
  toolbar?: boolean;
  /** Start with every card open (the home page highlights) instead of closed. */
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<Set<string>>(() => new Set(defaultOpen ? ids : []));
  const allOpen = ids.length > 0 && ids.every((id) => open.has(id));

  const toggle = useCallback((id: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleAll = () => setOpen(allOpen ? new Set() : new Set(ids));
  const value = useMemo(() => ({ open, toggle }), [open, toggle]);

  return (
    <GroupContext.Provider value={value}>
      {toolbar && (
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="type-caption text-ink-500" aria-live="polite">
          {open.size} of {ids.length} open
        </p>
        <button
          type="button"
          onClick={toggleAll}
          aria-label={`${allOpen ? 'Collapse' : 'Expand'} all in ${label}`}
          className="inline-flex items-center gap-2 min-h-11 rounded-xl border border-navy-800/20 px-4 type-subhead font-medium text-ink-800 hover:bg-navy-900/5 transition-colors btn-press"
        >
          <Icon name="arrow" size={15} className={`transition-transform duration-300 ${allOpen ? '-rotate-90' : 'rotate-90'}`} />
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>
      )}
      {/* With the toolbar (a collapsible catalogue): items-start and h-auto, so a
          card that opens grows on its own instead of stretching its neighbours
          in the same row. Without it (the home highlights) the cards stay
          equal height. */}
      <div
        className={`${toolbar ? 'mt-4 items-start [&>*]:h-auto' : 'mt-10'} grid gap-6 md:grid-cols-2 xl:grid-cols-3`}
      >
        {children}
      </div>
    </GroupContext.Provider>
  );
}

export function ProductDetails({
  id,
  name,
  children,
}: {
  id: string;
  name: string;
  children: React.ReactNode;
}) {
  const ctx = useContext(GroupContext);
  const regionId = useId();

  if (!ctx) return <>{children}</>;

  const isOpen = ctx.open.has(id);
  return (
    <>
      <button
        type="button"
        onClick={() => ctx.toggle(id)}
        aria-expanded={isOpen}
        aria-controls={regionId}
        aria-label={`${isOpen ? 'Hide' : 'Show'} details for ${name}`}
        className="mt-3 -ml-3 inline-flex items-center gap-2 min-h-11 rounded-xl px-3 type-subhead font-medium text-navy-700 hover:bg-navy-900/5 transition-colors btn-press"
      >
        <Icon name="arrow" size={15} className={`transition-transform duration-300 ${isOpen ? '-rotate-90' : 'rotate-90'}`} />
        {isOpen ? 'Hide details' : 'Show details'}
      </button>
      <div
        id={regionId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        {...(!isOpen ? { inert: '' as unknown as boolean } : {})}
      >
        <div className="min-h-0 overflow-hidden">{children}</div>
      </div>
    </>
  );
}
