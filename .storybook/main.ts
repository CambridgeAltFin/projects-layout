import type {StorybookConfig} from '@storybook/vue-vite';
import {mergeConfig} from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss'
  ],
  framework: {
    name: '@storybook/vue-vite',
    options: {}
  },
  viteFinal: async (config, options) => {
    return mergeConfig(config, {
      css: {
        postcss: null,
        preprocessorOptions: {
          scss: {
            additionalData: `
                 @import "../src/assets/styles/index.scss";
                `
          }
        }
      }
    });
  },
  docs: {
    autodocs: 'tag'
  },

  staticDirs: ['../public']
};
export default config;
