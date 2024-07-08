import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {directives} from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import {
  VFooter,
  VRow,
  VContainer,
  VCol,
  VIcon,
  VCard,
  VListItem,
  VListItemTitle,
  VDivider,
  VChip,
  VAppBar,
  VSpacer,
  VSelect,
  VDialog
} from 'vuetify';

const opts = {
  ssr: true,
  components: {
    VFooter,
    VRow,
    VContainer,
    VCol,
    VIcon,
    VAppBar,
    VSpacer,
    VSelect,
    VDialog,
    VCard,
    VListItem,
    VListItemTitle,
    VDivider,
    VChip
  },
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

Vue.use(Vuetify, opts);

import MobileMenu from './components/MobileMenu.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import Loader from './components/Loader.vue';

export {MobileMenu, LayoutFooter, LayoutHeader, Loader};
