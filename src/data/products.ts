export type ProductStatus = 'live' | 'wip' | 'planned';

export type Product = {
  slug: string;
  name: string;
  gurmukhi?: string;
  category: string;
  status: ProductStatus;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string; icon: string }[];
  accent: 'kesari' | 'azure';
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: 'sightline',
    name: 'Sightline',
    category: 'IT / Device Health',
    status: 'planned',
    tagline: 'See problems before they find you.',
    description:
      'Sightline keeps an eye on all of your company’s computers — Mac, Windows, and Linux — in one simple view. Instead of waiting for something to break, it shows you which devices are healthy, which are behind on updates, and which could put your data at risk. That way your team can fix the small stuff before it ever becomes a big problem.',
    highlights: [
      'Brings every device into one clear dashboard, no matter which system it runs.',
      'Flags security and update gaps early — before they turn into outages or failed audits.',
      'Turns constant firefighting into a calm, planned routine.',
    ],
    tech: ['Device Management', 'Security', 'Dashboards', 'Automation'],
    links: [],
    accent: 'azure',
    featured: true,
  },
  {
    slug: 'gurmukhifix',
    name: 'GurmukhiFix',
    gurmukhi: 'ਗੁਰਮੁਖੀ',
    category: 'Python / OCR / NLP',
    status: 'wip',
    tagline: 'OCR that finally respects South Asian scripts.',
    description:
      'A Tesseract post-processing engine for handwritten South Asian and Persian scripts. It corrects character misrecognition, ligature errors, and diacritic placement for Gurmukhi, Punjabi, Hindi, Urdu, and Farsi — recovering correct text where off-the-shelf OCR fails 30–40% of the time.',
    highlights: [
      'Applies Unicode-level linguistic rules post-OCR to repair handwritten Gurmukhi and Urdu.',
      'Targets a systematic gap: Tesseract misrecognition for these scripts frequently exceeds 30–40%.',
      'Shipping to PyPI as `pip install scriptfix`; installable today from GitHub.',
    ],
    tech: ['Python', 'Tesseract', 'Unicode', 'PyPI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/jsdosanj/gurmukhifix', icon: 'github' },
    ],
    accent: 'kesari',
    featured: true,
  },
  {
    slug: 'cairn',
    name: 'Cairn',
    category: 'Team Knowledge',
    status: 'planned',
    tagline: 'Never lose what your team has learned.',
    description:
      'Cairn captures the know-how that usually lives in one person’s head — how to set up a new hire, fix a recurring issue, or run a big project — and turns it into clear, shareable guides. Named after the stacked stones that mark a trail for the next hiker, it makes sure nobody on your team ever has to figure things out from scratch again.',
    highlights: [
      'Saves step-by-step guides, checklists, and playbooks in one organized place.',
      'Keeps important knowledge from walking out the door when people change roles.',
      'Helps new team members get up to speed in days instead of months.',
    ],
    tech: ['Documentation', 'Onboarding', 'Knowledge Base'],
    links: [],
    accent: 'azure',
    featured: true,
  },
  {
    slug: 'sikhlibrarian',
    name: 'SikhLibrarian',
    gurmukhi: 'ੴ',
    category: 'AI / NLP',
    status: 'live',
    tagline: 'An AI librarian for 758 million words of Sikh heritage.',
    description:
      'An AI-powered Sikh library trained on 758M+ words of multilingual manuscripts and classical literature spanning Gurmukhi, Punjabi, Hindi, Urdu, and Farsi. It provides semantic search, contextual Q&A, and translation assistance across Sikh scripture and historical texts — making rare manuscript knowledge accessible worldwide.',
    highlights: [
      'Manages a 758M+ word multilingual corpus with a custom OCR pipeline for five scripts.',
      'Semantic search, contextual Q&A, and translation across Sikh scripture and historical texts.',
      'Live and pending a community grant for upgraded hardware and broader public access.',
    ],
    tech: ['RAG', 'LLMs', 'OCR', 'Multilingual NLP'],
    links: [
      { label: 'HuggingFace Space', href: 'https://huggingface.co/spaces/jsdosanj/SikhLibrarian', icon: 'external' },
    ],
    accent: 'kesari',
    featured: true,
  },
  {
    slug: 'sikh-library-dataset',
    name: 'Sikh Library — Living Dataset',
    category: 'NLP / Dataset',
    status: 'live',
    tagline: 'The open corpus underneath it all.',
    description:
      'A continuously updated multilingual corpus of Sikh manuscripts, scripture, and classical literature spanning English, Punjabi, Urdu, Hindi, and Devanagari script — totalling 758M+ words. Curated to support RAG pipelines, semantic search, and NLP research on underrepresented South Asian languages.',
    highlights: [
      'Structured to power RAG pipelines, semantic search, and NLP research.',
      'Focused on underrepresented South Asian languages and rare historical texts.',
      'Open-access — built to preserve and democratize Sikh heritage for the global community.',
    ],
    tech: ['Dataset', 'HuggingFace', 'Multilingual', 'Open Access'],
    links: [
      { label: 'HuggingFace Dataset', href: 'https://huggingface.co/datasets/jsdosanj/SikhLibrary', icon: 'external' },
    ],
    accent: 'azure',
    featured: false,
  },
];

export const statusMeta: Record<ProductStatus, { label: string; symbol: string }> = {
  live: { label: 'Live', symbol: '✦' },
  wip: { label: 'In Progress', symbol: '⚙' },
  planned: { label: 'In the Lab', symbol: '◷' },
};
