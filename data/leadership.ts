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
    title: 'Chair, IT Committee, Board of Directors',
    org: 'University of Washington Professional Staff Organization',
    date: 'Jul 2024 – Mar 2026',
    bullets: [
      'Gave professional staff a voice on university technology decisions, measured by chairing the IT Committee for two years of governance cycles, by lining up the committee’s priorities with UW’s stated values and the needs of the staff it represents.',
      'Brought staff concerns into university-wide technology and research governance, measured by a voting seat on three UW Faculty Councils (IT & Cybersecurity, Research, and Faculty Benefits & Retirement), by serving on the Professional Staff Organization’s Board of Directors.',
    ],
  },
  {
    title: 'Speaker & Educator',
    org: 'Basics of Sikhi North America (Everything’s 13)',
    date: 'Jun 2024 – Present',
    bullets: [
      'Brought Sikh history and philosophy to audiences with no local teacher, measured by 60+ talks at universities, Gurdwaras and interfaith events in the U.S., Canada, the U.K. and Malaysia, by building each talk for the room in front of me instead of reusing one deck.',
      'Kept the attention of audiences across a 40-year age range, measured by camps of 30 to 600 people and events of 500+, by teaching campers from age 8 to 50 and adjusting the depth to the audience, not the syllabus.',
      'Made correct Gurbani pronunciation reachable for students without a local teacher, measured by Santhiya taught to students around the world and Amrit Sanchars coordinated worldwide, by running events at universities and Gurdwaras in the Pacific Northwest and teaching the rest online.',
    ],
  },
  {
    title: 'Health & Safety Committee Member',
    org: 'UW College of Arts & Sciences',
    date: 'Jan 2024 – Dec 2025',
    bullets: [
      'Turned scattered incident reports into guidance the college could act on, measured by workplace incident reports, accident-prevention programs and safety-inspection trends reviewed every cycle, by serving on the college’s Health & Safety Committee.',
      'Closed the gap between committee decisions and the staff they affect, measured by a standing line of contact to the UW staff represented, by acting as the committee’s point of contact for them.',
    ],
  },
  {
    title: 'Director of Development',
    org: 'GrizzHacks',
    date: 'Feb 2019 – Dec 2020',
    bullets: [
      'Funded the largest student-organization budget at Oakland University, measured by $25,000+ in sponsorship for GrizzHacks 4 and $5,000+ for MLH Local Hack Days, by owning sponsor outreach and the budget from start to finish.',
      'Delivered the tools a hackathon runs on, measured by the GrizzHacks website and internal event tools ready before each event, by leading the development teams and running technical workshops on site.',
    ],
  },
  {
    title: 'High School Coed Soccer Coach',
    org: 'Rochester Soccer Club',
    date: 'Sep 2019 – Jun 2020',
    bullets: [
      'Built a squad of 23 players into a competitive team, measured by 46 goals across two seasons in Southeast Michigan, by coaching for commitment, leadership and community, not just the score.',
    ],
  },
];
