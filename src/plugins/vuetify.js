import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opts = {
  ssr: false,
  components,
  directives,
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
};

export default new Vuetify(opts);
