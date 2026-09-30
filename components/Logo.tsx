import Image from 'next/image';

/**
 * Brand lockup: my face, then the wordmark. The photo is a 128px square that
 * the ring and radius turn into a circle. Light-on-dark: it lives on the wine
 * nav bar and footer.
 */
export default function Logo({
  className = '',
  emblemSize = 30,
  showText = true,
  textClass = 'type-subhead',
}: { className?: string; emblemSize?: number; showText?: boolean; textClass?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 min-w-0 ${className}`}>
      <Image
        src="/images/logo-face-128.webp"
        alt={showText ? '' : 'Jasvant Singh Dosanjh'}
        width={emblemSize}
        height={emblemSize}
        priority
        className="shrink-0 rounded-full ring-2 ring-kesari-400/70 object-cover"
        style={{ width: emblemSize, height: emblemSize }}
      />
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
