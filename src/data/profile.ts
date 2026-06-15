export const profile = {
  name: 'Brayann Benavides',
  title: 'Software Developer',
  availability: 'Open to new opportunities',
  summary:
    'Software Developer specializing in backend systems (.NET, C#, NestJS, REST APIs) and cross-platform mobile apps (React Native), with a data-driven background in SQL, Pandas and Power BI. I build full-stack solutions end to end, applying clean architecture and strong code-quality and version-control practices.',
  email: 'brayannbegu11@gmail.com',
  location: 'Toronto, Ontario, Canada',
  // File lives in /public and is served at <base>/Brayann-Benavides-CV.pdf
  cv: 'Brayann-Benavides-CV.pdf',
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/brayann-benavides',
      icon: 'ion:logo-linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/brayannbegu11',
      icon: 'ion:logo-github',
    },
  ],
} as const;
