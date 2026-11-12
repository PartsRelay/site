import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

const { SITE_URL } = loadEnv('', '.', '')

export default defineConfig({
  site: SITE_URL || undefined,
  vite: { plugins: [tailwindcss()] },
})
