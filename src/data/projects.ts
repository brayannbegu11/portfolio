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
        'Readers needed an easy way to rent and borrow books from one another. BookBond was developed as a work-integrated project with weekly progress demos to industry mentors, aiming for a production-ready release.',
      role:
        'Full-stack developer — built the React Native cross-platform app and the Firebase backend, set up continuous integration with GitHub Actions, and presented progress across 12 weekly review meetings.',
      decisions: [
        'Used React Native for a single codebase across iOS and Android.',
        'Chose Firebase for authentication and real-time data to move fast without standing up a custom backend.',
        'Automated builds and checks with GitHub Actions to keep the app release-ready.',
      ],
      outcome:
        'A working platform where users browse, rent and lend books, backed by secure authentication and real-time data.',
      metrics: [
        'Facilitated 1,000+ book rentals & borrowings per month',
        'Firebase backend handling 10,000+ user interactions',
        '12 weekly stakeholder demos toward a production release',
      ],
    },
  },
  {
    slug: 'car-rental',
    title: 'Car Rental App',
    category: 'mobile development',
    image: renter,
    tagline: 'Two-sided car-rental marketplace with map-based search and real-time availability.',
    tech: ['React Native', 'Firebase', 'Maps', 'Authentication'],
    repoUrl: 'https://github.com/brayannbegu11/renterApp',
    featured: true,
    caseStudy: {
      problem:
        'Car owners needed to list vehicles and renters needed to find and book nearby cars — a two-sided marketplace where trust and location matter.',
      role:
        'Built two connected apps (one for owners, one for renters) with React Native, backed by Firebase for listings, accounts and rental transactions, plus location-based search and real-time updates.',
      decisions: [
        'Dual-app architecture for the two user types sharing a single backend.',
        'Integrated maps for location-based vehicle availability.',
        'Firebase for secure, real-time data and authentication.',
      ],
      outcome:
        'Renters can browse and book nearby vehicles with live availability while owners manage listings and transactions securely.',
    },
  },
  {
    slug: 'journal',
    title: 'Journal App',
    category: 'web development',
    image: journal,
    tagline: 'Personal journaling web app with a calendar for date-based note tracking.',
    tech: ['React', 'Node.js', 'Firebase'],
    repoUrl: 'https://github.com/brayannbegu11/journal-app',
    featured: true,
    caseStudy: {
      problem:
        'A simple, private space to write, edit and organize personal notes — with easy date-based navigation so entries are quick to find later.',
      role:
        'Full-stack — React front end with a Node.js and Firebase backend for secure, per-user storage and authentication; built calendar-based organization and real-time updates.',
      decisions: [
        'Calendar-first navigation so entries are organized and retrieved by date.',
        'Firebase auth + storage to keep each user’s notes private and synced.',
        'Real-time updates for a seamless, no-save-button writing experience.',
      ],
      outcome:
        'Users write, edit and revisit entries by date, with their data securely stored per account.',
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
