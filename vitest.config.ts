import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

// Load .env.test so tests use the test database
dotenv.config({ path: `.env.test` })

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    include: [`src/**/*.{test,spec}.{ts,tsx}`],
    setupFiles: [`./src/test/setup.ts`],
    exclude: [`node_modules`, `.next`, `coverage`],
    env: {
      ...(process.env.DATABASE_URL
        ? { DATABASE_URL: process.env.DATABASE_URL }
        : {}),
    },
    coverage: {
      provider: `v8`,
      reporter: [`text`, `json`, `html`],
      exclude: [`node_modules/`, `src/test/`, `**/*.d.ts`, `**/*.config.*`],
    },
  },
})
