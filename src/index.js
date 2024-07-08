import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import 'vuetify/dist/vuetify.min.css';

import MobileMenu from './components/MobileMenu.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import Loader from './components/Loader.vue';

Vue.use(Vuetify);

Vue.component('MobileMenu', MobileMenu);
Vue.component('LayoutFooter', LayoutFooter);
Vue.component('LayoutHeader', LayoutHeader);
Vue.component('Loader', Loader);

export {MobileMenu, LayoutFooter, LayoutHeader, Loader};
