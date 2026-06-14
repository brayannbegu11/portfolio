# Brayann Benavides — Portfolio

Personal portfolio site built with [Astro](https://astro.build). Fast, static,
and deployed to GitHub Pages.

🔗 **Live:** https://brayannbegu11.github.io/portfolio/

## Tech

- **Astro 4** — static site, zero client framework
- **TypeScript** — typed content data + interactivity
- **astro-icon** (iconify `ion` + `devicon`) — inline SVG icons, no runtime requests
- **astro:assets** — automatic image optimization (WebP, responsive)

## Project structure

```
src/
├── layouts/Layout.astro     # <head>, SEO/OG meta, analytics
├── pages/index.astro        # page composition
├── components/              # Sidebar, Navbar, About, Resume, Portfolio, Contact
├── data/                    # content as typed data (profile, services, skills, resume, projects)
├── scripts/main.ts          # tabs, filter, form validation (vanilla TS)
├── styles/global.css        # theme
└── assets/                  # images (optimized at build)
public/                      # favicon, CV, social card, robots.txt, sitemap.xml
```

To update content, edit the files in `src/data/` — no markup changes needed.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321/portfolio
npm run build    # output to ./dist
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds the site and deploys it to
GitHub Pages.

> **One-time setup:** in the repository, go to **Settings → Pages → Build and
> deployment → Source** and select **"GitHub Actions"**.
