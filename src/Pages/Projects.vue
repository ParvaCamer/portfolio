<template>
    <div class="projects-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#567073" fill-opacity="1"
                d="M0,160L48,154.7C96,149,192,139,288,133.3C384,128,480,128,576,154.7C672,181,768,235,864,218.7C960,203,1056,117,1152,74.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
        </svg>
        <base-h2 class="h2" :title="'My projects'" :newColor="'#a8b78b'"></base-h2>
        <div class="display-projects" v-for="(project, value) in projects" :key="project.id">
            <div class="display-projects-h2">
                <span></span>
                <h2>{{ upperCase(value) }}</h2>
                <span></span>
            </div>
            <div class="display-projects-flex">
                <DisplayProjects v-for="window in project" :key="window.id" :url="window.url"
                    :title="window.title" :description="window.description" :github="window.github"
                    :languages="window.languages" />
            </div>
        </div>
    </div>
</template>

<script>
import DisplayProjects from '../components/Projects/DisplayProjects.vue';
export default {
    components: {
        DisplayProjects,
    },
    data() {
        return {
            projects: this.$store.state.projects.projects
        }
    },
    methods: {
        upperCase(value) {
            return value[0].toUpperCase() + value.slice(1)
        },
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
        margin: 300px 0 10px 150px;
    }

    .display-projects {
        margin: 35px 100px 50px;

        .display-projects-h2 {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;

            span {
                border: 1px solid #d1d18e;
                width: 250px;
                height: 0;
            }

            h2 {
                margin: 0;
                padding: 0 20px;
                color: #a8b78b;
                text-align: left;
                font-size: 1.7rem;
            }
        }

        .display-projects-flex {
            display: flex;
            flex-wrap: wrap;
            gap: 40px 25px;
            padding-bottom: 45px;
        }
    }
}</style>