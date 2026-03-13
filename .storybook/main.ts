import type { StorybookConfig } from '@storybook/nextjs-vite'

const config: StorybookConfig = {
  stories: [`../src/**/*.stories.@(ts|tsx)`],
  addons: [`@storybook/addon-mcp`],
  framework: `@storybook/nextjs-vite`,
}

export default config
