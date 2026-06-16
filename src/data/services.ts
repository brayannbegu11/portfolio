export interface Service {
  icon: string;
  title: string;
  text: string;
}

export const services: Service[] = [
  {
    icon: 'ion:server-outline',
    title: 'Backend Development',
    text: 'REST APIs and backend services with .NET, C# and NestJS, keeping the business logic clear and the code easy to change later.',
  },
  {
    icon: 'ion:phone-portrait-outline',
    title: 'Mobile Development',
    text: 'Cross-platform apps in React Native that hold up on both iOS and Android, including the harder parts like offline support and syncing.',
  },
  {
    icon: 'ion:bar-chart-outline',
    title: 'Data & Analytics',
    text: 'The data side too, from my time as a data scientist: SQL, Pandas and Power BI for ETL, dashboards and reporting.',
  },
  {
    icon: 'ion:git-branch-outline',
    title: 'Clean Code & Delivery',
    text: 'Git, GitHub Actions and Docker for CI/CD, working in Scrum, with a bias toward maintainable code over clever code.',
  },
];
