import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_ORIGIN (for example https://www.example.com) when building for production.
// Canonical links become absolute and the sitemap is written.
const site = process.env.SITE_ORIGIN?.replace(/\/+$/, '');

export default defineConfig({
  site,
  trailingSlash: 'always',
  // English pages stay at the root. Translated pages live under /de/, /fr/, /es/ and /it/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es', 'it'],
    routing: { prefixDefaultLocale: false },
  },
  compressHTML: false,
  integrations: site ? [sitemap()] : [],
});
