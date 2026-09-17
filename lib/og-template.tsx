/**
 * Shared visual for the per-page OG images, rendered by next/og (satori +
 * resvg under the hood) at build time.
 *
 * It matches the site's light delivery surface: paper ground, a kesari rule
 * above a mono eyebrow, navy display type, and a footer byline — so a shared
 * link looks like it came from this specific site rather than a generic
 * template.
 *
 * Colours are hard-coded hex rather than design tokens on purpose: satori
 * resolves no CSS variables and no cascade, so every value has to be literal
 * here. The comments name which token each one mirrors, so a palette change
 * has a checklist.
 */
export type OgProps = { eyebrow: string; title: string };

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

const PAPER_50 = '#ffffff';
const PAPER_100 = '#fbfcfd';
const PAPER_300 = '#eaeef3';
const NAVY_900 = '#10203a';
const NAVY_600 = '#35598f';
const INK_500 = '#5d6e88';
const INK_400 = '#7b8aa0';
const KESARI_500 = '#e09c22';
const KESARI_700 = '#94620d';

export function OgCard({ eyebrow, title }: OgProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: PAPER_100,
        // the same two ambient washes the site's .bg-page uses
        backgroundImage:
          'radial-gradient(52% 58% at 6% -12%, rgba(224,156,34,0.16), rgba(255,255,255,0)), radial-gradient(48% 55% at 98% 2%, rgba(53,89,143,0.16), rgba(255,255,255,0))',
        padding: 56,
        fontFamily: 'Hanken Grotesk',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 24,
          background: PAPER_50,
          border: `1px solid ${PAPER_300}`,
          overflow: 'hidden',
        }}
      >
        {/* top rule — the kesari accent as a full-bleed hairline */}
        <div style={{ display: 'flex', height: 6, background: KESARI_500 }} />

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 62px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: KESARI_700,
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: 3,
              textTransform: 'uppercase',
              fontFamily: 'JetBrains Mono',
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 24,
              color: NAVY_900,
              // Two steps only: a continuous scale would let a 33- and a
              // 35-character title render at visibly different sizes for no
              // reason a reader could perceive.
              fontSize: title.length > 34 ? 58 : 70,
              fontWeight: 700,
              lineHeight: 1.06,
              fontFamily: 'Bricolage Grotesque',
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '20px 62px 26px',
            borderTop: `1px solid ${PAPER_300}`,
            fontSize: 21,
            fontFamily: 'JetBrains Mono',
          }}
        >
          <span style={{ color: NAVY_900, fontWeight: 500 }}>Jasvant Singh Dosanjh</span>
          <span style={{ color: INK_400 }}>·</span>
          <span style={{ color: NAVY_600 }}>Technical Program Manager</span>
          <span style={{ color: INK_500, marginLeft: 'auto' }}>jasvant.dosanjhlabs.com</span>
        </div>
      </div>
    </div>
  );
}

/** Every page that opts into a generated OG image, keyed by its `ogSlug`. */
export const ogPages: Record<string, OgProps> = {
  home: { eyebrow: 'technical program manager', title: 'Programs that ship — scoped, staffed, and measured.' },
  work: { eyebrow: 'case studies', title: 'Three programs, start to finish.' },
  about: { eyebrow: 'background', title: 'Jasvant Singh Dosanjh' },
  skills: { eyebrow: 'capabilities', title: 'What I bring to the table.' },
  products: { eyebrow: 'products', title: 'Tools that turn friction into momentum.' },
  seva: { eyebrow: 'ik onkar', title: 'Parchar & Seva' },
  contact: { eyebrow: 'technical program manager', title: "Let's connect." },
  resume: { eyebrow: 'résumé', title: 'Résumé' },
  blog: { eyebrow: 'writing', title: 'Notes on AI, security & building things that last' },
  'blog-the-ai-race-just-fractured': {
    eyebrow: 'essay',
    title: 'The AI race just fractured — and the US did it to itself',
  },
  'blog-the-future-of-ai-runs-on-your-device': {
    eyebrow: 'essay',
    title: 'AI just became a single point of failure — the fix is local',
  },
};
