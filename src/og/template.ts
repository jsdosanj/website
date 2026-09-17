// Shared visual template for build-time OG images — satori renders this
// plain VNode tree (no React needed) to SVG, then resvg rasterizes to PNG.
//
// Matches the site's light "delivery" surface: paper ground, a kesari rule
// above a mono eyebrow, navy display type, and a footer byline — so a shared
// link looks like it came from this specific site rather than a generic
// template. (Previously mirrored the terminal-window motif, which the site
// no longer uses.)
export type OgProps = {
  eyebrow: string;
  title: string;
};

const PAPER_50 = '#ffffff';
const PAPER_100 = '#fbfcfd';
const PAPER_300 = '#eaeef3';
const NAVY_900 = '#10203a';
const NAVY_600 = '#35598f';
const INK_500 = '#5d6e88';
const INK_400 = '#7b8aa0';
const KESARI_500 = '#e09c22';
const KESARI_700 = '#94620d';

export function buildOgTree({ eyebrow, title }: OgProps) {
  return {
    type: 'div',
    props: {
      style: {
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
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 24,
              background: PAPER_50,
              border: `1px solid ${PAPER_300}`,
              overflow: 'hidden',
            },
            children: [
              // top rule — the kesari accent as a full-bleed hairline
              {
                type: 'div',
                props: { style: { display: 'flex', height: 6, background: KESARI_500 } },
              },
              // body
              {
                type: 'div',
                props: {
                  style: {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '0 62px',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex',
                          alignItems: 'center',
                          color: KESARI_700,
                          fontSize: 22,
                          fontWeight: 500,
                          letterSpacing: 3,
                          textTransform: 'uppercase',
                          fontFamily: 'JetBrains Mono',
                        },
                        children: eyebrow,
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex',
                          marginTop: 24,
                          color: NAVY_900,
                          fontSize: title.length > 34 ? 58 : 70,
                          fontWeight: 700,
                          lineHeight: 1.06,
                          fontFamily: 'Bricolage Grotesque',
                          letterSpacing: -1.5,
                          maxWidth: 980,
                        },
                        children: title,
                      },
                    },
                  ],
                },
              },
              // footer byline
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '20px 62px 26px',
                    borderTop: `1px solid ${PAPER_300}`,
                    fontSize: 21,
                    fontFamily: 'JetBrains Mono',
                  },
                  children: [
                    { type: 'span', props: { style: { color: NAVY_900, fontWeight: 500 }, children: 'Jasvant Singh Dosanjh' } },
                    { type: 'span', props: { style: { color: INK_400 }, children: '·' } },
                    { type: 'span', props: { style: { color: NAVY_600 }, children: 'Technical Program Manager' } },
                    { type: 'span', props: { style: { color: INK_500, marginLeft: 'auto' }, children: 'jasvant.dosanjhlabs.com' } },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
}

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;
