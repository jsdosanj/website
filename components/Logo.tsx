import Khanda from './Khanda';

/** Brand lockup: Khanda emblem + wordmark. Light-on-dark: it lives on the wine nav bar and footer. */
export default function Logo({
  className = '',
  emblemSize = 30,
  showText = true,
  textClass = 'type-subhead',
}: { className?: string; emblemSize?: number; showText?: boolean; textClass?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 min-w-0 ${className}`}>
      <Khanda size={emblemSize} className="text-kesari-400 shrink-0" strokeWidth={2.4} />
      {showText && (
        <span
          className={`font-display font-semibold tracking-tight text-white leading-none truncate ${textClass}`}
        >
          Jasvant<span className="text-kesari-400"> Dosanjh</span>
        </span>
      )}
    </span>
  );
}
