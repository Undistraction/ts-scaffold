import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      include: [`src/**/*.{test,spec}.ts`],
      exclude: [`node_modules`, `dist`, `coverage`],
      coverage: {
        provider: `v8`,
        reporter: [`text`, `json`, `html`],
        exclude: [`node_modules/`, `src/test/`, `**/*.d.ts`, `**/*.config.*`],
      },
    },
  }),
)
