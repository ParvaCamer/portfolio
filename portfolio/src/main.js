import { createApp } from 'vue';
import store from './store/index.js';
import App from './App.vue';

import BaseH2 from './components/UI/BaseH2.vue';
import BaseButton from './components/UI/BaseButton.vue';
import ComponentProjects from './components/Projects/ComponentProjects.vue';

const app = createApp(App);
app.use(store);

app.component('base-h2', BaseH2);
app.component('base-button', BaseButton);
app.component('component-projects', ComponentProjects);

app.mount('#app');
