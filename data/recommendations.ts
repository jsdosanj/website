export type Recommendation = {
  name: string;
  title: string;
  link: string;
  text: string;
};

export const recommendations: Recommendation[] = [
  {
    name: 'Tiffany Calverley',
    title: 'Director of Development, Social Sciences @ University of Washington',
    link: 'https://www.linkedin.com/in/tiffany-calverley/',
    text: 'Jasvant really walks the walk as a professional dedicated to elite customer service. In a space often occupied by people unable to explain complexity or who are dismissive, Jasvant has always valued being the complete opposite — and it shows in everything he does. I am glad for anyone lucky enough to benefit from his talents.',
  },
  {
    name: 'Kate Cescon',
    title: 'Associate Director, Industry Capstone Program @ University of Washington',
    link: 'https://www.linkedin.com/in/kate-mortensen-cescon/',
    text: 'There isn’t an IT challenge Jasvant can’t tackle! Every support ticket I submitted was handled with grace, efficiency, and a touch of humor. Even when the issue was user error on my end, I never felt belittled. Thank you, Jasvant, for being a true people-first leader.',
  },
  {
    name: 'Kevin P. Thompson',
    title: 'Associate Dean for Advancement @ University of Washington',
    link: 'https://www.linkedin.com/in/kpthomps/',
    text: 'He is both an exceptionally skilled IT professional and a genuinely wonderful colleague. His technical knowledge is deep and reliable, but what truly sets him apart is how approachable, patient, and generous he is with that expertise. Any organization would be fortunate to work with him.',
  },
];
