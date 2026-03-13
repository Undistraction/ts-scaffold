import type { Preview } from '@storybook/react'

import '@/app/globals.css'

const preview: Preview = {
  parameters: {
    a11y: {
      test: `error`,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
  },
}

export default preview
