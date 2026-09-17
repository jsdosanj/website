export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className = '',
  children,
}: {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`reveal ${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}>
      {eyebrow && <p className={`eyebrow ${align === 'center' ? 'eyebrow-center' : ''}`}>{eyebrow}</p>}
      <h2 className="mt-3 type-title-1 text-navy-900">{title}</h2>
      {children}
    </div>
  );
}
