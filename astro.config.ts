import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'development', '.', '')

export default defineConfig({
  site: SITE_URL || undefined,
  publicDir: './public/static',
  server: { host: true, allowedHosts: ['.trycloudflare.com'] },
  i18n: {
    defaultLocale: 'en',
    locales: [
      { path: 'en', codes: ['en-US', 'en'] },
      { path: 'it', codes: ['it-IT', 'it'] },
    ],
  },
  vite: { plugins: [tailwindcss()] },
})
