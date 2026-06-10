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
    title: 'Strategic Success',
    icon: 'target',
    blurb: 'Driving adoption, time-to-value, and executive trust.',
    skills: [
      'Technical Onboarding',
      'Implementation Planning',
      'Adoption Strategy',
      'Customer Health',
      'Time-to-Value',
      'Risk Management',
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
    title: 'Infrastructure & Security',
    icon: 'shield',
    blurb: 'A decade of running real device fleets and compliance programs.',
    skills: [
      'Jamf Pro (Certified)',
      'Microsoft Intune',
      'JumpCloud',
      'AWS / Azure / GCP',
      'NIST CSF',
      'HIPAA / FERPA Compliance',
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
