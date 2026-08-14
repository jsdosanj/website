// Parcharik / Seva — Sikh heritage, speaking, and community work
export const sevaIntro = {
  gurmukhi: 'ੴ',
  mool: 'Ik Onkar — one creative reality, present in all.',
  heading: 'Parchar & Seva',
  lead:
    'Beyond the lab, I serve as a parcharik: a teacher and speaker carrying the message of Guru Nanak around the world. It comes from the same place as the work I do with technology. Knowledge that lifts people up should be within reach of everyone, not locked away for a few.',
};

export type SevaEngagement = {
  org: string;
  role: string;
  date: string;
  description: string;
  link?: { label: string; href: string };
  tags: string[];
  icon: string;
};

export const engagements: SevaEngagement[] = [
  {
    org: 'Basics of Sikhi — Everything’s 13 (North America)',
    role: 'Public Speaker & Parcharik',
    date: 'Jan 2024 – Present',
    icon: 'mic',
    description:
      'Speak and teach at Sikh camps, universities, and Gurdwaras across North America and beyond — sharing Gurmat principles and inspiring people to live with purpose and compassion. 50+ engagements across 5 countries, including San Jose, Vancouver, Calgary, Winnipeg, Seattle, Detroit, and Kuala Lumpur, teaching campers from age 8 to 50 at camps ranging from 30 to 600 attendees, and speaking at events with 500+ people. Organize and host events throughout the Pacific Northwest, coordinate Amrit Sanchars worldwide, and teach Santhiya (correct pronunciation and understanding of Gurbani) to students globally.',
    link: { label: 'Basics of Sikhi', href: 'https://www.basicsofsikhi.com/' },
    tags: ['Public Speaking', 'Gurmat Education', 'Santhiya', 'Youth Camps'],
  },
  {
    org: 'Sikhi.io',
    role: 'CTO & Lead Engineer',
    date: 'Ongoing',
    icon: 'book',
    description:
      'Lead the engineering behind the digital preservation and accessibility of Sikh historical texts and manuscripts — bridging my parchar work with the AI and OCR tools I build to make rare Sikh heritage searchable and available to researchers and the global Sangat.',
    link: { label: 'Sikhi.io', href: 'https://sikhi.io/' },
    tags: ['Digital Preservation', 'Manuscripts', 'Open Access'],
  },
  {
    org: 'Gurprasadh Vidhiyaala',
    role: 'Counsellor & Teacher',
    date: 'Until Mar 2026',
    icon: 'globe',
    description:
      'Provided counselling and teaching to individuals worldwide, helping people deepen their connection to Sikh heritage through one-on-one and group learning, until stepping away in March 2026.',
    tags: ['Counselling', 'Teaching', 'Community'],
  },
  {
    org: 'Shabad OS',
    role: 'Researcher & Translator',
    date: 'Aug 2017 – Jul 2019',
    icon: 'code',
    description:
      'Tested and improved software used by Gurdwaras worldwide and contributed translations of Guru Granth Sahib Ji and Dasam Granth from Gurmukhi to English — early roots of the heritage-tech work that continues today.',
    link: { label: 'Shabad OS', href: 'https://shabados.com/' },
    tags: ['Translation', 'Open Source', 'Gurbani'],
  },
];

export const sevaValues = [
  {
    title: 'Naam',
    gurmukhi: 'ਨਾਮ',
    text: 'Grounded in remembrance — staying centred in something larger than the work itself.',
  },
  {
    title: 'Seva',
    gurmukhi: 'ਸੇਵਾ',
    text: 'Selfless service — building and giving so that others can rise without keeping score.',
  },
  {
    title: 'Chardi Kala',
    gurmukhi: 'ਚੜ੍ਹਦੀ ਕਲਾ',
    text: 'Relentless optimism — meeting every challenge in high, rising spirits.',
  },
];
