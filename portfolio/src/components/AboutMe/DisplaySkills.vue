<template>
    <div class="display-skills-container">
        <div v-for="(skill, value) in skills" :key="skill.id">
            <h2>{{ upperCase(value) }}</h2>
            <div class="display-skills-flex">
                <Skills v-for="program in skill" :key="program.id" :name="program.name" :url="program.url" />
            </div>
        </div>
    </div>
</template>

<script>
import Skills from './Skills.vue';
export default {
    components: {
        Skills
    },
    data() {
        return {
            skills: {
                languages: [
                    {
                        name: "HTML5",
                        type: "Languages",
                        url: '../../assets/skills/HTML5.png'
                    },
                    {
                        name: "CSS3",
                        type: "Languages",
                    },
                    {
                        name: "JavaScript",
                        type: "Languages",
                    }
                ],
                frameworks: [
                    /* {
                        name: "Bootstrap",
                        type: "Frameworks",
                    }, */
                    {
                        name: "jQuery",
                        type: "Frameworks",
                    },
                    /* {
                        name: "Less",
                        type: "Frameworks",
                    }, */
                    {
                        name: "NPM",
                        type: "Frameworks",
                    },
                    {
                        name: "Nuxt",
                        type: "Frameworks",
                    },
                    {
                        name: "SASS",
                        type: "Frameworks",
                    },
                    {
                        name: "TailwindCSS",
                        type: "Frameworks",
                    },
                    {
                        name: "Vue.Js",
                        type: "Frameworks",
                    }
                ],
                databases: [
                    {
                        name: "MySQL",
                        type: "Databases",
                    }
                ],
                hosting: [
                    {
                        name: "Firebase",
                        type: "Hosting",
                    },
                    {
                        name: "Netlify",
                        type: "Hosting",
                    }
                ],
                other: [
                    /* {
                        name: "Figma",
                        type: "Other",
                    }, */
                    {
                        name: "ESLint",
                        type: "Other",
                    },
                    {
                        name: 'Vite',
                        type: 'Other',
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
.display-skills-container {
    margin: 40px;
    height: 600px;
    width: 50%;
    border: 1px solid black;

    .display-skills-flex {
        display: flex;
    }
}
</style>
