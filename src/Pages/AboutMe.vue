<template>
    <div class="aboutme-container">
        <div class="aboutme-container-whoami">
            <svg class="svg-top" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F2E7E2"
                    d="M42,-72.8C55.9,-64.6,69.8,-56.5,76.8,-44.3C83.8,-32.2,83.9,-16.1,81,-1.7C78.2,12.8,72.3,25.6,65,37.2C57.8,48.9,49.1,59.4,38,67.9C26.9,76.3,13.5,82.8,-1.5,85.4C-16.5,88,-32.9,86.8,-46.8,79.9C-60.6,73,-71.8,60.5,-76.6,46.2C-81.3,31.9,-79.6,16,-77.2,1.4C-74.8,-13.2,-71.5,-26.3,-66.4,-39.9C-61.3,-53.5,-54.2,-67.6,-42.8,-77.2C-31.4,-86.8,-15.7,-92,-0.9,-90.5C14,-89,28,-80.9,42,-72.8Z"
                    transform="translate(100 100)" />
            </svg>
            <a class="a-button" href="https://github.com/ParvaCamer/portfolio/raw/main/src/assets/Resume_Fullstack.pdf"
                download>
                <button class="button"><span>Download my Resume</span></button>
            </a>
            <div class="aboutme-container-flex">
                <base-h2 :title="'Who am I ?'" :newColor="'#e4edcf'"></base-h2>
                <div class="aboutme-container-text">
                    <svg class="svg-text" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path class="path-svg-text" fill="#F2E7E2"
                            d="M64,-45.4C79.6,-31.6,86.4,-5.2,79.8,15.9C73.1,37,53,52.6,33.8,56.8C14.5,60.9,-3.9,53.6,-25.4,45.8C-47,38.1,-71.8,30.1,-80.5,12.5C-89.2,-5.2,-82,-32.4,-65.9,-46.2C-49.8,-60.1,-24.9,-60.7,-0.3,-60.5C24.3,-60.2,48.5,-59.1,64,-45.4Z"
                            transform="translate(100 100)" />
                        <svg class="svg-text svg-behind" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#F2E7E2"
                                d="M63.7,-38.5C74.4,-18.2,69.4,9.5,56.2,26.4C43,43.3,21.5,49.4,-3.6,51.5C-28.8,53.6,-57.6,51.7,-71.1,34.7C-84.6,17.6,-82.9,-14.6,-68.5,-37.1C-54.1,-59.5,-27,-72.2,-0.3,-72C26.5,-71.8,52.9,-58.8,63.7,-38.5Z"
                                transform="translate(100 100)" />
                        </svg>
                    </svg>

                    <p>I am a self-taught Frontend developer since {{ displayYear(2020) }} years and a Fullstack
                        developer
                        since
                        {{ displayYear(2023) }} years. I started to learn by myself, then I did a program
                        with OpenClassrooms, an online bootcamp, to get a Front-End developer professional certification, in
                        2022. Finally, I am doing an other bootcamp to be
                        Fullstack
                        developer by M2iFormation. I am also a freelance since September 2021.
                    </p>
                </div>
            </div>
            <svg class="svg-container" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F2E7E2"
                    d="M68.8,-28.8C74.8,-3.9,55.4,22.8,31.4,39.3C7.4,55.8,-21.2,62.2,-42,49.1C-62.9,36.1,-75.9,3.6,-67.6,-24.5C-59.3,-52.5,-29.7,-76.2,0.9,-76.4C31.4,-76.7,62.8,-53.7,68.8,-28.8Z"
                    transform="translate(100 100)" />
                <svg class="svg-behind" viewBox="10 10 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F2E7E2"
                        d="M56.4,-34.3C67.1,-14.2,65.4,11.3,54,28.7C42.5,46.1,21.3,55.3,-2.8,56.9C-26.9,58.5,-53.7,52.5,-64.9,35.4C-76,18.2,-71.3,-10.2,-57.9,-31.9C-44.5,-53.7,-22.2,-69,0.3,-69.2C22.9,-69.4,45.8,-54.5,56.4,-34.3Z"
                        transform="translate(100 100)" />

                </svg>
            </svg>
            <svg class="svg-right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F2E7E2"
                    d="M40.8,-72.1C50.8,-64.8,55.4,-49.7,61.4,-36.4C67.4,-23.1,74.8,-11.6,76.3,0.9C77.9,13.3,73.6,26.7,67.6,40.1C61.7,53.4,54,66.8,42.4,71.1C30.9,75.4,15.4,70.5,0.9,68.9C-13.6,67.3,-27.1,68.9,-36.8,63.5C-46.5,58.2,-52.3,45.9,-61,34.1C-69.6,22.4,-81.2,11.2,-85,-2.2C-88.9,-15.7,-85.2,-31.4,-75.6,-41.5C-66,-51.7,-50.6,-56.3,-37,-61.5C-23.4,-66.8,-11.7,-72.7,1.8,-75.9C15.4,-79,30.7,-79.5,40.8,-72.1Z"
                    transform="translate(100 100)" />
            </svg>
        </div>
        <div class="aboutme-container-skills">
            <div class="aboutme-container-skills-coding">
                <svg viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F2E7E2"
                        d="M57.8,-57.4C69.3,-46.2,69.3,-23.1,68.1,-1.2C66.9,20.6,64.4,41.3,52.8,52.4C41.3,63.6,20.6,65.3,0.4,64.9C-19.9,64.5,-39.7,62,-53,50.9C-66.2,39.7,-72.8,19.9,-71,1.9C-69.1,-16.1,-58.8,-32.3,-45.5,-43.4C-32.3,-54.6,-16.1,-60.8,3.5,-64.2C23.1,-67.7,46.2,-68.5,57.8,-57.4Z"
                        transform="translate(100 100)" />
                    <svg class="svg-behind" viewBox="0 0 199 197" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#F2E7E2"
                            d="M53.7,-32.1C65.3,-11,67.3,14.5,56.7,36.3C46.2,58.2,23.1,76.4,2,75.2C-19.2,74.1,-38.3,53.7,-52.5,29.7C-66.7,5.7,-76,-21.7,-66.4,-41.6C-56.8,-61.6,-28.4,-74,-3.6,-71.8C21.1,-69.7,42.2,-53.1,53.7,-32.1Z"
                            transform="translate(100 100)" />
                    </svg>
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
    overflow: hidden;

    .svg-behind {
        opacity: .3;
    }

    .aboutme-container-whoami {
        display: flex;
        justify-content: center;
        position: relative;

        .svg-top {
            position: absolute;
            width: 150px;
            opacity: .6;
            top: -5px;
            right: 500px;
        }

        .svg-right {
            position: absolute;
            width: 600px;
            right: -350px;
            opacity: .4;
        }

        .a-button,
        .button {
            height: 70px;
            width: 220px;
            border-radius: 8px;
            z-index: 3;
            animation: bounce 2s infinite;
        }

        a {
            position: absolute;
            right: 150px;
            top: 10px;

            .button {
                display: inline-block;
                background-color: #de6b1e;
                border: none;
                transition: all 0.5s;
                cursor: pointer;
                color: #f7f7e8;
                font-size: 1em;

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

            @keyframes bounce {

                0%,
                20%,
                50%,
                80%,
                100% {
                    transform: translateY(0);
                }

                40% {
                    transform: translateY(-5px);
                }

                60% {
                    transform: translateY(-2.5px);
                }
            }
        }

        .aboutme-container-flex {
            width: 80vw;
            margin: 50px 0;
            z-index: 2;

            .aboutme-container-text {
                position: relative;
                height: 60vh;
                margin-top: 30px;

                .svg-text {
                    position: relative;
                    transform: translateX(250px) translateY(-200px) rotate(3deg);
                    width: 900px;
                }

                p {
                    position: absolute;
                    top: 0px;
                    left: 350px;
                    width: 600px;
                    color: #a8b78b;
                    text-align: justify;
                    padding: 25px 50px;
                    font-size: 1.15em;
                    line-height: 5vh;
                }
            }
        }

        .svg-container {
            position: absolute;
            width: 600px;
            opacity: .8;
            left: -220px;
            top: 325px;
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

@media screen and (max-width: 576px) {
    .aboutme-container .aboutme-container-whoami {
        display: block;
    }

    .aboutme-container .aboutme-container-whoami .svg-top {
        top: -50px;
        right: -55px;
    }

    .aboutme-container .aboutme-container-whoami .svg-right {
        display: none;
    }

    .aboutme-container .aboutme-container-whoami .svg-container {
        left: -325px;
        top: 400px;
    }
    .aboutme-container .aboutme-container-whoami a {
        right: 10px;
        top: -25px;
    }

    .aboutme-container .aboutme-container-whoami .aboutme-container-flex .aboutme-container-text {
        width: 100vw;
    }

    .aboutme-container .aboutme-container-whoami .aboutme-container-flex .aboutme-container-text .svg-text {
        width: 600px;
        transform: translateX(-125px) translateY(-100px) rotate(3deg);
    }
    .aboutme-container .aboutme-container-whoami .aboutme-container-flex .aboutme-container-text p {
        left: 0;
        width: auto;
        padding: 55px 15px;
        font-size: 1em;
        line-height: 2.5vh;
    }

    .aboutme-container .aboutme-container-skills {
        flex-direction: column;
    }
    .aboutme-container .aboutme-container-skills .aboutme-container-skills-coding {
        width: 125%;
        padding: 100px 0 0;
        margin: 0 0 -50px 0;
    }
}
</style>