<template>
    <div class="aboutme-container">
        <div class="aboutme-container-whoami">
            <a href="" download>
                <button class="button"><span>Download my Resume</span></button>
            </a>
            <div class="aboutme-container-flex">
                <base-h2 :title="'Who am I ?'" :newColor="'#e4edcf'"></base-h2>
                <p>I am a self-taught Frontend developer since {{ displayYear(2020) }} years and a Fullstack developer
                    since
                    {{ displayYear(2023) }} years. I started to learn by myself, then I did a program for Frontend
                    developer
                    by OpenClassrooms, an online bootcamp, in 2022. Finally, I am doing an other bootcamp to be Fullstack
                    developer by M2iFormation. I am also a freelance since September 2021.
                </p>
            </div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F2E7E2"
                    d="M68.8,-28.8C74.8,-3.9,55.4,22.8,31.4,39.3C7.4,55.8,-21.2,62.2,-42,49.1C-62.9,36.1,-75.9,3.6,-67.6,-24.5C-59.3,-52.5,-29.7,-76.2,0.9,-76.4C31.4,-76.7,62.8,-53.7,68.8,-28.8Z"
                    transform="translate(100 100)" />
            </svg>
        </div>
        <div class="aboutme-container-skills">
            <div class="aboutme-container-skills-coding">
                <svg viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F2E7E2"
                        d="M57.8,-57.4C69.3,-46.2,69.3,-23.1,68.1,-1.2C66.9,20.6,64.4,41.3,52.8,52.4C41.3,63.6,20.6,65.3,0.4,64.9C-19.9,64.5,-39.7,62,-53,50.9C-66.2,39.7,-72.8,19.9,-71,1.9C-69.1,-16.1,-58.8,-32.3,-45.5,-43.4C-32.3,-54.6,-16.1,-60.8,3.5,-64.2C23.1,-67.7,46.2,-68.5,57.8,-57.4Z"
                        transform="translate(100 100)" />
                </svg>
                <img src="../assets/coding-guy-removebg.png" alt="coding-guy">
            </div>
            <DisplaySkills />
        </div>
    </div>
</template>

<script>
import DisplaySkills from '../components/AboutMe/DisplaySkills.vue';
export default {
    components: {
        DisplaySkills
    },
    methods: {
        displayYear(since) {
            let now = new Date();
            let currentYear = now.getFullYear();
            let yearsPassed = currentYear - since;
            if (yearsPassed == 0) yearsPassed = 1;
            return yearsPassed;
        }
    }
}
</script>

<style scoped lang="scss">
.aboutme-container {
    color: #e4edcf;
    background-color: #557174;

    .aboutme-container-whoami {
        display: flex;
        justify-content: center;
        position: relative;


        a, .button {
            height: 60px;
            width: 200px;
            border-radius: 6px;
            z-index: 5;
        }

        a {
            position: absolute;
            right: 150px;

            .button {
                display: inline-block;
                height: 60px;
                width: 200px;
                border-radius: 6px;
                background-color: #de6b1e;
                border: none;
                transition: all 0.5s;
                cursor: pointer;
                color: #f7f7e8;
                font-size: 0.95em;

                span {
                    display: inline-block;
                    position: relative;
                    transition: 0.5s;

                    &:after {
                        content: '»';
                        position: absolute;
                        opacity: 0;
                        top: 0;
                        right: -20px;
                        transition: 0.5s;
                    }
                }

                &:hover span {
                    padding-right: 25px;

                    &:after {
                        opacity: 1;
                        right: 0;
                    }
                }
            }
        }

        .aboutme-container-flex {
            width: 80vw;
            margin: 50px 0;
            z-index: 2;

            p {
                text-align: justify;
                padding: 0 100px;
                font-size: 1.5em;
                line-height: 6vh;
            }
        }

        svg {
            position: absolute;
            width: 600px;
            opacity: .8;
            left: -220px;
            top: 200px;
            transform: rotate(-180deg);
        }
    }

    .aboutme-container-skills {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        overflow: hidden;

        .aboutme-container-skills-coding {
            position: relative;
            width: 60%;
            overflow: hidden;
            margin: 0 0 -250px 0;

            img {
                position: absolute;
                left: 50%;
                top: 80%;
                transform: translate(-40%, -100%);
                width: 60%;
                -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0) 100%);
                mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0) 100%);
            }
        }
    }
}
</style>