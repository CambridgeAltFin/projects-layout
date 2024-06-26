import Vue from 'vue';
import Vuetify from './plugins/vuetify';

export {Vuetify};

import MyComponent from './components/MyComponent.vue';
export {MyComponent};

const install = (Vue) => {
  Vue.component('MyComponent', MyComponent);
};

export default {install};
