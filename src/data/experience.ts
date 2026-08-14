export type Role = {
  title: string;
  company: string;
  date: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    title: 'Founder & Program Manager',
    company: 'Dosanjh Labs',
    date: 'Mar 2026 – Present',
    bullets: [
      'Own product strategy, roadmap, and full SDLC for a 12-product IT security and compliance suite, applying Agile sprints and AI-assisted development to ship GRC, HIPAA risk, vendor risk, policy management, and incident-response tooling from requirements through CI/CD deployment.',
      'Built Sightline, a GRC platform mapping compliance posture across 22+ frameworks — NIST CSF 2.0, NIST SP 800-53, HIPAA, SOC 2, CMMC, ISO 27001, FERPA, and GDPR.',
      'Built Bastion, a CMMC Level 2 / NIST SP 800-171 self-assessment tool that computes a live DoD SPRS score and auto-generates an audit-ready SSP and POA&M.',
    ],
  },
  {
    title: 'Senior Computer Specialist — Infrastructure · Interim Helpdesk Manager (3 mo.)',
    company: 'University of Washington',
    date: 'Jan 2023 – Mar 2026',
    bullets: [
      'Managed a 9-person infrastructure and help desk team, including 4 union civil-service staff, as Interim Helpdesk Manager for 3 months during an extended leadership vacancy — established formal ticket-dispatch accountability and sustained uninterrupted service college-wide.',
      'Cut department SLA 96% (48 hours to 2 hours) and eliminated $30,000/year in redundant IT spend as primary project lead onboarding the Speech and Hearing Sciences Clinic into centralized IT, coordinating 5 clinical vendors and enforcing HIPAA compliance.',
      'Managed a $250,000 annual hardware lifecycle program as the team’s sole Workday-certified buyer — advising departments on budget-aligned device counts, then procuring, imaging, and deploying hardware college-wide while negotiating pricing directly with Dell and Apple.',
      'Closed the college’s endpoint-management gap by standardizing Jamf Pro across 300+ Apple devices ahead of executive deadlines; the enrollment and compliance framework was later adopted across additional university departments.',
      'Delivered a 6-month, zero-downtime network security migration across CAS buildings, producing a reusable framework later adopted by peer CAS IT teams.',
      'Served as System Security Officer and CIO for CSSCR — ran NIST CSF, SP 800-53, and HIPAA audits and delivered gap-remediation plans to department heads under multi-state (WA/CA) and federal IES compliance requirements.',
    ],
  },
  {
    title: 'Lead Systems Administrator (Contract)',
    company: 'Tencent — Team Kaiju Studio',
    date: 'Jul 2022 – Dec 2022',
    bullets: [
      'Built a complete gaming-studio IT environment from zero in 5 months — AWS infrastructure, JumpCloud MDM, Google Workspace SSO/MFA, office networking, and 100+ multi-OS workstations — supervising a systems administrator and a project manager ahead of studio launch.',
      'Designed the unified JumpCloud MDM + Google Workspace SSO/MFA identity stack; the JumpCloud Go MFA rollout was adopted as the standard configuration across Tencent studios in Los Angeles and Montreal.',
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
    title: 'Lead Technical Consultant',
    company: 'Rochester Community Schools',
    date: 'Aug 2019 – Nov 2020',
    bullets: [
      'Promoted to district IT lead during COVID-19 response; directed 6 technicians across 7 schools to complete a 1:1 Chromebook rollout and full asset inventory for 15,000 students in 8 weeks.',
      'Authored a Google Workspace remote-learning curriculum adopted district-wide at the principal’s request; trained IT staff across schools to deliver it.',
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
      'Managed and mentored student IT technicians and ran onboarding workflows, cutting ticket volume 40%.',
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
  {
    title: 'IT Support Specialist',
    company: 'Oakland Community College — Athletics Dept.',
    date: '2016 – 2018',
    bullets: [
      'Sole IT staff providing tier 1/2 support across hardware, networking, AV, and web systems for the athletics department.',
    ],
  },
];
