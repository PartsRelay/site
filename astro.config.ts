import { existsSync, readdirSync } from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'development', '.', '')

const locales = readdirSync('locales')
  .filter((code) => existsSync(`locales/${code}/site.json`))
  .sort()
  .map((code) => {
    const { language } = new Intl.Locale(code)

    return { path: language, codes: [code, language] as [string, string] }
  })

export default defineConfig({
  site: SITE_URL || undefined,
  publicDir: './public/static',
  server: { host: true, allowedHosts: ['.trycloudflare.com'] },
  i18n: { defaultLocale: 'en', locales },
  vite: { plugins: [tailwindcss()] },
})
