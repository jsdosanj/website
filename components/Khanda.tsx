/**
 * Personal heritage emblem — a Khanda-inspired mark: chakkar ring, central
 * double-edged blade, two curved kirpans. Line art, inherits currentColor.
 * This is the geometric source the bespoke icon set borrows from.
 */
export default function Khanda({
  className = '',
  size = 64,
  strokeWidth = 2.2,
}: { className?: string; size?: number; strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="50" cy="53" r="23" />
      <path d="M34 19 C 19 35, 19 71, 36 87" />
      <path d="M66 19 C 81 35, 81 71, 64 87" />
      <path d="M50 9 C 45 33, 45 73, 50 97 C 55 73, 55 33, 50 9 Z" />
      <path d="M50 14 L 50 92" strokeWidth={strokeWidth * 0.6} opacity="0.55" />
    </svg>
  );
}
