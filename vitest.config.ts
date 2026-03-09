import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

// Load .env.local so DATABASE_URL_TEST is available
dotenv.config({ path: `.env.local` })

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    include: [`src/**/*.{test,spec}.{ts,tsx}`],
    setupFiles: [`./src/test/setup.ts`],
    exclude: [`node_modules`, `.next`, `coverage`],
    env: {
      // Route tests use the test database
      DATABASE_URL: process.env.DATABASE_URL_TEST ?? ``,
    },
    coverage: {
      provider: `v8`,
      reporter: [`text`, `json`, `html`],
      exclude: [`node_modules/`, `src/test/`, `**/*.d.ts`, `**/*.config.*`],
    },
  },
})
