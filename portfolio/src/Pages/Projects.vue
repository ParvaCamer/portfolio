<template>
    <div class="projects-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#567073" fill-opacity="1"
                d="M0,160L48,154.7C96,149,192,139,288,133.3C384,128,480,128,576,154.7C672,181,768,235,864,218.7C960,203,1056,117,1152,74.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
        </svg>
        <base-h2 class="h2" :title="'My projects'" :newColor="'red'"></base-h2>
        <div class="display-projects" v-for="(project, value) in projects" :key="project.id">
            <h2>{{ upperCase(value) }}</h2>
            <DisplayProjects v-for="window in project" :key="window.id" :url="window.url" :title="window.title"
                :languages="window.languages" :description="window.description" :github="window.github" />
        </div>
    </div>
</template>

<script>
import DisplayProjects from '../components/Projects/DisplayProjects.vue';
export default {
    components: {
        DisplayProjects
    },
    data() {
        return {
            projects: {
                'individual projects': [
                    {
                        url: 'oui',
                        title: 'oui',
                        languages: [],
                        description: 'oui',
                        github: 'oui'
                    },
                    {
                        url: 'non',
                        title: 'non',
                        languages: [],
                        description: 'non',
                        github: 'non'
                    }
                    , {
                        url: '',
                        title: '',
                        languages: [],
                        description: '',
                        github: ''
                    }
                ],
                'learning projects': [
                    {
                        url: 'nan',
                        title: 'nan',
                        languages: [],
                        description: 'nan',
                        github: 'nan'
                    },
                    {
                        url: '',
                        title: '',
                        languages: [],
                        description: '',
                        github: ''
                    }
                ]
            }
        }
    },
    methods: {
        upperCase(value) {
            return value[0].toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style scoped lang="scss">
.projects-container {
    position: relative;
    background-color: #F7F7E7;

    svg {
        position: absolute;
        top: -2px;
    }

    .h2 {
        display: inline-block;
        margin-top: 200px;
    }
}
</style>