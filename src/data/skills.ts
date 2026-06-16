export interface Skill {
  name: string;
  icon: string;
}

// Brand logos from the iconify "devicon" set (inlined as SVG at build time).
export const skills: Skill[] = [
  { name: 'C# / .NET', icon: 'devicon:dotnetcore' },
  { name: 'NestJS', icon: 'devicon:nestjs' },
  { name: 'TypeScript', icon: 'devicon:typescript' },
  { name: 'JavaScript', icon: 'devicon:javascript' },
  { name: 'React Native', icon: 'devicon:react' },
  { name: 'Node.js', icon: 'devicon:nodejs' },
  { name: 'Python', icon: 'devicon:python' },
  { name: 'PostgreSQL', icon: 'devicon:postgresql' },
  { name: 'Firebase', icon: 'devicon:firebase' },
  { name: 'Kotlin', icon: 'devicon:kotlin' },
  { name: 'Swift', icon: 'devicon:swift' },
  { name: 'Docker', icon: 'devicon:docker' },
  { name: 'Git', icon: 'devicon:git' },
];
