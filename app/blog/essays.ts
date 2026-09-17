// On-site essays — newest first. The index page and each post's metadata read
// from here, so a title or dek can only be written once.
export type Essay = {
  slug: string;
  title: string;
  date: string;
  /** ISO date, for <article datePublished> and the Article JSON-LD. */
  published: string;
  dek: string;
};

export const essays: Essay[] = [
  {
    slug: 'the-ai-race-just-fractured',
    title: 'The AI race just fractured — and the US did it to itself',
    date: 'June 22, 2026',
    published: '2026-06-22',
    dek: 'The US banned its own best models, Japan matched frontier benchmarks without a single frontier model, and China’s open-weight stack is closing fast. The AI landscape from two weeks ago is already gone.',
  },
  {
    slug: 'the-future-of-ai-runs-on-your-device',
    title: 'AI just became a single point of failure — the fix is local',
    date: 'June 13, 2026',
    published: '2026-06-13',
    dek: 'The U.S. government switched off the most powerful AI model on Earth overnight. Here’s why that’s the strongest argument yet for running AI you actually own.',
  },
];

export const essayBySlug = (slug: string) => essays.find((e) => e.slug === slug);
