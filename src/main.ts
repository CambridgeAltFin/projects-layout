import {createApp} from 'vue';

import './assets/styles/index.scss';

import App from './App.vue';
import vuetify from './plugins/vuetify';

createApp(App).use(vuetify).mount('#app');
