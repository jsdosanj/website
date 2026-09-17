import Khanda from './Khanda';

/** Brand lockup: Khanda emblem + wordmark. Identical in nav and footer. */
export default function Logo({
  className = '',
  emblemSize = 30,
  showText = true,
  textClass = 'type-subhead',
}: { className?: string; emblemSize?: number; showText?: boolean; textClass?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 min-w-0 ${className}`}>
      <Khanda size={emblemSize} className="text-kesari-500 shrink-0" strokeWidth={2.4} />
      {showText && (
        <span
          className={`font-display font-semibold tracking-tight text-navy-900 leading-none truncate ${textClass}`}
        >
          Jasvant<span className="text-kesari-700"> Dosanjh</span>
        </span>
      )}
    </span>
  );
}
