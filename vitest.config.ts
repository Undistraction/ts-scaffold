import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'
import { loadEnv } from './load-env'

loadEnv()

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    include: [`src/**/*.{test,spec}.{ts,tsx}`],
    setupFiles: [`./src/test/setup.ts`],
    exclude: [`node_modules`, `.next`, `coverage`],
    coverage: {
      provider: `v8`,
      reporter: [`text`, `json`, `html`],
      exclude: [`node_modules/`, `src/test/`, `**/*.d.ts`, `**/*.config.*`],
    },
  },
})
