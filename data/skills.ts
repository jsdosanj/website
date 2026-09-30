// Skill groups ordered for a Technical Program Manager audience: delivery
// discipline first, then the domains the programs live in. Group names and
// contents follow the Sept 2026 résumé's skill taxonomy, expanded with the
// tooling already documented across this site. `wide` marks the group the
// /skills page features as "where I go deep".
export type SkillGroup = {
  title: string;
  icon: string;
  blurb: string;
  skills: string[];
  wide?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Program & Delivery Management',
    icon: 'workflow',
    wide: true,
    blurb:
      'Running technical programs from start to finish: roadmap, budget, vendors and the software lifecycle underneath them. I use Agile, Waterfall and the mix most organizations really run. What I care about most is a plan stakeholders can still trust two months out.',
    skills: [
      'Technical Program Management',
      'Technical Project Management',
      'SDLC Ownership',
      'Agile / Scrum',
      'Waterfall',
      'Lean',
      'SAFe',
      'Kanban',
      'Roadmapping',
      'Risk Management',
      'Budget Management',
      'Vendor Management',
      'Stakeholder Management',
      'Jira',
      'Confluence',
      'Azure DevOps',
      'Microsoft Project',
      'Workday',
    ],
  },
  {
    title: 'Security, Risk & Compliance',
    icon: 'shield',
    blurb: 'Keeping regulated programs ready for audit, and turning control language into work a team can schedule.',
    skills: [
      'NIST CSF',
      'NIST SP 800-53',
      'NIST SP 800-171 / CMMC',
      'HIPAA / FERPA',
      'SOC 2 / ISO 27001',
      'Risk Assessment',
      'Security Audits',
      'Incident Response',
      'Disaster Recovery',
      'Vendor Risk (TPRM)',
      'IAM & SSO/MFA',
      'DevSecOps',
      'Privileged Access (BeyondTrust)',
      'CrowdStrike EDR',
    ],
  },
  {
    title: 'Leadership & Team Management',
    icon: 'spark',
    blurb: 'Getting people, vendors and executives working toward one outcome, including the hard version: someone else’s team during a vacancy.',
    skills: [
      'People Management',
      'Union Staff Management',
      'Cross-Functional Team Leadership',
      'Interim & Matrixed Leadership',
      'Mentorship & Coaching',
      'Team Onboarding',
      'Executive Communication',
      'Technical-to-Business Translation',
    ],
  },
  {
    title: 'IT Service & Operations',
    icon: 'headset',
    blurb: 'Running the day-to-day: service desk leadership, response-time targets, and the lifecycle behind every device and ticket.',
    skills: [
      'ITSM',
      'Help/Service Desk Management',
      'Incident Management',
      'SLA Management',
      'Ticketing & Escalation',
      'Change Management',
      'Asset & Procurement Management',
      'Hardware Lifecycle Management',
      'Business Continuity & Disaster Recovery',
    ],
  },
  {
    title: 'Infrastructure & Endpoints',
    icon: 'server',
    blurb: 'A decade of running real device fleets at college and studio scale, and making them more secure.',
    skills: [
      'Jamf Pro (Certified)',
      'Microsoft Intune',
      'JumpCloud',
      'Windows Autopilot',
      'PDQ',
      'Active Directory',
      'Apple Business/School Manager',
      'Google Workspace Admin',
      'Windows Server',
      'Linux / macOS',
      'AWS / Azure / GCP',
      'Endpoint Lifecycle Management',
      'Device Compliance',
    ],
  },
  {
    title: 'Automation & Development',
    icon: 'code',
    blurb: 'Automation and tools that remove repetitive work, so the program plan never depends on someone remembering a manual step.',
    skills: [
      'PowerShell',
      'Bash / Shell',
      'Python',
      'Go',
      'TypeScript',
      'SQL',
      'Power Automate',
      'GitHub Actions',
      'CI/CD',
      'REST API Design',
      'Git & GitHub',
      'Astro / Tailwind',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'target',
    blurb: 'Shipping to a serverless edge: containerized, built by CI, and paid for.',
    skills: [
      'Docker & Containerization',
      'Cloudflare Workers / Pages',
      'R2 · D1 · KV',
      'Serverless / Edge Deploy',
      'Infrastructure as Code',
      'Stripe Integration',
      'Wrangler',
    ],
  },
  {
    title: 'Development with AI',
    icon: 'sparkles',
    blurb:
      'I build real products with AI tools, and I can show the results. I used Claude Code, GitHub Copilot and OpenRouter, with several models for OCR and translation, to translate 4,000+ Punjabi texts into English for the Sikh Library dataset. I used the same tools to build the Dosanjh Labs products, including a RAG search over a 1.07-billion-word corpus and the GurmukhiFix OCR repair engine.',
    skills: [
      'RAG Architecture',
      'LLM Application Design',
      'Prompt Engineering',
      'Agentic Coding Workflows',
      'Model Context Protocol (MCP)',
      'Custom OCR Pipelines',
      'Multilingual NLP',
      'Semantic Search',
      'LLM Evals & Guardrails',
      'HuggingFace Spaces & Datasets',
      'Claude Code',
      'GitHub Copilot',
    ],
  },
  {
    title: 'Languages',
    icon: 'globe',
    blurb: 'Meeting people and communities in their own language.',
    skills: [
      'English (fluent)',
      'Punjabi (fluent)',
      'Hindi (conversational)',
      'Urdu (conversational)',
    ],
  },
];
