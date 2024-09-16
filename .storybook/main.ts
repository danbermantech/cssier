import type { StorybookConfig } from '@storybook/react-vite'
const config: StorybookConfig = {
  stories: [
    { directory: '../src/lib/hooks', files: '*.stories.@(js|jsx|ts|tsx)', titlePrefix: 'Hooks' },
    { directory: '../src/lib/components', files: '*.stories.@(js|jsx|ts|tsx)', titlePrefix: 'Components' },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-theming',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '.storybook/vite.config.ts',
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
