import type { ImageMetadata } from 'astro';
import journal from '../assets/projects/journal-project.png';
import bookbond from '../assets/projects/BookBond-project.png';
import renter from '../assets/projects/Renter-app-project.jpg';
import market from '../assets/projects/MarketFresh-project.png';
import cocktail from '../assets/projects/coctel-project.png';
import avengers from '../assets/projects/avengers-project.png';
import portfolioImg from '../assets/projects/Portfolio.png';

export type ProjectCategory = 'mobile development' | 'web development';

export interface CaseStudy {
  /** The problem / context the project addresses. */
  problem: string;
  /** Brayann's specific role and what he built. */
  role: string;
  /** 2–3 key technical decisions or challenges. */
  decisions: string[];
  /** The result / what the finished product does. */
  outcome: string;
  /**
   * Quantified, honest highlights. NOTE: numbers here come from Brayann's CV —
   * verify/adjust them before publishing.
   */
  metrics?: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  image: ImageMetadata;
  /** One-line summary shown on the card. */
  tagline: string;
  tech: string[];
  repoUrl?: string;
  /** Live demo / store / deployed URL. Render a "Live demo" button only if set. */
  liveUrl?: string;
  /** Featured projects get a full case-study page. */
  featured: boolean;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: 'bookbond',
    title: 'BookBond — Book Rental App',
    category: 'mobile development',
    image: bookbond,
    tagline: 'Cross-platform book rental & borrowing app, built as a work-integrated capstone.',
    tech: ['React Native', 'Firebase', 'GitHub Actions', 'CSS'],
    repoUrl: 'https://github.com/brayannbegu11/Bookbond',
    // liveUrl: add an Expo/TestFlight link once deployed
    featured: true,
    caseStudy: {
      problem:
        'BookBond was my capstone at George Brown, built as a work-integrated project with weekly demos to industry mentors. The premise was simple: let people rent and lend books to each other instead of leaving them on a shelf.',
      role:
        'I worked across the whole stack — the React Native app, the Firebase backend, and a GitHub Actions pipeline that kept builds passing between demos. I also presented our progress at the weekly reviews.',
      decisions: [
        'React Native, so a single codebase covered both iOS and Android.',
        'Firebase for authentication and real-time data, which saved us from building and hosting our own backend.',
        'GitHub Actions to run builds and checks automatically, so the app stayed demo-ready each week.',
      ],
      outcome:
        'A working app where you sign in, browse what’s available, and rent or lend a book, with the data syncing in real time.',
    },
  },
  {
    slug: 'car-rental',
    title: 'Car Rental App',
    category: 'mobile development',
    image: renter,
    tagline: 'Two connected apps for renting cars — one to list them, one to book nearby.',
    tech: ['React Native', 'Firebase', 'Maps', 'Authentication'],
    repoUrl: 'https://github.com/brayannbegu11/renterApp',
    featured: true,
    caseStudy: {
      problem:
        'Two sides of one problem: someone has a car sitting unused, and someone nearby needs one for a day. Both have to trust each other, and location is half the question.',
      role:
        'I built it as two connected React Native apps — one for owners, one for renters — over a shared Firebase backend for accounts, listings and bookings. Renters search by location and watch availability change in real time.',
      decisions: [
        'Two separate apps instead of one with a role switch, so each side only deals with what it needs.',
        'Maps up front, since the first thing a renter asks is what’s nearby.',
        'Firebase for authentication and real-time data.',
      ],
      outcome:
        'Renters can find and book a nearby car with current availability, while owners handle their listings and bookings from their own app.',
    },
  },
  {
    slug: 'journal',
    title: 'Journal App',
    category: 'web development',
    image: journal,
    tagline: 'Personal journaling web app organized around a calendar.',
    tech: ['React', 'Node.js', 'Firebase'],
    repoUrl: 'https://github.com/brayannbegu11/journal-app',
    featured: true,
    caseStudy: {
      problem:
        'I wanted a private place to write, and an easy way to find an old entry later. So the whole thing is built around a calendar instead of a long list.',
      role:
        'Full-stack: a React front end with Node.js and Firebase behind it for login and per-user storage. The calendar is how you move between entries.',
      decisions: [
        'Calendar-first navigation, so you find entries by the day you wrote them.',
        'Firebase for auth and storage, keeping each person’s notes private and synced.',
        'Edits save as you type, so there’s no save button to think about.',
      ],
      outcome:
        'You write, edit, and jump back to any day’s entry, all tied to your own account.',
    },
  },
  // --- More projects (links only) ---
  {
    slug: 'market-fresh',
    title: 'Market Fresh',
    category: 'web development',
    image: market,
    tagline: 'Responsive grocery storefront landing page.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/brayannbegu11/pagina-market',
    liveUrl: 'https://brayannbegu11.github.io/pagina-market/',
    featured: false,
  },
  {
    slug: 'cocktail-terminal',
    title: 'Cocktail Terminal',
    category: 'web development',
    image: cocktail,
    tagline: 'Cocktail explorer consuming a public REST API.',
    tech: ['JavaScript', 'REST API'],
    repoUrl: 'https://github.com/brayannbegu11/coctel',
    featured: false,
  },
  {
    slug: 'avengers-app',
    title: 'Avengers App',
    category: 'web development',
    image: avengers,
    tagline: 'React app browsing characters from an API.',
    tech: ['React'],
    repoUrl: 'https://github.com/brayannbegu11/heroesApp',
    featured: false,
  },
  {
    slug: 'portfolio',
    title: 'Personal Portfolio',
    category: 'web development',
    image: portfolioImg,
    tagline: 'This site — built with Astro, optimized and deployed via GitHub Actions.',
    tech: ['Astro', 'TypeScript'],
    repoUrl: 'https://github.com/brayannbegu11/portfolio',
    liveUrl: 'https://brayannbegu11.github.io/portfolio/',
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);
