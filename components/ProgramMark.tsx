/**
 * Program marks — one drawn glyph per headline program.
 *
 * These are not category icons. A "compliance" shield or a "team" people-icon
 * would tell you the subject and nothing else; each of these draws the *shape*
 * of the program — how it actually went — so a reader skimming the cards picks
 * up the story before reading a word of it.
 *
 * They share Icon.tsx's construction exactly: a 24×24 grid with a 2.5 inset
 * (19-unit live area), 1.6 stroke, round caps and joins, and the same three
 * primitives — the true circle (chakkar), the pointed lens (the Khanda's
 * blade), and the full-width horizontal bar (Gurmukhi's sirorekha). What
 * differs is how the primitives are *used*, and that use is the vocabulary:
 *
 *   bar     the plan, the baseline, the target line
 *   lens    a thing delivered
 *   chakkar scope, or a system being covered
 *
 * So `recovery` is a target line with a curve that dives below it and comes
 * back; `greenfield` is a baseline with a single lens rising out of it;
 * `interim` is a ring with a gap held open by a lens. Each is at most four
 * strokes, because a mark that needs five is a diagram and will not read at
 * 20px next to a card title.
 */
export type MarkName =
  | 'suite'
  | 'recovery'
  | 'interim'
  | 'greenfield'
  | 'rollout'
  | 'pipeline'
  | 'foundation'
  | 'bridge';

const S = 1.6;

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: S,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/**
 * A blade lens: two quadratic arcs meeting at a point top and bottom, centred
 * on (cx, cy), `h` units tall and with control points `w` out to each side.
 *
 * Quadratics rather than the cubics this started as: a cubic lens overshot its
 * stated width, so three of them side by side merged into one texture at label
 * size. A quadratic's widest point is a predictable 3/4 of the control offset,
 * which makes the spacing something you can reason about instead of nudge.
 */
const lens = (cx: number, cy: number, w: number, h: number) =>
  `M${cx} ${cy - h}Q${cx + w} ${cy} ${cx} ${cy + h}Q${cx - w} ${cy} ${cx} ${cy - h}Z`;

const MARKS: Record<MarkName, React.ReactNode> = {
  /* One roadmap, three things shipped under it. The card's own numbers say
     twelve; three lenses is what reads at label size — and they are spaced so
     that at 22px they stay three objects rather than one zigzag. */
  suite: (
    <g {...strokeProps}>
      <path d="M2.5 5.5h19" />
      <path d={lens(6.2, 15, 2.2, 5.4)} />
      <path d={lens(12, 15, 2.2, 5.4)} />
      <path d={lens(17.8, 15, 2.2, 5.4)} />
    </g>
  ),

  /* The shape of a recovered program: a target line, a dive well below it,
     and a return to the line. The dip is a round-bottomed U, not the V the
     first attempt produced — steep control points made it read as a checkmark,
     which says something else entirely. The target line is solid, because a
     2.6-unit dash pattern disappears at 22px. */
  recovery: (
    <g {...strokeProps}>
      <path d="M2.5 7.4h19" />
      <path d="M3.4 7.4C6.6 7.4 6.6 18.8 12 18.8s5.4-11.4 8.6-11.4" />
    </g>
  ),

  /* A ring with a quarter turn held open — the vacancy — and a lens standing
     in the gap. Two corrections from the first attempt: a 60-degree opening
     closed up at 22px and the ring read as unbroken, and with the gap at the
     top the whole glyph read as a power symbol, which says something else
     entirely. Turning it to the right side keeps the meaning and loses the
     collision. */
  interim: (
    <g {...strokeProps}>
      <path d="M17.8 18.3A8.2 8.2 0 1 1 17.8 6.7" />
      <path d={lens(18.2, 12.5, 2.4, 3.1)} transform="rotate(90 18.2 12.5)" />
    </g>
  ),

  /* Zero to one: a baseline, and one thing standing up out of nothing. */
  greenfield: (
    <g {...strokeProps}>
      <path d="M2.5 20.8h19" />
      <path d={lens(12, 12.4, 4.6, 8.4)} />
    </g>
  ),

  /* One origin, three waves of increasing reach. A rollout spreading. */
  rollout: (
    <g {...strokeProps}>
      <circle cx="5" cy="12" r="2.4" />
      <path d="M9.6 6.6h5.2M9.6 12h8.4M9.6 17.4h11.9" />
    </g>
  ),

  /* A device entering at the left and passing two gates untouched — the line
     runs straight through without stopping, which is the whole point of
     zero-touch. Two full-height posts, not three short ticks: at 5.6 units the
     first version's gates were barely longer than the stroke is wide and read
     as noise on the line rather than as things being passed through. */
  pipeline: (
    <g {...strokeProps}>
      <path d="M2.5 12h19" />
      <circle cx="4.4" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M10.8 5.4v13.2M17 5.4v13.2" />
    </g>
  ),

  /* Something others built on top of: a wide base, narrowing courses, and a
     chakkar where the product ended up. */
  foundation: (
    <g {...strokeProps}>
      <path d="M2.5 20.2h19" />
      <path d="M5.6 14.8h12.8" />
      <path d="M8.8 9.4h6.4" />
      <circle cx="12" cy="4.6" r="1.9" />
    </g>
  ),

  /* Two systems that did not speak, joined. */
  bridge: (
    <g {...strokeProps}>
      <circle cx="6" cy="12" r="3.4" />
      <circle cx="18" cy="12" r="3.4" />
      <path d="M9.4 12h5.2" />
    </g>
  ),
};

export default function ProgramMark({
  name,
  className = '',
  size = 22,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const glyph = MARKS[name as MarkName];
  if (!glyph) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  );
}
