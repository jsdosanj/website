import type { NextConfig } from 'next';

// Content-Security-Policy. Next inlines its bootstrap script and the site
// emits JSON-LD, so script-src needs 'unsafe-inline' (a nonce would force every
// page dynamic); everything else is locked to same-origin. The contact form is
// a Server Action, so nothing on the client talks to a third party.
// Cloudflare's insights beacon is allowed in case Web Analytics is switched on.
const isDev = process.env.NODE_ENV !== 'production';
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://static.cloudflareinsights.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://cloudflareinsights.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Trailing-slash behaviour matches the previous Astro build so existing
  // links and the sitemap keep resolving to the same URLs.
  trailingSlash: false,
  experimental: {
    // `next/og` is used for the per-route OG images; keeping the satori
    // dependency out of the client bundle.
    optimizePackageImports: ['gsap', 'lenis'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Content-Security-Policy', value: csp },
          // Two years, subdomains included. No `preload`: that is a commitment
          // to the hstspreload.org list that is slow to undo, so it is left to
          // a deliberate decision.
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
          // The /ai-policy page claims these are sent on every response, so
          // they are declared here rather than only in public/_headers —
          // which is a Cloudflare Pages feature and would not survive the
          // move to a Worker. Crawl-and-cite stays open; training is reserved.
          { key: 'X-Robots-Tag', value: 'noai, noimageai' },
          { key: 'Content-Usage', value: 'train-ai=n, search=y' },
          { key: 'TDM-Reservation', value: '1' },
          { key: 'TDM-Policy', value: 'https://jasvant.me/ai-policy' },
        ],
      },
      {
        // Hashed build assets are immutable.
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
