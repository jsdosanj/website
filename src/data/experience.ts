export type Role = {
  title: string;
  company: string;
  date: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    title: 'Founder & Principal Security Engineer',
    company: 'Dosanjh Labs',
    date: 'Mar 2026 – Present',
    bullets: [
      'Designed and shipped a 12-product security and compliance suite using AI-assisted development and Agile sprint methodology, owning the full SDLC from requirements through CI/CD deployment across GRC, HIPAA risk, vendor risk, policy management, and incident response.',
      'Built Sightline, a GRC platform mapping security posture to 22+ frameworks — NIST CSF 2.0, NIST SP 800-53, HIPAA, SOC 2, CMMC, ISO 27001, FERPA, and GDPR.',
      'Built Bastion, a CMMC Level 2 / NIST SP 800-171 self-assessment tool that computes a live DoD SPRS score and generates an audit-ready SSP and POA&M.',
    ],
  },
  {
    title: 'Senior Computer Specialist — Infrastructure',
    company: 'University of Washington',
    date: 'Jan 2023 – Mar 2026',
    bullets: [
      'Primary project lead to onboard the SPHSC into centralized IT — repaired faculty trust, improved SLAs from 48 hours to 2, and cut IT spend by $30,000/year.',
      'Closed the college’s endpoint-management gap by standardizing Jamf Pro across 300+ Apple devices ahead of executive deadlines; the enrollment and compliance framework was later adopted across additional university departments.',
      'Coordinated a 6-month network security migration across CAS buildings with zero unplanned downtime; the documented framework let other CAS IT teams run their own migrations.',
      'Served as System Security Officer for CSSCR — ran NIST CSF, SP 800-53, and HIPAA audits, delivering remediation plans that reduced institutional risk.',
    ],
  },
  {
    title: 'Infrastructure Implementation Lead (Contract)',
    company: 'Tencent — Team Kaiju Studio',
    date: 'Aug 2022 – Dec 2022',
    bullets: [
      'Built a zero-to-one gaming studio IT environment in 5 months, architecting a JumpCloud/Google stack adopted as the standard for studios in LA and Montreal.',
      'Designed the JumpCloud Go MFA implementation subsequently adopted by Tencent studios in Los Angeles and Montreal.',
    ],
  },
  {
    title: 'DevOps Engineer (Contract)',
    company: 'Omni Group',
    date: 'Feb 2022 – May 2022',
    bullets: [
      'Automated macOS server imaging, volume mounting, and API configuration via shell scripting — reducing per-server ramp-up from 4 hours to 1 and enabling horizontal scaling without added headcount.',
    ],
  },
  {
    title: 'Apprentice Systems Technician',
    company: 'Meta',
    date: 'Aug 2020 – Feb 2022',
    bullets: [
      'Authored Linux porting documentation for BeyondTrust that was incorporated into a first-party solution serving 5,000+ engineers.',
      'Coordinated cross-functional escalations across engineering, policy, and trust-and-safety to address platform accessibility for international users.',
      'Mentored 20 YearUp externs and 10 enterprise support technicians — helping 5 externs convert to full-time. PNW Enterprise Support ranked first nationally in ticket resolution.',
    ],
  },
  {
    title: 'Technical Consultant',
    company: 'Rochester Community Schools',
    date: 'Nov 2020 – Dec 2020',
    bullets: [
      'Promoted to district IT lead during COVID-19 response; coordinated 6 technicians to complete a 1:1 Chromebook rollout and asset inventory within an 8-week deadline.',
    ],
  },
  {
    title: 'Technical Assistant',
    company: 'Rochester Community Schools',
    date: 'Aug 2019 – Aug 2020',
    bullets: [
      'Developed a Google Workspace remote-learning curriculum adopted district-wide at the principal’s request; trained other IT staff to deliver it.',
    ],
  },
  {
    title: 'Department Shares Administrator (Intern)',
    company: 'Oakland University UTS',
    date: 'Jan 2020 – Apr 2020',
    bullets: [
      'Processed Shares Access tickets for university employees, closing over 18% of all cases.',
      'Built self-service portal features in PowerShell that cut over 40% of incoming tickets.',
    ],
  },
  {
    title: 'Technology Services Mentor',
    company: 'Oakland University — Kresge Library',
    date: 'May 2018 – Jan 2020',
    bullets: [
      'Managed and mentored student IT technicians and ran onboarding workflows, reducing ticket requests by 30%.',
    ],
  },
  {
    title: 'Technical Project Manager (Contract)',
    company: 'Chef Koochooloo',
    date: 'Aug 2019 – Nov 2019',
    bullets: [
      'Led development teams and product strategy to secure $2M in funding from the Chilean government and Nestlé.',
    ],
  },
  {
    title: 'Researcher (Intern)',
    company: 'Shabad OS',
    date: 'Aug 2017 – Jul 2019',
    bullets: [
      'Tested ShabadOS software and contributed bug fixes for software used by Gurdwaras worldwide.',
      'Worked on translations of Guru Granth Sahib Ji / Dasam Granth from Gurmukhi to English.',
    ],
  },
];
