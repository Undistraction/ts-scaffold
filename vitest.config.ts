import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import react from '@vitejs/plugin-react'
import { playwright } from '@vitest/browser-playwright'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig, defineProject } from 'vitest/config'
import { loadEnv } from './load-env'

loadEnv()

const shared = () => [tsconfigPaths(), react()]

export default defineConfig({
  test: {
    projects: [
      defineProject({
        plugins: shared(),
        test: {
          name: `unit`,
          globals: true,
          include: [`src/**/*.{test,spec}.{ts,tsx}`],
          exclude: [`node_modules`, `.next`, `coverage`],
          setupFiles: [`./src/test/setup.ts`],
        },
      }),
      defineProject({
        plugins: [...shared(), storybookTest()],
        optimizeDeps: {
          include: [`@storybook/addon-a11y/preview`],
        },
        test: {
          name: `ui`,
          globals: true,
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: `chromium` }],
          },
          setupFiles: [`./.storybook/vitest.setup.ts`],
        },
      }),
    ],
    coverage: {
      provider: `v8`,
      reporter: [`text`, `json`, `html`],
      exclude: [`node_modules/`, `src/test/`, `**/*.d.ts`, `**/*.config.*`],
    },
  },
})
