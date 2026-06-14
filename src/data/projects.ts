import type { ImageMetadata } from 'astro';
import journal from '../assets/projects/journal-project.png';
import bookbond from '../assets/projects/BookBond-project.png';
import renter from '../assets/projects/Renter-app-project.jpg';
import market from '../assets/projects/MarketFresh-project.png';
import cocktail from '../assets/projects/coctel-project.png';
import avengers from '../assets/projects/avengers-project.png';
import portfolioImg from '../assets/projects/Portfolio.png';

export type ProjectCategory = 'mobile development' | 'web development';

export interface Project {
  title: string;
  category: ProjectCategory;
  image: ImageMetadata;
  url: string;
  tech: string;
}

export const projects: Project[] = [
  {
    title: 'BookBond — Book Rental App',
    category: 'mobile development',
    image: bookbond,
    url: 'https://github.com/brayannbegu11/Bookbond',
    tech: 'React Native · Firebase · GitHub Actions',
  },
  {
    title: 'Car Rental App',
    category: 'mobile development',
    image: renter,
    url: 'https://github.com/brayannbegu11/renterApp',
    tech: 'React Native · Firebase',
  },
  {
    title: 'Journal App',
    category: 'web development',
    image: journal,
    url: 'https://github.com/brayannbegu11/journal-app',
    tech: 'ReactJS · Node.js · Firebase',
  },
  {
    title: 'Market Fresh',
    category: 'web development',
    image: market,
    url: 'https://brayannbegu11.github.io/pagina-market/',
    tech: 'HTML · CSS · JavaScript',
  },
  {
    title: 'Cocktail Terminal',
    category: 'web development',
    image: cocktail,
    url: 'https://github.com/brayannbegu11/coctel',
    tech: 'JavaScript · REST API',
  },
  {
    title: 'Avengers App',
    category: 'web development',
    image: avengers,
    url: 'https://github.com/brayannbegu11/heroesApp',
    tech: 'React',
  },
  {
    title: 'Personal Portfolio',
    category: 'web development',
    image: portfolioImg,
    url: 'https://github.com/brayannbegu11/portfolio',
    tech: 'Astro',
  },
];
