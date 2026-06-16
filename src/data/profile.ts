export const profile = {
  name: 'Brayann Benavides',
  title: 'Software Developer',
  summary:
    'I’m a software developer with about two years of experience across backend and mobile. Right now I work on a production field-service platform, building React Native screens, the .NET/C# sync APIs behind them, and the offline syncing that keeps everything consistent when there’s no signal. Recently that included an in-app invoicing flow that sends customers their payment links over SMS. I’m strongest in C#/.NET and React Native, and I like owning a feature the whole way, from the API to the screen.',
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
