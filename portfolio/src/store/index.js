import { createStore } from 'vuex';

import skillsModule from './modules/skills/index.js';
import projectsModule from './modules/projects/index.js';

const store = createStore({
    modules: {
        skills: skillsModule,
        projects: projectsModule
    }
});

export default store