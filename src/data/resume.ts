export interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  bullets?: string[];
}

export const education: TimelineEntry[] = [
  {
    title: 'George Brown College',
    subtitle: 'Postgraduate Certificate — Mobile Apps Development & Strategy',
    period: 'Sept. 2023 — Sept. 2024',
  },
  {
    title: 'Universidad de la Sabana',
    subtitle: 'Bachelor of Informatics Engineering',
    period: 'Feb. 2017 — Nov. 2022',
  },
];

export const experience: TimelineEntry[] = [
  {
    title: 'Software Developer — Canam Systems',
    subtitle: 'Toronto, ON',
    period: 'Jan. 2025 — Present',
    bullets: [
      'Web development with .NET, C#, React Native and SQL.',
      'Resolve internal and external customer inquiries on technical issues.',
      'Monitor and manage technical issues across products.',
      'Track work through internal ticketing and development-tracking tools.',
    ],
  },
  {
    title: 'Data Scientist — Falabella International Bank',
    subtitle: 'Bogotá, CO',
    period: 'Jan. 2022 — Aug. 2022',
    bullets: [
      'Designed and implemented ETL processes consolidating data from multiple sources.',
      'Automated extraction, transformation and loading with Python and SQL, improving processing efficiency by 25%.',
      'Built Power BI and Tableau dashboards delivering real-time insight to sales and operations teams.',
      'Applied predictive analytics and data mining to uncover sales-growth opportunities.',
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: 'Google Cybersecurity Certificate', issuer: 'Google' },
  { name: 'Python for Everybody', issuer: 'University of Michigan' },
  { name: 'Scrum Fundamentals Certified', issuer: 'SCRUMstudy' },
];

export const awards: string[] = [
  "Dean's Honor List — awarded for a high grade point average (2024).",
  'Graduated with honors — George Brown College (2024).',
];

export const languages: string[] = ['English', 'Spanish'];
