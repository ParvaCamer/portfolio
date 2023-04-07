<template>
    <div class="display-skills-container">
        <div class="display-skills-flex" v-for="(skill, value) in skills" :key="skill.id">
            <h2>{{ upperCase(value) }}</h2>
            <div class="display-skill-flex">
                <Skills v-for="program in skill" :key="program.id" :name="program.name" />
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
                'languages': [
                    {
                        name: "HTML5",
                        type: "Languages",
                    },
                    {
                        name: "CSS3",
                        type: "Languages",
                    },
                    {
                        name: "JavaScript",
                        type: "Languages",
                    },
                    {
                        name: "CSharp",
                        type: "Languages",
                    }
                ],
                'frameworks, platforms & libraries': [
                    {
                        name: "VueJs",
                        type: "Frameworks",
                    },
                    {
                        name: "React",
                        type: "Frameworks"
                    },
                    {
                        name: "NodeJs",
                        type: "Frameworks"
                    },
                    {
                        name: "Express",
                        type: "Frameworks"
                    },
                    {
                        name: "Pinia",
                        type: "Frameworks"
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
                        name: "Tailwind",
                        type: "Frameworks",
                    },
                    {
                        name: "jQuery",
                        type: "Frameworks",
                    },
                    {
                        name: "Bootstrap",
                        type: "Frameworks",
                    },
                    {
                        name: "Less",
                        type: "Frameworks",
                    },
                    {
                        name: "NPM",
                        type: "Frameworks",
                    }
                ],
                'databases': [
                    {
                        name: "MySQL",
                        type: "Databases",
                    },
                    {
                        name: "MongoDB",
                        type: "Databases"
                    }
                ],
                'hosting/SaaS': [
                    {
                        name: "Firebase",
                        type: "Hosting",
                    },
                    {
                        name: "Netlify",
                        type: "Hosting",
                    }
                ],
                'other': [
                    {
                        name: "Vite",
                        type: "Other",
                    },
                    {
                        name: "Github",
                        type: "Other",
                    },
                    {
                        name: 'Git',
                        type: 'Other',
                    },
                    {
                        name: 'ESLint',
                        type: 'Other',
                    },
                    {
                        name: 'Docker',
                        type: 'Other',
                    },
                    {
                        name: 'Wordpress',
                        type: 'Other'
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
    width: 40%;

    .display-skill-flex {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        gap: 10px;
        text-align: center;
    }
}
</style>
