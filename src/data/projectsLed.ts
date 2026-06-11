// Projects Jasvant has led across his career — the recruiter-facing showcase
// on the About page (reverse chronological).
export type LedProject = {
  title: string;
  org: string;
  date: string;
  text: string;
};

export const projectsLed: LedProject[] = [
  {
    title: 'Documentation hub, scalable Jamf Pro & automation',
    org: 'University of Washington — College of Arts & Sciences',
    date: '2023 – 2026',
    text: 'Built the college’s documentation hub from scratch (extensive runbooks and guides), rebuilt Jamf Pro to scale across the entire college, created custom tooling to automate repetitive tasks, and led department IT onboarding.',
  },
  {
    title: 'Zero-to-one gaming-studio IT',
    org: 'Tencent — Team Kaiju Studio',
    date: '2022',
    text: 'Built the complete IT foundation for a brand-new gaming studio — stakeholder management, vetting vendors and their products (Confluence, Jira, JumpCloud, SSO), device purchasing, and networking — and stood it up in five months.',
  },
  {
    title: 'Server imaging & deployment automation',
    org: 'Omni Group',
    date: '2022',
    text: 'Streamlined macOS server imaging and deployment, cutting roughly two hours off every server build and letting the team scale without adding headcount.',
  },
  {
    title: 'BeyondTrust Linux integration & developer bug tooling',
    org: 'Meta — Enterprise Engineering',
    date: '2020 – 2022',
    text: 'Wrote Bomgar-on-Linux setup documentation that was so well received it became a first-party supported integration for BeyondTrust’s Bomgar, and built Python tooling that helped developers pinpoint bugs and surfaced documentation and remediation steps from Meta’s internal knowledge base.',
  },
  {
    title: 'COVID-19 remote-learning enablement',
    org: 'Rochester Community Schools',
    date: '2019 – 2020',
    text: 'Created the training materials that helped teachers ramp up for remote learning at the onset of the COVID-19 pandemic — adopted district-wide.',
  },
  {
    title: '$2M ed-tech infrastructure foundation',
    org: 'Chef Koochooloo',
    date: '2019',
    text: 'Managed the development team, interviewed game-development vendors, and built the IT infrastructure foundation for the ed-tech startup — work that helped secure over $2M in funding from Nestlé and the Chilean government.',
  },
  {
    title: 'PowerShell self-service tooling',
    org: 'Oakland University — Technology Services',
    date: '2020',
    text: 'Streamlined shares-access requests by building a PowerShell self-service tool that cut ticket volume by 40%.',
  },
  {
    title: 'Tech-support training & mentorship',
    org: 'Oakland University — Kresge Library',
    date: '2018 – 2020',
    text: 'Created training materials and mentored and guided the library’s student tech-support staff.',
  },
  {
    title: 'Athletics facility reservation system',
    org: 'Oakland Community College — Athletics',
    date: '2016 – 2018',
    text: 'Streamlined the reservation process for the athletics facilities, making booking simpler and conflict-free for staff and students.',
  },
];
