import type { Product } from '@/data/products';

/**
 * Generated cover art for each product card. Deterministic from the slug, so a
 * product always renders the same composition across builds — the alternative,
 * random-per-render art, would make every deploy a visual diff.
 *
 * One of four data-viz motifs (radar, node graph, waveform, layers) drawn in
 * the product's accent, over a faint grid, with the product's monogram ghosted
 * behind it.
 */
export default function ProductVisual({ product }: { product: Product }) {
  const isKesari = product.accent === 'kesari';
  const a1 = isKesari ? '#f0a93c' : '#5b86f5'; // accent
  const a2 = isKesari ? '#ffd98a' : '#8fb4ff'; // accent light

  // Seeded PRNG from the slug.
  let seed = 0;
  for (const ch of product.slug) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  const motif = seed % 4;
  const W = 400;
  const H = 168;
  const glyph = product.gurmukhi ?? product.name.charAt(0);

  const nodes = Array.from({ length: 7 }, () => ({
    x: 40 + rand() * (W - 80),
    y: 24 + rand() * (H - 48),
  }));
  const edges: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i];
      const b = nodes[j];
      if (!a || !b) continue;
      if (Math.hypot(a.x - b.x, a.y - b.y) < 130) edges.push([i, j]);
    }
  }
  const bars = Array.from(
    { length: 30 },
    (_, i) => 8 + Math.abs(Math.sin(i * 0.6 + seed) * 0.5 + rand() * 0.5) * 96
  );
  const blips = Array.from({ length: 5 }, () => {
    const ang = rand() * Math.PI * 2;
    const r = 18 + rand() * 64;
    return { x: 200 + Math.cos(ang) * r, y: 84 + Math.sin(ang) * r * 0.78, s: 1.6 + rand() * 2 };
  });
  const gid = `pv-${product.slug}`;

  return (
    <div className="pv" aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${gid}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={a1} stopOpacity="0.12" />
            <stop offset="1" stopColor="#0a0b0e" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`${gid}-glow`} cx="0.7" cy="0.2" r="0.9">
            <stop offset="0" stopColor={a1} stopOpacity="0.3" />
            <stop offset="1" stopColor={a1} stopOpacity="0" />
          </radialGradient>
          <pattern id={`${gid}-grid`} width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M22 0H0V22" fill="none" stroke={a2} strokeOpacity="0.08" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width={W} height={H} fill={`url(#${gid}-bg)`} />
        <rect width={W} height={H} fill={`url(#${gid}-grid)`} />
        <rect width={W} height={H} fill={`url(#${gid}-glow)`} />

        {/* Ghosted monogram */}
        <text
          x={W - 18}
          y={H - 14}
          textAnchor="end"
          fontFamily="var(--font-display), sans-serif"
          fontSize="120"
          fontWeight="700"
          fill={a1}
          fillOpacity="0.08"
        >
          {glyph}
        </text>

        {motif === 0 && (
          <g stroke={a1} fill="none">
            {[26, 46, 66, 86].map((r) => (
              <ellipse key={r} cx="200" cy="84" rx={r} ry={r * 0.78} strokeOpacity={0.18 + r / 600} />
            ))}
            <line x1="200" y1="84" x2={200 + 86} y2={84 - 30} stroke={a2} strokeOpacity="0.5" />
            {blips.map((b, i) => (
              <circle key={i} cx={b.x} cy={b.y} r={b.s} fill={a2} fillOpacity="0.9" stroke="none" />
            ))}
          </g>
        )}

        {motif === 1 && (
          <g>
            {edges.map(([i, j]) => (
              <line
                key={`${i}-${j}`}
                x1={nodes[i]!.x}
                y1={nodes[i]!.y}
                x2={nodes[j]!.x}
                y2={nodes[j]!.y}
                stroke={a1}
                strokeOpacity="0.28"
                strokeWidth="1"
              />
            ))}
            {nodes.map((n, i) => (
              <circle key={i} cx={n.x} cy={n.y} r={i === 0 ? 5 : 3} fill={i === 0 ? a2 : a1} fillOpacity="0.95" />
            ))}
          </g>
        )}

        {motif === 2 && (
          <g>
            {bars.map((h, i) => (
              <rect
                key={i}
                x={18 + i * 12.3}
                y={H - 24 - h}
                width="6"
                height={h}
                rx="2"
                fill={a1}
                fillOpacity={0.35 + h / 200}
              />
            ))}
            <line x1="0" y1={H - 24} x2={W} y2={H - 24} stroke={a2} strokeOpacity="0.25" />
          </g>
        )}

        {motif === 3 && (
          <g fill="none" strokeWidth="1.4">
            {[0, 1, 2, 3].map((k) => (
              <rect
                key={k}
                x={70 + k * 14}
                y={36 + k * 20}
                width="200"
                height="56"
                rx="10"
                stroke={k === 0 ? a2 : a1}
                strokeOpacity={0.55 - k * 0.12}
                fill={a1}
                fillOpacity={0.05}
              />
            ))}
          </g>
        )}
      </svg>
    </div>
  );
}
