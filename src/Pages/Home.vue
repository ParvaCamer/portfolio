<template>
    <h1 id="progress">Website in progress</h1>
    <div class="app-container" @click="hideMenu">
        <div class="home-container">
            <div class="home-container-flex">
                <h1>Hello there !</h1>
                <h2>My name is Romain Camerlynck</h2>
                <h3>I am a <span>Front-end</span> developer</h3>
            </div>
            <img src="../assets/picture-profile.png" alt="picture profile"/>
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

export default {
    components: {
        AboutMe,
        Projects
    },
    props: {
        isMenuOpen: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        hideMenu() {
            if (this.isMenuOpen) {
                this.$emit('is-menu-open', false);
            }
        }
    }
}
</script>

<style scoped lang="scss">
#progress {
    position: absolute;
    left: 40%;
    margin: 0;
    color: rgb(196, 62, 62);
}

.home-container {
    color: #a8b78b;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .home-container-flex {
        display: flex;
        flex-direction: column;
        padding-left: 250px;

        h1 {
            position: relative;
            right: 80px;
            font-size: 3.5em;
            margin-top: 0;
        }

        h2 {
            font-size: 2.3em;
            text-align: center;
        }

        h3 {
            position: relative;
            top: 20px;
            left: 80px;
            font-size: 1.8em;
            text-align: right;
        }
    }

    img {
        position: relative;
        width: 400px;
        top: 20px;
        filter: drop-shadow(25px -10px 20px #4d4d4d);
    }

    svg {
        position: absolute;
        bottom: -5px;
    }
}
</style>