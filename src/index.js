import Vue from 'vue';
import vuetify from '@/plugins/vuetify'

import LayoutHeader from './components/LayoutHeader.vue';
import MobileMenu from './components/MobileMenu.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import Loader from './components/Loader.vue';

new Vue({
    vuetify,
  }).$mount('#app')

export {LayoutHeader, MobileMenu, LayoutFooter, Loader};

