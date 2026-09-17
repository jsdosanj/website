import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono, Noto_Serif_Gurmukhi } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import MobileActionBar from '@/components/MobileActionBar';
import JsonLd from '@/components/JsonLd';
import { personGraph } from '@/lib/site-metadata';
import { site } from '@/data/site';

/**
 * next/font self-hosts and preloads these, and — critically for the type
 * system — Bricolage is requested with its optical-size axis so
 * `font-optical-sizing: auto` in globals.css has an axis to act on. The
 * display face is drawn for its rendered size rather than scaled from one
 * master, which is the web equivalent of the HIG's dynamic optical sizes.
 */
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-display-src',
});
const body = Hanken_Grotesk({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-sans-src',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-mono-src',
});
const gurmukhi = Noto_Serif_Gurmukhi({
  subsets: ['gurmukhi'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-gurmukhi-src',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.founder} — ${site.shortTagline}`, template: `%s · ${site.brand}` },
  description: site.description,
  manifest: '/site.webmanifest',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icons/apple-touch-icon.png' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#fbfcfd',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${gurmukhi.variable}`}
    >
      <body>
        <JsonLd data={personGraph()} />
        <div className="bg-page" />
        <div className="bg-grid" />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-kesari-500 focus:text-navy-950 focus:px-4 focus:py-2 focus:rounded-lg btn-press"
        >
          Skip to content
        </a>

        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <Motion />

        {/* Belt and braces. Every animated element's resting CSS state is
            already its finished state, but .reveal/.turn/.kin-inner start
            hidden so the animation has somewhere to come from — if scripts
            never run at all, this puts them back. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.turn{clip-path:none!important;transform:none!important;opacity:1!important}.kin-inner{transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
