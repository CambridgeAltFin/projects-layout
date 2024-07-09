import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import LayoutHeader from './components/LayoutHeader.vue';
import MobileMenu from './components/MobileMenu.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import Loader from './components/Loader.vue';



export {LayoutHeader, MobileMenu, LayoutFooter, Loader};

const opts = {};

Vue.use(Vuetify, opts);
