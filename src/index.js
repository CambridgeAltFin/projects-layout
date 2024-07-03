import Vue from 'vue';
import Vuetify from './plugins/vuetify';



export {Vuetify};

import MobileMenu from './components/MobileMenu.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import Loader from './components/Loader.vue';

export {MobileMenu, LayoutFooter, LayoutHeader, Loader};

const install = (Vue) => {
  Vue.component('MobileMenu', MobileMenu);
  Vue.component('LayoutFooter', MobileMenu);
  Vue.component('LayoutHeader', MobileMenu);
  Vue.component('Loader', MobileMenu);
};

export default {install};
