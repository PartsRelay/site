/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config'

process.env.TZ = 'UTC'

export default getViteConfig({
  test: {
    include: ['tests/unit/**/*.test.ts'],
    environment: 'node',
    passWithNoTests: true,
  },
})
