// Blog / LinkedIn posts.
// LinkedIn has no public API to auto-pull posts, so add entries here by hand.
// For each post: paste the LinkedIn post URL into `url`. To embed the real
// post, use LinkedIn's "Embed this post" option and drop the iframe src into
// `embed` (optional) — otherwise the card links out to `url`.
export type Post = {
  title: string;
  date: string; // human-readable, e.g. "May 2026"
  category: string;
  excerpt: string;
  url: string; // LinkedIn post (or article) link
  embed?: string; // optional LinkedIn embed iframe src
  tags: string[];
  featured?: boolean;
};

export const posts: Post[] = [
  {
    title: 'Preserving 758 million words of Sikh heritage with AI',
    date: 'May 2026',
    category: 'AI & Heritage',
    excerpt:
      'How the Sikh Library dataset grew into a 9 GB, 758M+ word multilingual corpus — and why making rare manuscripts searchable is its own form of seva.',
    url: 'https://www.linkedin.com/in/jasvantsd/recent-activity/all/',
    tags: ['AI', 'NLP', 'Heritage'],
    featured: true,
  },
  {
    title: 'Why off-the-shelf OCR fails South Asian scripts — and how GurmukhiFix fixes it',
    date: 'Apr 2026',
    category: 'Engineering',
    excerpt:
      'Tesseract misreads handwritten Gurmukhi and Urdu 30–40% of the time. A look at the Unicode-level rules behind GurmukhiFix and what it took to recover correct text.',
    url: 'https://www.linkedin.com/in/jasvantsd/recent-activity/all/',
    tags: ['OCR', 'Python', 'Open Source'],
    featured: true,
  },
  {
    title: 'Most IT problems aren’t technical problems',
    date: 'Mar 2026',
    category: 'Leadership',
    excerpt:
      'Lessons from rebuilding a clinical department’s relationship with IT at the University of Washington — on trust, coordination, and frameworks that outlive you.',
    url: 'https://www.linkedin.com/in/jasvantsd/recent-activity/all/',
    tags: ['IT Leadership', 'Project Management'],
    featured: false,
  },
];
