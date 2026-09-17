import Image from 'next/image';

/**
 * A plain, well-framed portrait. next/image handles AVIF/WebP negotiation and
 * sizing, which the previous hand-rolled <img> did not.
 */
export default function Portrait({
  src,
  alt,
  className = '',
  focus = '50% 50%',
  priority = false,
  sizes = '(max-width: 1024px) 88vw, 32rem',
}: {
  src: string;
  alt: string;
  className?: string;
  focus?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`portrait ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: 'cover', objectPosition: focus }}
      />
    </div>
  );
}
