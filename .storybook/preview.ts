import {withVuetifyTheme} from './withVuetifyTheme.decorator';
import type {Preview} from '@storybook/vue3';
import {setup} from '@storybook/vue3';
import vuetify from '../src/plugins/vuetify';

setup((app) => {
  app.use(vuetify);
});

export const globalTypes = {
  theme: {
    name: 'vuetify.theme.defaultTheme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        {value: 'light', title: 'Light', left: '🌞'},
        {value: 'dark', title: 'Dark', left: '🌛'}
      ],
      // Change title based on selected value
      dynamicTitle: true
    }
  }
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [withVuetifyTheme]
};

export default preview;
