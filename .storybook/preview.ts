import type { Preview } from '@storybook/react'
import theme from './theme'
import { s } from 'vitest/dist/types-3c7dbfa5.js'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    theme,
    options: {
      storySort: {
        order: ['hooks/*', 'components/*'],
      },
    },
  },
}

export default preview
