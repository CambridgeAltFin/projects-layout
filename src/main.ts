import {createApp} from 'vue';

import App from './App.vue';
import vuetify from './plugins/vuetify';

import './assets/styles/index.scss';

createApp(App).use(vuetify).mount('#app');
