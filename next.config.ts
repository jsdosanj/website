import type { NextConfig } from 'next';

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
          // The /ai-policy page claims these are sent on every response, so
          // they are declared here rather than only in public/_headers —
          // which is a Cloudflare Pages feature and would not survive the
          // move to a Worker. Crawl-and-cite stays open; training is reserved.
          { key: 'X-Robots-Tag', value: 'noai, noimageai' },
          { key: 'Content-Usage', value: 'train-ai=n, search=y' },
          { key: 'TDM-Reservation', value: '1' },
          { key: 'TDM-Policy', value: 'https://jasvant.dosanjhlabs.com/ai-policy' },
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
