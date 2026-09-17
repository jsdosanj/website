// Leadership and service roles, bullets in XYZ form like the career history.
// Counts and countries follow the Sept 2026 résumé (60+ presentations from
// June 2024; U.S., Canada, U.K., Malaysia) rather than the older figures.
export type LeadershipItem = {
  title: string;
  org: string;
  date: string;
  bullets: string[];
};

export const leadership: LeadershipItem[] = [
  {
    title: 'Chair, IT Committee — Board of Directors',
    org: 'University of Washington Professional Staff Organization',
    date: 'Jul 2024 – Mar 2026',
    bullets: [
      'Gave professional staff a seat at the table on university technology decisions, measured by an IT Committee chaired across two years of governance cycles, by aligning committee priorities with UW’s stated values and the interests of the professional-staff community it represents.',
      'Carried staff interests into university-wide technology and research governance, measured by voting membership on three UW Faculty Councils — IT & Cybersecurity, Research, and Faculty Benefits & Retirement — by serving as a Board of Directors member for the Professional Staff Organization.',
    ],
  },
  {
    title: 'Speaker & Educator',
    org: 'Basics of Sikhi North America (Everything’s 13)',
    date: 'Jun 2024 – Present',
    bullets: [
      'Brought Sikh history and philosophy to audiences with no local teacher, measured by 60+ educational presentations delivered at universities, Gurdwaras, and interfaith events across the U.S., Canada, the U.K., and Malaysia, by building each talk for the room in front of him instead of reusing one deck.',
      'Held the attention of audiences spanning a 40-year age range, measured by camps from 30 to 600 attendees and events drawing 500+ people, by teaching campers from age 8 to 50 and adjusting depth to the audience rather than the syllabus.',
      'Made correct Gurbani pronunciation reachable for students without a local teacher, measured by Santhiya taught to students globally and Amrit Sanchars coordinated worldwide, by organizing events at universities and Gurdwaras across the Pacific Northwest and teaching the rest remotely.',
    ],
  },
  {
    title: 'Health & Safety Committee Member',
    org: 'UW College of Arts & Sciences',
    date: 'Jan 2024 – Dec 2025',
    bullets: [
      'Turned scattered incident reports into guidance the college could act on, measured by workplace incident reports, accident-prevention programs, and safety-inspection trends reviewed every cycle, by serving on the college’s Health & Safety Committee.',
      'Closed the gap between committee decisions and the staff they affect, measured by a standing liaison channel to the UW personnel represented, by acting as the committee’s point of contact for them.',
    ],
  },
  {
    title: 'Director of Development',
    org: 'GrizzHacks',
    date: 'Feb 2019 – Dec 2020',
    bullets: [
      'Funded the largest student-body organization budget at Oakland University, measured by $25,000+ in sponsorship secured for GrizzHacks 4 and $5,000+ for MLH Local Hack Days, by owning sponsor outreach and the budget end to end.',
      'Shipped the platform a hackathon actually runs on, measured by the GrizzHacks website and internal hackathon tooling delivered ahead of each event, by leading the development teams behind them and running technical workshops on-site.',
    ],
  },
  {
    title: 'High School Coed Soccer Coach',
    org: 'Rochester Soccer Club',
    date: 'Sep 2019 – Jun 2020',
    bullets: [
      'Developed a squad of 23 players into a competitive side, measured by 46 goals scored across two seasons in Southeast Michigan, by coaching for dedication, leadership, and a sense of community rather than only the scoreline.',
    ],
  },
];
