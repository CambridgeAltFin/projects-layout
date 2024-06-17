import {createVuetify} from 'vuetify';
import type {ThemeDefinition} from 'vuetify';

import {aliases, mdi} from 'vuetify/iconsets/mdi';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#d35400',
    secondary: '#8e44ad',
    background: '#ecf0f1',
    error: '#c0392b',
    info: '#2980b9',
    success: '#27ae60',
    warning: '#f1c40f'
  }
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
});
