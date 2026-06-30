// Recruiter-facing positioning: how Jasvant maps to each target role,
// and the quantified outcomes that prove it.

export const helpAreas = [
  {
    icon: 'shield',
    role: 'IT Security & GRC Leadership',
    blurb:
      'I help teams strengthen their security posture and stay audit-ready — leading NIST CSF and HIPAA assessments, GRC programs, and access controls, while translating risk into decisions leadership can act on.',
    proof: [
      'NIST CSF & HIPAA audits as System Security Officer',
      'Authored a BeyondTrust privileged-access standard for 5,000+ employees',
      'Managed a $250K security budget to 100% compliance',
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
    icon: 'server',
    role: 'Senior Systems & Endpoint Engineering',
    blurb:
      'I run and harden real fleets, hands-on with Jamf, Intune, JumpCloud, automation, and cloud. The standards I build tend to get adopted across the whole org.',
    proof: [
      'Standardized and scaled Jamf Pro across the entire College of Arts & Sciences at UW',
      'Automation that cut provisioning time 75% and saved $30K/yr',
      'JumpCloud Go rollout adopted by the LA and Montreal studios',
    ],
  },
];

export const outcomes = [
  { value: '48h → 2h', label: 'SLA turnaround after rescuing an escalated department' },
  { value: '$30K/yr', label: 'redundant spend eliminated at the University of Washington' },
  { value: '5,000+', label: 'engineers unblocked by a Linux fix I ported at Meta' },
  { value: '$2M', label: 'in funding secured through technical product strategy' },
  { value: 'Zero', label: 'unplanned downtime across a 6-month security migration' },
  { value: '75%', label: 'faster server ramp-up through automation' },
  { value: '300+', label: 'Apple devices standardized on Jamf Pro — now the UW standard' },
  { value: '5 mos', label: 'to build a gaming studio’s entire IT stack from zero' },
];
