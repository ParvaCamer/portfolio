<template>
    <div class="app-container" @click="hideMenu">
        <div class="home-container">
            <img src="../assets/pc.svg" class="logo-image" alt="logo" />
            <div class="home-favicon-animation">
                <h3>Vue.Js / React Front-end and Fullstack .NET developer, living in Lille in France.</h3>
                <h4>- All of my projects are here -</h4>
                <div class="home-container-logo-flex">
                    <LogoReachMe :style="changeLogoColor" />
                </div>
                <Favicon v-for="(icon, index) in icons" :src="icon.url" :key="icon.name" :index="index"
                    @click="scrollTo(icon.name.replace(/ /g, '').slice(0, -4))" :style="{
                        transform: icon.rotate,
                        width: icon.width,
                        opacity: icon.opacity,
                        left: icon.left,
                        animationDuration: (index < (icons.length / 2)) ? ((Math.sqrt(index + 1)) * 6 + (index * 0.5)) + 's' : (Math.sqrt(index + 2)) * 6 + (index - (icons.length / 2)) + 's'
                    }" />
            </div>
            <div class="home-container-flex">
                <h1>Romain Camerlynck
                    <span></span>
                </h1>
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
            console.log(fileName)
            return {
                name: fileName,
                url: new URL(key, import.meta.url).href,
                width: Math.floor(Math.random() * (100 - 75 + 1) + 75) + 'px',
                rotate: 'rotate(' + Math.floor(Math.random() * (50 - (-30) + 1) + (-30)) + 'deg)',
                opacity: Math.random() * (0.5 - 0.3) + 0.3,
                left: Math.random() * (150 - 10) + 10 + 'px'
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
        },

    },
    methods: {
        hideMenu() {
            if (this.isMenuOpen) {
                this.$emit('is-menu-open', false);
            }
        },
        scrollTo(id) {
            document.querySelector('#' + id).scrollIntoView({ behavior: 'smooth' });
        },
    }
}
</script>

<style lang="scss">
@mixin unselectable {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

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
        width: 50vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 250px;

        h3,
        h4 {
            z-index: 2;
            position: relative;
        }

        h3 {
            width: 95%;
            font-size: 2.5em;
            margin-top: 0;
        }

        .home-container-logo-flex {
            margin-top: 25px;
            display: flex;
            align-items: center;
            gap: 35px;
        }
    }

    .home-container-flex {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: auto;

        h1 {
            position: relative;
            font-size: 7vw;
            margin: 0 0 100px;
            @include unselectable();
            transition: all .3s;

            &:hover {
                z-index: 3;

                span {
                    width: 30%;
                }
            }

            span {
                content: "";
                position: absolute;
                bottom: -30px;
                left: 5px;
                width: 25%;
                height: 15px;
                background-color: #557174;
                transition: all 0.3s ease-in-out, opacity .2s ease-in-out;
            }
        }
    }

    .picture-profile-image {
        position: absolute;
        width: 25%;
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