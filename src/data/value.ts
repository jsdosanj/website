// Recruiter-facing positioning: how Jasvant maps to each target role,
// and the quantified outcomes that prove it.

export const helpAreas = [
  {
    icon: 'headset',
    role: 'IT Operations & Service Delivery',
    blurb:
      'I run service-delivery operations end to end — leading help desk and infrastructure teams, owning hardware and budget programs, and keeping SLAs tight even through leadership gaps.',
    proof: [
      'Stepped in as Interim Helpdesk Manager for a 9-person team, including union staff, during a leadership vacancy',
      'Cut department SLA 96% (48 hrs → 2 hrs) and standardized Jamf Pro across 300+ devices',
      'Owned a $250K annual hardware lifecycle program as sole Workday-certified buyer, negotiating directly with Dell and Apple',
    ],
  },
  {
    icon: 'workflow',
    role: 'Technical Program Management',
    blurb:
      'I lead complex, cross-functional programs end to end, aligning engineering, vendors, and leadership behind a roadmap people can actually trust. Technical debt becomes a plan, not a surprise.',
    proof: [
      'Cut an escalated department’s SLA from 48 hours to 2',
      'Zero unplanned downtime across a 6-month, multi-building security migration',
      'Secured $2M in funding through technical product strategy',
    ],
  },
  {
    icon: 'shield',
    role: 'IT Security & GRC Leadership',
    blurb:
      'I help teams strengthen their security posture and stay audit-ready — leading NIST CSF and HIPAA assessments, GRC programs, and access controls, while translating risk into decisions leadership can act on.',
    proof: [
      'System Security Officer & CIO for CSSCR — NIST CSF, SP 800-53 & HIPAA audits under multi-state/federal compliance',
      'Authored a BeyondTrust privileged-access standard for 5,000+ employees',
      'Founder of a 12-product GRC suite spanning NIST CSF 2.0, SOC 2, CMMC, ISO 27001, FERPA & GDPR',
    ],
  },
];

export const outcomes = [
  { value: '96%', label: 'SLA cut (48 hrs → 2 hrs) rescuing an escalated department' },
  { value: '9', label: 'person team led as Interim Helpdesk Manager, incl. union staff' },
  { value: '$250K', label: 'annual hardware program owned as sole Workday-certified buyer' },
  { value: '$30K/yr', label: 'redundant spend eliminated at the University of Washington' },
  { value: 'Zero', label: 'unplanned downtime across a 6-month security migration' },
  { value: '300+', label: 'Apple devices standardized on Jamf Pro — now the UW standard' },
  { value: '5,000+', label: 'engineers unblocked by a Linux fix I ported at Meta' },
  { value: '$2M', label: 'in funding secured through technical product strategy' },
];
