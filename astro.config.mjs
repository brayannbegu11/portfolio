// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// Served from a GitHub Pages project site: https://brayannbegu11.github.io/portfolio/
export default defineConfig({
  site: 'https://brayannbegu11.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  integrations: [icon()],
});
