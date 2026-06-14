# Portfolio Migration to Astro — Design Spec

- **Date:** 2026-06-14
- **Author:** Brayann Benavides
- **Status:** Approved
- **Goal:** A polished, professional portfolio optimized for job applications.

## Context

The current portfolio is a single static `index.html` (the "vCard" template)
using jQuery, Font Awesome, toastr and ionicons, deployed to GitHub Pages at
`https://brayannbegu11.github.io/portfolio/`. The content has drifted out of
sync with the current CV, and the page ships several unused dependencies,
unoptimized images (~7.2 MB), and a few broken asset references.

## Goals

1. **Professional & job-ready:** strong first impression, fast load, clear
   calls-to-action (Download CV, contact, LinkedIn/GitHub), clean share preview.
2. **Accurate content** that matches the current CV.
3. **Modern, maintainable stack** (Astro) where projects/skills/resume are data.
4. **Fix all known bugs** and remove dead weight.

## Non-Goals

- No visual redesign — keep the existing dark "vCard" identity, refined.
- No phone number published on the site (email + LinkedIn only).
- Do not change Google Analytics ID or the web3forms access key.
- No blog or dynamic/server features (static output only).

## Architecture

Astro project producing a fully static site.

```
portfolio/
├── astro.config.mjs        # site + base: '/portfolio', image service, sitemap
├── package.json
├── public/                 # static passthrough (favicon, CV pdf, robots.txt)
│   ├── Brayann-Benavides-CV.pdf
│   └── favicon.svg
├── src/
│   ├── layouts/Layout.astro    # <head>, meta, OG/Twitter, fonts, GA
│   ├── pages/index.astro       # composes the sections
│   ├── components/
│   │   ├── Sidebar.astro
│   │   ├── Navbar.astro
│   │   ├── About.astro
│   │   ├── Resume.astro
│   │   ├── Portfolio.astro
│   │   └── Contact.astro
│   ├── data/
│   │   ├── profile.ts       # name, title, contacts, socials
│   │   ├── skills.ts        # skill list (with icons)
│   │   ├── services.ts      # "What I'm doing" cards
│   │   ├── resume.ts        # education, experience, certifications, awards, languages
│   │   └── projects.ts      # portfolio projects (data-driven grid + filters)
│   ├── assets/             # project images (optimized via astro:assets)
│   ├── scripts/main.ts     # tabs, mobile sidebar, project filter, form validation (vanilla)
│   └── styles/global.css   # ported from current styles.css
└── .github/workflows/deploy.yml
```

**UX preserved:** single page with the same tabbed navigation
(About / Resume / Portfolio / Contact) toggled by a small vanilla-JS script.
No jQuery.

## Content Changes (mapped to CV)

| Section | Change |
|---|---|
| About | Rewrite to current positioning: Software Developer — backend (.NET / NestJS / REST APIs) + cross-platform mobile (React Native) + data-driven (SQL / Pandas / Power BI). |
| Services | Refresh the four cards to: Backend Development, Mobile Development, Data & Analytics, Clean Code / Best Practices. |
| Skills | Add missing tech (C# / .NET, TypeScript, NestJS, SQL / PostgreSQL, Docker). Replace heavy PNG logos with lightweight, consistent SVG icons (same "strip" look). |
| Experience | **Add Canam Systems — Software Developer (Jan 2025 – Present).** Fix Falabella title to "Data Scientist" (remove "intern"). |
| Education | Fix to "Bachelor of Informatics Engineering". |
| Certifications | **New section:** Google Cybersecurity, Python for Everybody (U. Michigan), Scrum Fundamentals. |
| Awards | **New:** Dean's Honor List (2024), Graduated with honors — George Brown College (2024). |
| Languages | **New:** English, Spanish. |
| Download CV | **New button** linking to `public/Brayann-Benavides-CV.pdf`. |

## Bug Fixes & Cleanup

- Remove unused jQuery, Font Awesome, toastr.
- Fix favicon (currently references missing `logo.ico`).
- Remove dead testimonials modal + missing `avatar-1.png` reference.
- Fix broken `src` (newline) on the design service icon.
- Remove duplicate `width`/`height`/`loading` attrs on the map iframe.

## Performance, SEO & Accessibility

- Image optimization via `astro:assets` (project images) + optimized SVG icons.
- `<meta name="description">`, Open Graph + Twitter Card tags, canonical URL.
- `aria-label` on social/icon-only links.
- Keep `preconnect` for Google Fonts; keep GA snippet as-is.
- Optional: `@astrojs/sitemap` for `sitemap.xml` + `robots.txt`.

## Deploy

- GitHub Actions workflow builds Astro and deploys to GitHub Pages.
- `astro.config.mjs`: `site: 'https://brayannbegu11.github.io'`, `base: '/portfolio'`
  to preserve the current URL.
- **One-time manual step (user):** GitHub repo → Settings → Pages → Source →
  "GitHub Actions".

## Risks

- **Base path:** all internal links/assets must respect `base: '/portfolio'`.
  Mitigation: use Astro's `import.meta.env.BASE_URL` / relative asset imports.
- **Pages source switch** is manual; site stays on the old build until done.
  Mitigation: work on the `astro-migration` branch; document the toggle.

## Verification

- `npm run build` succeeds; `npm run preview` renders all four tabs.
- No 404s in the network panel (favicon, images, CV).
- Lighthouse: Performance & SEO ≥ 95 on the built site.
- Content matches the CV (experience, certs, awards, languages present).
- Share preview (OG) renders name, title, description.
