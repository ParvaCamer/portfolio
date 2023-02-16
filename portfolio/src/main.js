import { createApp } from 'vue';
import App from './App.vue';

import BaseH2 from './components/UI/BaseH2.vue';

const app = createApp(App);
app.component('base-h2', BaseH2);

app.mount('#app');
