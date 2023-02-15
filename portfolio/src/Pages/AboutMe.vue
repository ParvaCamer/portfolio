<template>
    <div class="aboutme-container">
        <button class="button"><span>Download my Resume</span></button>
        <div class="aboutme-container-flex">
            <h2>Who am I ?</h2>
            <p>I am a self-taught Frontend developer since {{ displayYear(2020) }} years and a Fullstack developer since
                {{ displayYear(2023) }} years. I started to learn by myself, then I did a program for Frontend developer
                by OpenClassrooms, an online bootcamp, in 2022. Finally, I am doing an other bootcamp for Fullstack
                developer by M2iFormation. I am also a freelance since {{ displayYear(2021) }} years.
            </p>
        </div>
    </div>
</template>

<script>
export default {
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
    color: #F7F7E8;
    background-color: #557174;
    display: flex;
    justify-content: center;
    position: relative;

    .button {
        position: absolute;
        display: inline-block;
        right: 150px;
        height: 60px;
        width: 200px;
        border-radius: 6px;
        background-color: #de6b1e;
        border: none;
        transition: all 0.5s;
        cursor: pointer;
        color: #F7F7E8;
        font-size: .88em;

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

    .aboutme-container-flex {
        width: 80vw;
        margin: 50px 0;

        h2 {
            margin: 0;
            padding: 5px;
            text-align: center;
            font-size: 2.3em;
            width: 20vw;
            border-radius: 6px;
            box-shadow: inset 20px 20px 60px #c7cfb715,
                inset -20px -20px 60px #c7cfb720;
        }

        p {
            text-align: justify;
            padding: 0 100px;
            font-size: 1.5em;
            line-height: 6vh;
        }
    }
}
</style>