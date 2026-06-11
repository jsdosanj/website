// Featured LinkedIn posts. LinkedIn has no public API to auto-pull posts,
// so add entries here by hand: paste the LinkedIn post URL into `url`.
export type Post = {
  title: string;
  date: string; // human-readable, e.g. "Jun 2026"
  category: string;
  excerpt: string;
  url: string; // LinkedIn post link
  tags: string[];
  featured?: boolean;
};

export const posts: Post[] = [
  {
    title: 'AI threats now outpace human defenders',
    date: 'Jun 2026',
    category: 'Cybersecurity',
    excerpt:
      'AI can bring down a company faster than a human team can even detect the breach. On the “automation threshold,” why compliance isn’t security, and why threat modeling has to turn into immediate engineering action. (BSides Vancouver)',
    url: 'https://www.linkedin.com/posts/jasvantsd_cybersecurity-threatmodeling-bsidesvancouver-share-7468079244707831808-Kk1i',
    tags: ['Cybersecurity', 'Threat Modeling', 'AI'],
    featured: true,
  },
  {
    title: 'Launching SikhArchive V2.0 — 500 years of literature, open to all',
    date: 'Jun 2026',
    category: 'AI & Heritage',
    excerpt:
      'The SikhLibrarian project found a permanent home at sikharchive.net: thousands of digitized texts from 50+ scholars, a 758-million-word corpus, restored with AI and free for the world.',
    url: 'https://www.linkedin.com/posts/jasvantsd_sikhiio-read-guru-granth-sahib-free-in-share-7466552659274022913-jA5I',
    tags: ['AI', 'Heritage', 'Open Access'],
    featured: true,
  },
  {
    title: 'AI beat Apple’s M5 chip security in 5 days',
    date: 'May 2026',
    category: 'Cybersecurity',
    excerpt:
      'Apple shipped the M5 with billion-dollar hardware defenses; a research team using AI found a way in within five days. Why “wait and see” is now a dangerous security strategy.',
    url: 'https://www.linkedin.com/posts/activity-7460887513650434048-Cz-S',
    tags: ['Cybersecurity', 'AI', 'Apple'],
    featured: false,
  },
  {
    title: 'Cybersecurity as a growth accelerator in FinTech',
    date: 'May 2026',
    category: 'Cybersecurity',
    excerpt:
      'Security gets dismissed as a cost center until a crisis strikes. Why secure-by-default infrastructure is actually a competitive advantage in financial services.',
    url: 'https://www.linkedin.com/posts/activity-7460390166877085696-uUvN',
    tags: ['FinTech', 'Secure by Design', 'DevSecOps'],
    featured: false,
  },
  {
    title: 'Week 2: the two hardest problems building the AI Sikh Librarian',
    date: 'May 2026',
    category: 'AI & Heritage',
    excerpt:
      'OCR managed only ~40% accuracy on printed Gurmukhi and failed entirely on handwritten manuscripts — so I built GurmukhiFix. Plus: earning the trust of eight Sikh organizations through the right license.',
    url: 'https://www.linkedin.com/posts/activity-7459737140105617408-tQDW',
    tags: ['OCR', 'GurmukhiFix', 'Heritage'],
    featured: false,
  },
  {
    title: 'An AI librarian for 500 years of Sikh literature',
    date: 'May 2026',
    category: 'AI & Heritage',
    excerpt:
      'A fully local RAG pipeline over 758 million words across five languages, with Research and Learn modes and Chicago-style citations — making manuscripts modern OCR couldn’t read finally searchable.',
    url: 'https://www.linkedin.com/posts/activity-7456884362802778112-tp6P',
    tags: ['RAG', 'NLP', 'Multilingual'],
    featured: false,
  },
];
