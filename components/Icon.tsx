/**
 * Bespoke icon set — inline SVG, no icon font, CSP-safe.
 *
 * These are drawn to one construction rather than borrowed from a generic
 * stroke set, because an off-the-shelf icon pack is one of the fastest ways a
 * site reads as templated.
 *
 * The construction, applied to every glyph:
 *
 *   grid          24×24, with a 2.5 inset — so the live area is 19 units and
 *                 every icon optically fills the same box as its neighbours.
 *   stroke        1.6 units. Lighter than the 2.0 most sets ship, tuned to sit
 *                 level with Bricolage's stem weight at label sizes instead of
 *                 looking bolder than the text beside it.
 *   joins         round, radius left to the stroke — no mitred corners, which
 *                 would fight the Jali lattice and the Khanda's curves.
 *   vocabulary    three primitives, reused deliberately: the true circle (from
 *                 the chakkar), the pointed lens (from the Khanda's blade), and
 *                 a full-width horizontal bar (from Gurmukhi's sirorekha, the
 *                 headline stroke that runs across the top of the script).
 *                 Every glyph is built from those, so the set coheres even
 *                 though the subjects don't.
 *   optical       weight is distributed, not centred: glyphs that would read
 *                 light at small sizes (arrow, code) carry one extra unit of
 *                 length rather than a heavier stroke.
 *
 * github and linkedin are the official marks, filled, left alone — a brand
 * mark is not ours to redraw.
 */
type IconName =
  | 'github' | 'linkedin' | 'external' | 'file' | 'mail' | 'pin' | 'arrow'
  | 'sparkles' | 'target' | 'workflow' | 'shield' | 'code' | 'server'
  | 'spark' | 'mic' | 'globe' | 'book' | 'headset' | 'chart' | 'download';

const S = 1.6;

/** Stroked glyphs share one set of stroke attributes. */
const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: S,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const GLYPHS: Record<IconName, React.ReactNode> = {
  // ---- official brand marks, filled ----
  github: (
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  ),

  /* A roadmap, not two abstract nodes: a sirorekha bar with three bars of
     descending length hung beneath it. The subject of this site is delivery,
     so its primary icon is a plan. */
  workflow: (
    <g {...strokeProps}>
      <path d="M2.5 5.5h19" />
      <path d="M5 10h12.5" />
      <path d="M5 14.5h8.5" />
      <path d="M5 19h4.5" />
    </g>
  ),

  /* The chakkar, twice, with a filled centre — concentric true circles rather
     than the usual crosshair, so it sits in the same family as the Khanda. */
  target: (
    <g {...strokeProps}>
      <circle cx="12" cy="12" r="9.2" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </g>
  ),

  /* A shield drawn as the blade lens closed at the foot — the Khanda's
     vesica, not a rounded crest, with the check as a single unbroken stroke. */
  shield: (
    <g {...strokeProps}>
      <path d="M12 2.4c3 2.1 5.6 3.1 8 3.1 0 8.3-2.7 13.4-8 16.1-5.3-2.7-8-7.8-8-16.1 2.4 0 5-1 8-3.1Z" />
      <path d="m8.6 11.9 2.5 2.5 4.3-4.9" />
    </g>
  ),

  /* Two stacked racks under a sirorekha bar, status lamp on the left where
     the eye lands first. */
  server: (
    <g {...strokeProps}>
      <path d="M2.5 3.2h19" />
      <rect x="3.4" y="6.4" width="17.2" height="6.1" rx="1.6" />
      <rect x="3.4" y="15.4" width="17.2" height="6.1" rx="1.6" />
      <circle cx="7" cy="9.45" r=".95" fill="currentColor" stroke="none" />
      <circle cx="7" cy="18.45" r=".95" fill="currentColor" stroke="none" />
    </g>
  ),

  /* The blade lens, upright and filled — the site's emphasis mark. */
  spark: (
    <path d="M12 1.8c1.9 5.6 3.4 8.6 6.4 10.2-3 1.6-4.5 4.6-6.4 10.2-1.9-5.6-3.4-8.6-6.4-10.2 3-1.6 4.5-4.6 6.4-10.2Z" />
  ),

  /* One lens plus two smaller ones on the diagonal, instead of the usual
     four-point star — keeps the blade motif and reads at 14px. */
  sparkles: (
    <g>
      <path d="M10 3.2c1.3 3.9 2.3 5.9 4.4 7-2.1 1.1-3.1 3.1-4.4 7-1.3-3.9-2.3-5.9-4.4-7 2.1-1.1 3.1-3.1 4.4-7Z" />
      <path d="M18.4 12.4c.6 1.8 1.1 2.7 2 3.2-.9.5-1.4 1.4-2 3.2-.6-1.8-1.1-2.7-2-3.2.9-.5 1.4-1.4 2-3.2Z" />
    </g>
  ),

  /* A document with the fold drawn as a real corner, and two rules of
     unequal length so it reads as a page of text rather than a blank sheet. */
  file: (
    <g {...strokeProps}>
      <path d="M13.6 2.5H6.8A1.8 1.8 0 0 0 5 4.3v15.4a1.8 1.8 0 0 0 1.8 1.8h10.4a1.8 1.8 0 0 0 1.8-1.8V7.7Z" />
      <path d="M13.6 2.5v5.2h5.4" />
      <path d="M8.4 13.2h7.2M8.4 16.8h4.6" />
    </g>
  ),

  /* Sirorekha bar over a descending bar chart — used for the metrics. */
  chart: (
    <g {...strokeProps}>
      <path d="M3.2 2.8v18h17.6" />
      <path d="M7.4 17V11.4M12 17V6.6M16.6 17v-7.8" />
    </g>
  ),

  download: (
    <g {...strokeProps}>
      <path d="M12 3v12.4" />
      <path d="m7.4 11 4.6 4.6L16.6 11" />
      <path d="M4 20.2h16" />
    </g>
  ),

  /* Longer shaft than most arrow glyphs so it holds its weight beside
     16px text without thickening the stroke. */
  arrow: (
    <g {...strokeProps}>
      <path d="M3.2 12h16.4" />
      <path d="m13.6 5.8 6 6.2-6 6.2" />
    </g>
  ),

  external: (
    <g {...strokeProps}>
      <path d="M14.4 3.2h6.4v6.4" />
      <path d="M20.8 3.2 11.6 12.4" />
      <path d="M18 14v5.2a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 19.2V7.8A1.8 1.8 0 0 1 4.8 6H10" />
    </g>
  ),

  mail: (
    <g {...strokeProps}>
      <rect x="2.6" y="4.6" width="18.8" height="14.8" rx="2" />
      <path d="m3.6 6.4 8.4 6.4 8.4-6.4" />
    </g>
  ),

  pin: (
    <g {...strokeProps}>
      <path d="M12 21.6s-7.4-6.3-7.4-11.6a7.4 7.4 0 0 1 14.8 0c0 5.3-7.4 11.6-7.4 11.6Z" />
      <circle cx="12" cy="9.8" r="2.7" />
    </g>
  ),

  /* Angle brackets set wider apart than usual, with a slash between, so the
     glyph reads as code rather than a chevron pair. */
  code: (
    <g {...strokeProps}>
      <path d="m15.6 5.6 5.6 6.4-5.6 6.4" />
      <path d="m8.4 5.6-5.6 6.4 5.6 6.4" />
      <path d="m13.4 4.4-2.8 15.2" />
    </g>
  ),

  /* A book drawn with its spine as a sirorekha bar down the left. */
  book: (
    <g {...strokeProps}>
      <path d="M4 3.2v17.6a1.8 1.8 0 0 0 1.8 1.8H20" />
      <path d="M20 22.6V1.4H5.8A1.8 1.8 0 0 0 4 3.2" />
      <path d="M8.2 7.2h7.4M8.2 11h4.8" />
    </g>
  ),

  headset: (
    <g {...strokeProps}>
      <path d="M3.4 14.6v-2.2a8.6 8.6 0 0 1 17.2 0v2.2" />
      <rect x="2.6" y="13.6" width="4.4" height="7.2" rx="1.6" />
      <rect x="17" y="13.6" width="4.4" height="7.2" rx="1.6" />
    </g>
  ),

  mic: (
    <g {...strokeProps}>
      <rect x="9.2" y="2.4" width="5.6" height="11.2" rx="2.8" />
      <path d="M5.4 11.4a6.6 6.6 0 0 0 13.2 0" />
      <path d="M12 18v3.6" />
      <path d="M8.4 21.6h7.2" />
    </g>
  ),

  /* Globe built from the chakkar plus one meridian lens — same two
     primitives as the Khanda, which is the point. */
  globe: (
    <g {...strokeProps}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M2.8 12h18.4" />
      <path d="M12 2.8c2.6 2.6 3.9 5.7 3.9 9.2s-1.3 6.6-3.9 9.2c-2.6-2.6-3.9-5.7-3.9-9.2s1.3-6.6 3.9-9.2Z" />
    </g>
  ),
};

export default function Icon({
  name,
  className = '',
  size = 20,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const glyph = GLYPHS[name as IconName];
  if (!glyph) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  );
}
