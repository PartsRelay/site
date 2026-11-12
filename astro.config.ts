import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

const { SITE_URL } = loadEnv('', '.', '')

export default defineConfig({
  site: SITE_URL || undefined,
  i18n: {
    defaultLocale: 'en',
    locales: [
      { path: 'en', codes: ['en-US', 'en'] },
      { path: 'it', codes: ['it-IT', 'it'] },
    ],
  },
  vite: { plugins: [tailwindcss()] },
})
