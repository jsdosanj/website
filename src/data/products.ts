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
    category: 'Infrastructure / Observability',
    status: 'planned',
    tagline: 'See your fleet before it breaks.',
    description:
      'Sightline is an endpoint visibility and compliance layer for mixed Apple / Windows / Linux fleets — distilling Jamf, Intune, and JumpCloud telemetry into a single pane of health, drift, and risk. Built from a decade of running real device estates across healthcare, education, and gaming.',
    highlights: [
      'Unifies MDM signals across Jamf Pro, Intune, and JumpCloud into one health score.',
      'Surfaces configuration drift and compliance gaps against NIST CSF and HIPAA baselines.',
      'Turns reactive endpoint firefighting into a proactive, auditable workflow.',
    ],
    tech: ['TypeScript', 'MDM APIs', 'NIST CSF', 'Compliance'],
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
    category: 'Knowledge / Documentation',
    status: 'planned',
    tagline: 'Mark the path so the next team never gets lost.',
    description:
      'Cairn turns tribal knowledge into durable, living documentation. Inspired by the trail markers that guide hikers through uncertain terrain, it captures the onboarding frameworks, runbooks, and migration playbooks that usually live in one person’s head — and makes them replicable across teams.',
    highlights: [
      'Captures runbooks, onboarding frameworks, and migration playbooks as structured, versioned knowledge.',
      'Built on the same instinct behind the frameworks I’ve shipped that outlived my direct involvement.',
      'Designed so the next team never has to solve a problem that’s already been solved.',
    ],
    tech: ['TypeScript', 'Markdown', 'Knowledge Graphs'],
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
