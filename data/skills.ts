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
      'Running technical programs end to end — roadmap, budget, vendors, and the SDLC underneath them — in Agile, Waterfall, and the hybrid most organizations actually run. The part I care about most is a plan stakeholders can trust two months out.',
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
    blurb: 'Keeping regulated programs audit-ready, and translating control language into work a team can actually schedule.',
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
    blurb: 'Aligning people, vendors, and executives around one outcome — including the hard version: someone else’s team, mid-vacancy.',
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
    blurb: 'Running the day-to-day: service desk leadership, SLAs, and the lifecycle behind every device and ticket.',
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
    blurb: 'A decade of running real device fleets at college and studio scale — and hardening them.',
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
    blurb: 'Automation and tooling that removes toil — so the program plan does not depend on someone remembering a manual step.',
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
    blurb: 'Shipping to a serverless edge — containerized, CI-driven, and paid-for.',
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
      'Shipping real products with AI as a force multiplier — from RAG pipelines over a 1.07-billion-word corpus to OCR repair engines and agentic coding workflows.',
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
    blurb: 'Meeting people — and communities — in their own language.',
    skills: [
      'English (fluent)',
      'Punjabi (fluent)',
      'Hindi (conversational)',
      'Urdu (conversational)',
    ],
  },
];
