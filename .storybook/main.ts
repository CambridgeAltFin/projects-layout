import type {StorybookConfig} from '@storybook/vue-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack'
  ],
  framework: {
    name: '@storybook/vue-vite',
    options: {}
  },
  viteFinal: async (config, options) => {
    config.css = {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "../src/assets/styles/index.scss";`
        }
      }
    };

    return config;
  },
  docs: {
    autodocs: 'tag'
  },

  staticDirs: ['../public']
};
export default config;
