/**
 * Jali — a tiling lattice inspired by Sikh and Mughal architectural screens.
 * Decorative only. Opacity is kept very low: a lattice drawn for a near-black
 * ground dominates a paper one.
 */
export default function Jali({
  className = '',
  opacity = 0.5,
  id = 'jali',
}: { className?: string; opacity?: number; id?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ opacity }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={id} width="56" height="56" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="28" cy="28" r="16" />
            <circle cx="0" cy="0" r="16" />
            <circle cx="56" cy="0" r="16" />
            <circle cx="0" cy="56" r="16" />
            <circle cx="56" cy="56" r="16" />
            <rect x="22" y="22" width="12" height="12" transform="rotate(45 28 28)" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
