export type SkillGroup = {
  title: string;
  icon: string;
  blurb: string;
  skills: string[];
  wide?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Development with AI',
    icon: 'sparkles',
    wide: true,
    blurb:
      'Shipping real products with AI as a force multiplier — from RAG pipelines over a 758M-word corpus to OCR repair engines and agentic coding workflows.',
    skills: [
      'LLM Application Design',
      'Retrieval-Augmented Generation (RAG)',
      'Prompt Engineering',
      'Custom OCR Pipelines',
      'Multilingual NLP',
      'HuggingFace Spaces & Datasets',
      'AI-Assisted Development',
      'Agentic Coding Workflows',
      'Semantic Search',
      'Model Evaluation',
    ],
  },
  {
    title: 'Security & GRC',
    icon: 'shield',
    blurb: 'Strengthening security posture and keeping teams audit-ready.',
    skills: [
      'NIST CSF',
      'HIPAA / FERPA Compliance',
      'Security Audits',
      'Risk Management',
      'Privileged Access (BeyondTrust)',
      'Identity & Access Management',
      'Executive Stakeholder Comms',
    ],
  },
  {
    title: 'Program & Operations',
    icon: 'workflow',
    blurb: 'End-to-end delivery across cross-functional teams.',
    skills: [
      'End-to-End Delivery',
      'Cross-Functional Leadership',
      'Vendor Coordination',
      'SLA Management',
      'Change Management',
      'Jira',
      'Confluence',
    ],
  },
  {
    title: 'Infrastructure & Endpoint',
    icon: 'server',
    blurb: 'A decade of running real device fleets and hardening them.',
    skills: [
      'Jamf Pro (Certified)',
      'Microsoft Intune',
      'JumpCloud',
      'AWS / Azure / GCP',
      'MDM & Endpoint Management',
      'Device Compliance',
    ],
  },
  {
    title: 'Engineering',
    icon: 'code',
    blurb: 'Automation and tooling that removes toil.',
    skills: [
      'Python',
      'Shell / Bash',
      'PowerShell',
      'TypeScript',
      'Git & GitHub',
      'Automation & Scripting',
    ],
  },
];
