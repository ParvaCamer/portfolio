<template>
    <footer>
        <div class="footer">
            <div class="row flex">
                <a>
                    <img src="../../assets/Footer/envelope-solid.svg" />
                </a>
                <a href="https://www.linkedin.com/in/romain-camerlynck-b974a6177/" target="_blank">
                    <img src="../../assets/Footer/linkedin.svg" />
                </a>
                <a href="https://github.com/ParvaCamer" target="_blank">
                    <img src="../../assets/Footer/github.svg" />
                </a>
            </div>
            <div class="row">
                <ul>
                    <li @click="scrollTo('.home-container')">Home</li>
                    <li @click="scrollTo('.aboutme-container')">About Me</li>
                    <li @click="scrollTo('.projects-container')">My Projects</li>
                </ul>
            </div>
            <div class="row">
                Designed By : Camerlynck Romain - {{ getFullYear }}
            </div>
        </div>
        <svg class="svg-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#F7F7E7" fill-opacity="1"
                d="M0,192L120,176C240,160,480,128,720,122.7C960,117,1200,139,1320,149.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
            </path>

        </svg>
    </footer>
</template>

<script>
export default {
    computed: {
        getFullYear() {
            const date = new Date();
            return date.getFullYear();
        }
    },
    methods: {
        scrollTo(id) {
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
    position: relative;

    .svg-top {
        position: absolute;
        top: -50px;
    }

    .footer {
        background: #557174;
        padding: 30px 0px;
        font-family: 'Play', sans-serif;
        text-align: center;

        .row {
            width: 100%;
            margin: 1% 0%;
            padding: 0.6% 0%;
            color: #E4EDCF;
            font-size: 0.8em;

            &.flex {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 80px;
                margin-top: 120px;
            }

            a {
                text-decoration: none;
                cursor: pointer;
                z-index: 1;

                img {
                    width: 45px;
                    filter: invert(95%) sepia(7%) saturate(702%) hue-rotate(33deg) brightness(104%) contrast(86%);
                    transition: filter .5s;

                    &:hover {
                        filter: invert(95%) sepia(5%) saturate(2119%) hue-rotate(26deg) brightness(80%) contrast(75%);
                    }
                }
            }

            ul {
                width: 100%;
                padding: 0;

                li {
                    cursor: pointer;
                    width: 100px;
                    display: inline-block;
                    margin: 0px 30px;
                    z-index: 1;
                    position: relative;
                    font-size: 1.25em;
                    transition: 0.5s;

                    &:hover {
                        color: #a8b78b;
                    }
                }
            }
        }
    }
}

@media (max-width:720px) {
    .footer {
        text-align: left;
        padding: 5%;
    }

    .footer .row ul li {
        display: block;
        margin: 10px 0px;
        text-align: left;
    }

    .footer .row a i {
        margin: 0% 3%;
    }
}</style>