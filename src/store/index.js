import { createStore } from 'vuex';

import projectsModule from './modules/projects/index.js';

const store = createStore({
    modules: {
        projects: projectsModule
    }
});

export default store