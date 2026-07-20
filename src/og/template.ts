// Shared visual template for build-time OG images — satori renders this
// plain VNode tree (no React needed) to SVG, then resvg rasterizes to PNG.
// Mirrors the site's own "term window" motif: ink-950 ground, traffic-light
// dots, kesari headline, a real prompt line — so a shared link looks like it
// came from this specific site, not a generic template.
export type OgProps = {
  eyebrow: string;
  title: string;
};

const INK_950 = '#07080a';
const INK_800 = '#14161b';
const INK_850 = '#0e0f13';
const MIST_100 = '#eef2f8';
const MIST_500 = '#7c8593';
const KESARI_400 = '#f7c25a';
const KESARI_500 = '#f0a93c';
const AZURE_300 = '#8fb4ff';
const MAC_RED = '#ff5f57';
const MAC_AMBER = '#febc2e';
const MAC_GREEN = '#28c840';

function dot(color: string) {
  return {
    type: 'div',
    props: {
      style: { width: 15, height: 15, borderRadius: 9999, background: color },
    },
  };
}

export function buildOgTree({ eyebrow, title }: OgProps) {
  return {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: INK_950,
        backgroundImage: `radial-gradient(58% 58% at 14% -10%, rgba(240,169,60,0.12), rgba(0,0,0,0)), radial-gradient(48% 55% at 96% 6%, rgba(65,105,225,0.14), rgba(0,0,0,0))`,
        padding: 64,
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
              borderRadius: 22,
              background: `linear-gradient(180deg, ${INK_850}, ${INK_800})`,
              border: `1px solid rgba(238,242,248,0.09)`,
              overflow: 'hidden',
            },
            children: [
              // term bar
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '20px 28px',
                    borderBottom: '1px solid rgba(238,242,248,0.08)',
                    background: INK_800,
                  },
                  children: [
                    dot(MAC_RED),
                    dot(MAC_AMBER),
                    dot(MAC_GREEN),
                    {
                      type: 'div',
                      props: {
                        style: { flex: 1, display: 'flex', justifyContent: 'center', color: MIST_500, fontSize: 20, fontFamily: 'JetBrains Mono' },
                        children: 'jasvant.dosanjhlabs.com',
                      },
                    },
                  ],
                },
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
                    padding: '0 60px',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: { display: 'flex', alignItems: 'center', gap: 10, color: KESARI_400, fontSize: 26, fontFamily: 'JetBrains Mono' },
                        children: `$ ${eyebrow}`,
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex',
                          marginTop: 22,
                          color: MIST_100,
                          fontSize: title.length > 34 ? 56 : 68,
                          fontWeight: 700,
                          lineHeight: 1.08,
                          fontFamily: 'Bricolage Grotesque',
                          letterSpacing: -1,
                          maxWidth: 980,
                        },
                        children: title,
                      },
                    },
                  ],
                },
              },
              // footer prompt line
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '22px 60px 30px',
                    color: MIST_500,
                    fontSize: 22,
                    fontFamily: 'JetBrains Mono',
                  },
                  children: [
                    { type: 'span', props: { style: { color: '#4ade80' }, children: 'jasvant@portfolio' } },
                    { type: 'span', props: { style: { color: AZURE_300 }, children: '~ %' } },
                    { type: 'span', props: { children: 'open — a portfolio worth reading' } },
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
