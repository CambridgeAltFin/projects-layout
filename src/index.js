import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

const opts = {
  ssr: true
};

Vue.use(Vuetify, opts);

import LayoutHeader from './components/LayoutHeader.vue';
import MobileMenu from './components/MobileMenu.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import Loader from './components/Loader.vue';

export {LayoutHeader, MobileMenu, LayoutFooter, Loader};
