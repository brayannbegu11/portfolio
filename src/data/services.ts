export interface Service {
  icon: string;
  title: string;
  text: string;
}

export const services: Service[] = [
  {
    icon: 'ion:server-outline',
    title: 'Backend Development',
    text: 'Designing and building scalable services and REST APIs with .NET, C# and NestJS, applying clean architecture and solid business logic.',
  },
  {
    icon: 'ion:phone-portrait-outline',
    title: 'Mobile Development',
    text: 'Cross-platform mobile apps with React Native — focused on performance, usability and a seamless experience across devices.',
  },
  {
    icon: 'ion:bar-chart-outline',
    title: 'Data & Analytics',
    text: 'Data-driven development with SQL, Pandas and Power BI: ETL processes, dashboards and insights that support decision-making.',
  },
  {
    icon: 'ion:git-branch-outline',
    title: 'Clean Code & Delivery',
    text: 'Version control and CI/CD with Git, GitHub Actions and Docker, working in Agile (Scrum) to ship maintainable software.',
  },
];
