export const site = {
  brand: 'Jasvant Dosanjh',
  founder: 'Jasvant Singh Dosanjh',
  tagline: 'Technology that helps your team succeed instead of getting in its way.',
  shortTagline: 'IT Operations & Infrastructure Manager.',
  description:
    'Jasvant Singh Dosanjh is an IT Operations & Infrastructure Manager with 10+ years leading teams of up to 9 — including union staff — across higher education, healthcare, gaming, and big tech. He owns $250K+ hardware and budget programs, runs Agile SDLC delivery and DevOps automation, manages vendors and stakeholders, and handles GRC across HIPAA, FERPA, and NIST-regulated environments. He is also a hands-on AI practitioner, open to relocating. PMP and CompTIA Security+ in progress.',
  location: 'Open to Relocating',
  email: 'jasvantdosanjh@outlook.com',
  phone: '+1 (425) 309-5295',
  url: 'https://jasvant.dosanjhlabs.com',
  // Hire-me positioning
  openToWork: true,
  targetRole: 'IT Manager',
  roles: [
    'IT Manager',
    'IT Program / Project Manager',
    'IT Security & GRC Leader',
  ],
  positioning:
    'IT Operations & Infrastructure Manager with 10+ years leading teams (up to 9 direct reports) and $250K+ budget/vendor programs across higher ed, healthcare, gaming, and big tech — owning SDLC, Agile delivery, DevOps automation, and GRC across HIPAA, FERPA, and NIST-regulated environments.',
  socials: {
    linkedin: 'https://linkedin.com/in/jasvantsd',
    github: 'https://github.com/jsdosanj',
    huggingface: 'https://huggingface.co/jsdosanj',
  },
  // Role-tailored, 2-page, ATS-optimized résumés.
  // Primary résumé (IT Manager, Aug 2026) leads — it matches the roles being targeted.
  // NOTE: the Security/GRC and Systems Engineer variants are still the June 2026 export;
  // re-export those from the same source once they're refreshed to match the Aug rewrite.
  resumes: [
    { label: 'IT Manager', short: 'IT Manager', href: '/resumes/JSD IT Manager Resume Aug 2026.pdf', primary: true },
    { label: 'IT Security & GRC Leader', short: 'Security / GRC', href: '/resumes/JSD IT Security GRC Leader Resume June 2026.pdf' },
    { label: 'Senior Systems & Endpoint Engineer', short: 'Systems', href: '/resumes/JSD Systems Engineer Resume June 2026.pdf' },
  ],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Products', href: '/products' },
  { label: 'Writing', href: '/blog' },
  { label: 'Seva', href: '/seva' },
  { label: 'Contact', href: '/contact' },
];
