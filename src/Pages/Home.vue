<template>
    <div class="app-container" @click="hideMenu">
        <div class="home-container">
            <img src="../../pc.svg" class="logo-image" alt="logo" />
            <div class="home-favicon-animation">
                <h3><span>Vue.Js - React Front-end</span> and Fullstack .NET developer, based in Lille in France.</h3>
                <Favicon v-for="(icon, index) in icons" :src="icon.url" :key="icon.name" :index="index"
                    @click="scrollTo(icon.name.replace(/ /g, '').slice(0, -4))" :style="{
                        width: icon.width,
                        transform: icon.rotate,
                        opacity: icon.opacity,
                        animationDuration: (index < (icons.length / 2)) ? (Math.sqrt(index + 1)) * 14 + 's' : (Math.sqrt(index + 1)) * 6 + 's',
                        top: icon.top
                    }" />
            </div>
            <div class="home-container-flex">
                <span></span>
                <h1>Camerlynck Romain</h1>
                <div class="home-container-logo-flex">
                    <LogoReachMe :style="changeLogoColor" />
                </div>
            </div>
            <img class="picture-profile-image" src="../assets/picture-profile.png" alt="picture profile" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#557174" fill-opacity="1"
                    d="M0,32L48,69.3C96,107,192,181,288,229.3C384,277,480,299,576,272C672,245,768,171,864,165.3C960,160,1056,224,1152,240C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
        </div>
        <AboutMe />
        <Projects />
    </div>
</template>

<script>
import AboutMe from './AboutMe.vue';
import Projects from './Projects.vue';
import Favicon from '../components/Home/Favicon.vue';
import LogoReachMe from '../components/UI/LogoReachMe.vue';

export default {
    components: {
        AboutMe,
        Projects,
        Favicon,
        LogoReachMe
    },
    created() {
        const iconFiles = import.meta.glob('/src/assets/favicon/*');
        this.icons = Object.keys(iconFiles).map(key => {
            const fileName = key.split('/').pop();
            return {
                name: fileName,
                url: key,
                width: Math.floor(Math.random() * (100 - 75 + 1) + 75) + 'px',
                rotate: 'rotate(' + Math.floor(Math.random() * (50 - (-30) + 1) + (-30)) + 'deg)',
                opacity: Math.random() * (0.5 - 0.3) + 0.3,
                top: Math.random() * (80 - 30) + 30 + '%',
            };

        });
    },
    data() {
        return {
            icons: []
        }
    },
    props: {
        isMenuOpen: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        changeLogoColor() {
            return {
                '--color': "invert(48%) sepia(6%) saturate(1542%) hue-rotate(138deg) brightness(83%) contrast(80%)",
                '--color-hover': "invert(72%) sepia(19%) saturate(417%) hue-rotate(39deg) brightness(95%) contrast(91%)",
                '--width': '30px'
            }
        }
    },
    methods: {
        hideMenu() {
            if (this.isMenuOpen) {
                this.$emit('is-menu-open', false);
            }
        },
        scrollTo(id) {
            console.log('#' + id)
            document.querySelector('#' + id).scrollIntoView({ behavior: 'smooth' });
        },
    }
}
</script>

<style scoped lang="scss">

.home-container {
    color: #a8b78b;
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;


    .logo-image {
        width: 50px;
        position: absolute;
        top: 25px;
        left: 100px;
    }

    .home-favicon-animation {
        position: relative;
        width: 60vw;

        h3 {
            position: relative;
            font-size: 3em;
            z-index: 2;
        }
    }

    .home-container-flex {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: auto;

        h1 {
            position: relative;
            font-size: 7em;
            margin: 50px 0 0;
        }

        .home-container-logo-flex {
            display: flex;
            align-items: center;
            gap: 25px;
        }
    }

    .picture-profile-image {
        position: absolute;
        width: 500px;
        right: 0;
        bottom: 40px;
        filter: drop-shadow(25px -10px 20px #4d4d4d);
    }

    svg {
        position: absolute;
        bottom: -5px;
    }
}
</style>