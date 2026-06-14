# Portfolio → Astro Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the static "vCard" portfolio to Astro — same visual identity, CV-accurate content, bugs fixed, optimized, deployed to GitHub Pages.

**Architecture:** Astro static site. The single `index.html` is split into a `Layout` + 6 section components composed in `index.astro`. Content (profile, services, skills, resume, projects) lives in typed `src/data/*.ts` modules. The tabbed UX is preserved via one small vanilla-TS client script. UI icons come from `astro-icon` (iconify `ion` set, inline SVG — no external ionicons); skill logos from the `devicon` set. Images optimized via `astro:assets`.

**Tech Stack:** Astro 4, TypeScript, `astro-icon`, `@iconify-json/ion`, `@iconify-json/devicon`, `@astrojs/sitemap`. Deploy via GitHub Actions → Pages.

**Verification model:** This is a static UI migration — verification is `npm run build` + `npm run preview` + visual/network checks (no unit-test surface). Each task ends by building.

---

### Task 1: Scaffold Astro project

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `src/env.d.ts`

- [ ] **Step 1: `package.json`**

```json
{
  "name": "portfolio",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^4.16.0",
    "@astrojs/sitemap": "^3.2.0",
    "astro-icon": "^1.1.5",
    "@iconify-json/ion": "^1.2.0",
    "@iconify-json/devicon": "^1.2.0"
  }
}
```

- [ ] **Step 2: `astro.config.mjs`** — base path preserves the current URL `…github.io/portfolio/`

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://brayannbegu11.github.io',
  base: '/portfolio',
  integrations: [icon(), sitemap()],
});
```

- [ ] **Step 3: `tsconfig.json`**

```json
{ "extends": "astro/tsconfigs/strict" }
```

- [ ] **Step 4: `src/env.d.ts`**

```ts
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
```

- [ ] **Step 5: `.gitignore`**

```
node_modules/
dist/
.astro/
.DS_Store
```

- [ ] **Step 6: Install & verify toolchain**

Run: `npm install`
Expected: installs with no errors; `node_modules/astro` exists.

---

### Task 2: Layout + global styles

**Files:**
- Create: `src/layouts/Layout.astro`
- Create: `src/styles/global.css` (ported from `styles.css`)

- [ ] **Step 1: Port CSS** — copy `styles.css` → `src/styles/global.css` verbatim, then:
  - Replace `ion-icon` selectors with `svg` equivalents: in the `img, ion-icon, a, …` reset add `svg`; change `.icon-box ion-icon`, `.project-item-icon-box ion-icon`, `.form-btn ion-icon`, `.modal-close-btn ion-icon` → `… svg`, giving each an explicit `width`/`height`/`font-size` (icons inherit `font-size` via `1em`). Delete `--ionicon-stroke-width` lines.
  - Remove the `.testimonials*` / `.modal*` / `.blog*` rule blocks (dead — those sections are removed).

- [ ] **Step 2: `Layout.astro`** — `<head>` with full SEO + GA, `<slot/>`. Key contents:
  - `<meta name="description">` (from `profile.summary`), canonical `<link>`.
  - Open Graph + Twitter Card tags (title, description, `og:image` → `social-card.png`, `og:url`).
  - `<link rel="icon" href={`${base}/favicon.svg`}>` (fixes the `logo.ico` 404).
  - Poppins via Google Fonts with existing `preconnect`.
  - The existing Google Analytics gtag snippet (id `G-3Z1WZ9Y3TT`), unchanged.
  - `import '../styles/global.css'`.
  - Props: `title`, `description` with sensible defaults from `profile`.

- [ ] **Step 3: Verify** — `npm run build` succeeds (empty page is fine at this point).

---

### Task 3: Content data modules (source of truth = CV)

**Files:**
- Create: `src/data/profile.ts`, `services.ts`, `skills.ts`, `resume.ts`, `projects.ts`

- [ ] **Step 1: `profile.ts`**

```ts
export const profile = {
  name: 'Brayann Benavides',
  title: 'Software Developer',
  summary:
    'Software Developer specializing in backend systems (.NET, NestJS, REST APIs) and cross-platform mobile apps (React Native), with a data-driven background in SQL, Pandas and Power BI. I build full-stack solutions applying clean architecture and strong code-quality practices.',
  email: 'brayannbegu11@gmail.com',
  location: 'Toronto, Ontario, Canada',
  cv: 'Brayann-Benavides-CV.pdf', // in public/
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/brayann-benavides', icon: 'ion:logo-linkedin' },
    { name: 'GitHub', url: 'https://github.com/brayannbegu11', icon: 'ion:logo-github' },
  ],
};
```

- [ ] **Step 2: `services.ts`** (the four "What I'm doing" cards — `icon` = ion set)

```ts
export const services = [
  { icon: 'ion:server-outline', title: 'Backend Development', text: 'Designing and building scalable services and REST APIs with .NET, C# and NestJS, applying clean architecture and solid business logic.' },
  { icon: 'ion:phone-portrait-outline', title: 'Mobile Development', text: 'Cross-platform mobile apps with React Native — focused on performance, usability and a seamless user experience.' },
  { icon: 'ion:bar-chart-outline', title: 'Data & Analytics', text: 'Data-driven development with SQL, Pandas and Power BI: ETL processes, dashboards and insights to support decision-making.' },
  { icon: 'ion:git-branch-outline', title: 'Clean Code & Delivery', text: 'Version control, CI/CD with GitHub Actions, Docker and Agile (Scrum) — shipping maintainable, well-tested software.' },
];
```

- [ ] **Step 3: `skills.ts`** (devicon brand logos; keeps the "strip" look)

```ts
export const skills = [
  { name: 'C# / .NET', icon: 'devicon:dotnetcore' },
  { name: 'NestJS', icon: 'devicon:nestjs' },
  { name: 'TypeScript', icon: 'devicon:typescript' },
  { name: 'JavaScript', icon: 'devicon:javascript' },
  { name: 'React', icon: 'devicon:react' },
  { name: 'React Native', icon: 'devicon:react' },
  { name: 'Node.js', icon: 'devicon:nodejs' },
  { name: 'Python', icon: 'devicon:python' },
  { name: 'SQL / PostgreSQL', icon: 'devicon:postgresql' },
  { name: 'Kotlin', icon: 'devicon:kotlin' },
  { name: 'Swift', icon: 'devicon:swift' },
  { name: 'Docker', icon: 'devicon:docker' },
];
```

- [ ] **Step 4: `resume.ts`** — education, experience, certifications, awards, languages (verbatim from CV)

```ts
export const education = [
  { school: 'George Brown College', location: 'Toronto, ON', degree: 'Postgraduate Certificate — Mobile Apps Development & Strategy', period: 'Sept. 2023 — Sept. 2024' },
  { school: 'Universidad de la Sabana', location: 'Bogotá, CO', degree: 'Bachelor of Informatics Engineering', period: 'Feb. 2017 — Nov. 2022' },
];

export const experience = [
  {
    company: 'Canam Systems', location: 'Toronto, ON', role: 'Software Developer', period: 'Jan. 2025 — Present',
    bullets: [
      'Web development with .NET, C#, React Native and SQL.',
      'Resolve internal and external customer inquiries on technical issues.',
      'Monitor and manage technical issues across products.',
      'Track work through the internal ticketing and development-tracking tools.',
    ],
  },
  {
    company: 'Falabella International Bank', location: 'Bogotá, CO', role: 'Data Scientist', period: 'Jan. 2022 — Aug. 2022',
    bullets: [
      'Designed and implemented ETL processes consolidating data from multiple sources.',
      'Automated extraction/transformation/loading with Python and SQL, improving processing efficiency by 25%.',
      'Built Power BI and Tableau dashboards delivering real-time insight to sales and operations.',
      'Applied predictive analytics and data mining to uncover sales-growth opportunities.',
    ],
  },
];

export const certifications = [
  { name: 'Google Cybersecurity Certificate', issuer: 'Google' },
  { name: 'Python for Everybody', issuer: 'University of Michigan' },
  { name: 'Scrum Fundamentals Certified', issuer: 'SCRUMstudy' },
];

export const awards = [
  "Dean's Honor List — high GPA (2024)",
  'Graduated with honors — George Brown College (2024)',
];

export const languages = ['English', 'Spanish'];
```

- [ ] **Step 5: `projects.ts`** — `image` imported for `astro:assets`; `category` drives the filter

```ts
import journal from '../assets/projects/journal-project.png';
import bookbond from '../assets/projects/BookBond-project.png';
import renter from '../assets/projects/Renter-app-project.jpg';
import market from '../assets/projects/MarketFresh-project.png';
import cocktail from '../assets/projects/coctel-project.png';
import avengers from '../assets/projects/avengers-project.png';
import portfolioImg from '../assets/projects/Portfolio.png';

export const projects = [
  { title: 'BookBond — Book Rental App', category: 'mobile development', image: bookbond, url: 'https://github.com/brayannbegu11/Bookbond', tech: 'React Native · Firebase · GitHub Actions' },
  { title: 'Car Rental App', category: 'mobile development', image: renter, url: 'https://github.com/brayannbegu11/renterApp', tech: 'React Native · Firebase' },
  { title: 'Journal App', category: 'web development', image: journal, url: 'https://github.com/brayannbegu11/journal-app', tech: 'ReactJS · Node.js · Firebase' },
  { title: 'Market Fresh', category: 'web development', image: market, url: 'https://brayannbegu11.github.io/pagina-market/', tech: 'HTML · CSS · JS' },
  { title: 'Cocktail Terminal', category: 'web development', image: cocktail, url: 'https://github.com/brayannbegu11/coctel', tech: 'JavaScript · API' },
  { title: 'Avengers App', category: 'web development', image: avengers, url: 'https://github.com/brayannbegu11/heroesApp', tech: 'React' },
  { title: 'Personal Portfolio', category: 'web development', image: portfolioImg, url: 'https://github.com/brayannbegu11/portfolio', tech: 'Astro' },
];
```

- [ ] **Step 6: Verify** — `npx tsc --noEmit` (via `astro check` later) — defer; just ensure no syntax errors by building after Task 7.

---

### Task 4: Client script (preserve tabbed UX, no jQuery)

**Files:**
- Create: `src/scripts/main.ts`

- [ ] **Step 1: Implement** — ported from `index.js`, minus dead testimonials code:
  - Mobile sidebar toggle (`[data-sidebar-btn]` → toggle `.active` on `[data-sidebar]`).
  - Page tabs: `[data-nav-link]` click → match `data-page`, toggle `.active` on page + clicked link (fix the original index-coupling bug by matching on the clicked link's text, and toggling the clicked link directly).
  - Portfolio filter: `[data-filter-btn]` and the custom select → show/hide `[data-filter-item]` by `data-category`.
  - Contact form: enable submit button when `form.checkValidity()`.

```ts
const $ = <T extends Element>(s: string) => document.querySelector<T>(s);
const $$ = <T extends Element>(s: string) => Array.from(document.querySelectorAll<T>(s));

// sidebar (mobile)
const sidebar = $('[data-sidebar]');
$('[data-sidebar-btn]')?.addEventListener('click', () => sidebar?.classList.toggle('active'));

// page tabs
const links = $$<HTMLButtonElement>('[data-nav-link]');
const pages = $$<HTMLElement>('[data-page]');
links.forEach((link) => link.addEventListener('click', () => {
  const target = link.dataset.navLink;
  pages.forEach((p) => p.classList.toggle('active', p.dataset.page === target));
  links.forEach((l) => l.classList.toggle('active', l === link));
  window.scrollTo(0, 0);
}));

// portfolio filter
const items = $$<HTMLElement>('[data-filter-item]');
const applyFilter = (value: string) => items.forEach((it) =>
  it.classList.toggle('active', value === 'all' || value === it.dataset.category));
const selectValue = $('[data-select-value]');
$$('[data-filter-btn]').forEach((btn) => btn.addEventListener('click', () => {
  const v = btn.textContent!.toLowerCase();
  if (selectValue) selectValue.textContent = btn.textContent;
  $$('[data-filter-btn]').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilter(v);
}));
const select = $('[data-select]');
select?.addEventListener('click', () => select.classList.toggle('active'));
$$('[data-select-item]').forEach((item) => item.addEventListener('click', () => {
  const v = item.textContent!.toLowerCase();
  if (selectValue) selectValue.textContent = item.textContent;
  select?.classList.remove('active');
  applyFilter(v);
}));

// contact form
const form = $<HTMLFormElement>('[data-form]');
const formBtn = $<HTMLButtonElement>('[data-form-btn]');
$$('[data-form-input]').forEach((input) => input.addEventListener('input', () => {
  if (formBtn) formBtn.disabled = !form?.checkValidity();
}));
```

Note: `data-nav-link` carries the lowercase page key (e.g. `about`), and `data-page` matches it. The select-value attr is renamed to `data-select-value` (fixes the original `data-selecct-value` typo).

---

### Task 5: Section components

**Files:**
- Create: `src/components/{Sidebar,Navbar,About,Resume,Portfolio,Contact}.astro`

Each ports the matching markup from `index.html`, swapping hardcoded content for `src/data` + `<Icon>`. Key bindings:

- [ ] **Sidebar.astro** — avatar (`src/assets/profile.jpeg` via `<Image>`), `profile.name`, `profile.title`, contacts (Email/Location with `ion:mail-outline`/`ion:location-outline` in the icon-boxes that were empty), `profile.socials` mapped to `<a aria-label={s.name}><Icon name={s.icon}/></a>` (fixes missing aria-labels).
- [ ] **Navbar.astro** — four `<button class="navbar-link" data-nav-link="about|resume|portfolio|contact">` (lowercase keys).
- [ ] **About.astro** — `profile.summary`; `services.map` → service cards with `<Icon name={service.icon}/>`; skills section: `skills.map` → `.clients-item` with `<Icon name={skill.icon} title={skill.name}/>`.
- [ ] **Resume.astro** — Education (`education.map`), Experience (`experience.map`, bullets as `<ul>`), **Certifications** (`certifications.map`), **Awards** (`awards.map`), **Languages** (`languages.join(', ')`). Add a **Download CV** `<a class="form-btn" href={`${import.meta.env.BASE_URL}/${profile.cv}`} download><Icon name="ion:download-outline"/>Download CV</a>` under the header.
- [ ] **Portfolio.astro** — filter list + custom select (categories: All / Mobile Development / Web development), `projects.map` → `.project-item` with `<Image>` (optimized), `data-category`, `data-filter-item`, link to `project.url`, title + `project.tech`.
- [ ] **Contact.astro** — map iframe (dedupe attributes; keep Toronto embed), web3forms form (unchanged `access_key`), rename `data-selecct-value`→`data-select-value`, button uses `<Icon name="ion:paper-plane"/>`.

- [ ] **Verify** — components imported into `index.astro` (Task 6), then build.

---

### Task 6: Compose `index.astro`

**Files:**
- Create: `src/pages/index.astro`

- [ ] **Step 1:** Import `Layout` + 6 components + `profile`; render the `main > aside.sidebar + .main-content > nav + articles` shell, with the first article (`about`) and first nav link carrying `.active`. Include `<script>import '../scripts/main.ts'</script>`.
- [ ] **Step 2: Verify** — `npm run build` succeeds; `npm run preview` shows the About tab; clicking nav switches tabs; mobile menu toggles.

---

### Task 7: Assets — images, icons, favicon, CV

**Files:**
- Create dir: `src/assets/projects/` (move project images here; rename `Renter app project.jpg`→`Renter-app-project.jpg` to avoid spaces)
- Create: `src/assets/profile.jpeg` (move from `assets/images/`)
- Create: `public/favicon.svg` (use existing `assets/images/logo.svg`)
- Create: `public/Brayann-Benavides-CV.pdf` (copy the CV PDF)
- Create: `public/social-card.png` (OG image — reuse `Portfolio.png` or a 1200×630 render)
- Create: `public/robots.txt`

- [ ] **Step 1:** Move/rename images; copy CV pdf into `public/`; copy `logo.svg`→`public/favicon.svg`.
- [ ] **Step 2:** `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://brayannbegu11.github.io/portfolio/sitemap-index.xml
```

- [ ] **Step 3: Verify** — build optimizes images (check `dist/_astro/*.webp`/hashed assets); no broken `<img>` in preview; favicon + CV download resolve (no 404 in network panel).

---

### Task 8: Deploy workflow + README

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create/replace: `README.md`

- [ ] **Step 1: `deploy.yml`** (official Astro → Pages action)

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: README** — short project description, local dev commands (`npm install`, `npm run dev`, `npm run build`), and the **one-time manual step**: *Settings → Pages → Source → "GitHub Actions"*.

---

### Task 9: Cleanup, build, verify

**Files:**
- Delete: `index.html`, `index.js`, `styles.css`, old `assets/` (after confirming all needed images were moved into `src/assets`/`public`)

- [ ] **Step 1:** Remove the legacy root files and unused assets (`assets/images/*-logo.png`, ico/svg icons now replaced by iconify). Keep nothing referenced only by the old template.
- [ ] **Step 2: Build** — `npm run build`; Expected: success, `dist/` produced.
- [ ] **Step 3: Preview & manual QA** — `npm run preview`, then check:
  - All four tabs render and switch; mobile sidebar toggles; portfolio filter works.
  - Resume shows Canam (current), Falabella as "Data Scientist", Certifications, Awards, Languages, working Download CV.
  - No 404s / console errors in the network+console panels.
- [ ] **Step 4: Lighthouse** (optional but target) — Performance & SEO ≥ 95 on the built preview.
- [ ] **Step 5: Commit** the migration.

```bash
git add -A
git commit -m "feat: migrate portfolio to Astro with CV-accurate content, fixes, SEO"
```

---

## Self-Review

- **Spec coverage:** Astro scaffold (T1), components/layout/global CSS (T2,5,6), data-driven content (T3), CV content incl. Canam/certs/awards/languages/Download-CV (T3,T5), bug fixes — favicon/avatar/icon-src/dead-deps (T2,T5,T9), perf/SEO/a11y — astro:assets/OG/aria (T2,T5,T7), deploy + base path (T1,T8). All spec sections mapped. ✓
- **Placeholders:** none — config, data, script, workflow are complete; component tasks reference exact data bindings + source markup. ✓
- **Type consistency:** `profile.cv`, `skill.icon`/`skill.name`, `project.image`/`category`/`tech`, `service.icon`/`title`/`text`, resume arrays — consistent across data (T3), components (T5), and script selectors `data-nav-link`/`data-page`/`data-select-value`/`data-filter-item` (T4,T5). ✓
