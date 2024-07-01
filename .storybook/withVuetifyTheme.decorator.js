import Vuetify from 'vuetify';
import Vue from 'vue';

Vue.use(Vuetify, {
  ssr: true,
  theme: {
    themes: {
      dark: false,
      light: {
        primary: '#0E1436',
        accent: '#FFB71A',
        secondary: '#828597'
      }
    }
  }
});

export const withVuetifyTheme = (Story, context) => {
  // Извлекаем переменную темы из глобальных параметров, с выбором DEFAULT_THEME
  const themeName = 'light';

  const vuetify = new Vuetify({
    ssr: false,
    theme: {
      themes: {
        dark: false,
        light: {
          primary: '#0E1436',
          accent: '#FFB71A',
          secondary: '#828597'
        }
      }
    }
  });

  const WrappedComponent = Story(context);

  return Vue.extend({
    vuetify,
    components: {WrappedComponent},
    template: `
      <v-app>
          <wrapped-component />
      </v-app>
    `
  });
};
