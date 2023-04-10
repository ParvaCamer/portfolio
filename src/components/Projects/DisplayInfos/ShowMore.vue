<template>
    <Teleport to="body">
        <div class="container-show-more" @click="hideShowMore"></div>
        <div class="card-show-more">
            <div class="circle left-side-circle"></div>
            <div class="circle right-side-circle"></div>
            <div class="left-side">
                <img class="img-favicon" :src="favicon" alt="favicon image"/>
                <h2>{{ title }}</h2>
                <div class="left-side-bottom">
                    <a target="_blank" :href="github">
                        <span class="card__action">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </span>
                    </a>
                    <a :href="url" target="_blank">
                        <img src="../../../assets/link-logo.svg" alt="link svg"/>
                    </a>
                </div>
            </div>
            <div class="right-side">
                <h2>Some informations about it :</h2>
                <div class="description-div">
                    <p>{{ description }}</p>
                </div>
                <div class="vfor-languages">
                    <p v-for="language in languages" :key="language.id" class="languages" :class="language">{{ language }}
                    </p>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
export default {
    props: ['url', 'title', 'description', 'github', "imageUrl", "languages"],
    data() {
        return {
            favicon: new URL(`/src/assets/favicon/${this.title}.ico`, import.meta.url).href
        }
    },
    methods: {
        hideShowMore() {
            this.$emit('emit-show', false)
        }
    }
}
</script>

<style scoped lang="scss">
@mixin unselectable {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.container-show-more {
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #bbbbbb79;
}

$border-radius: 12px;

.card-show-more {
    position: fixed;
    z-index: 150;
    top: 25vh;
    display: flex;
    width: 50vw;
    -ms-overflow-style: none;
    scrollbar-width: none;
    background: #ffffffe0;
    border-radius: $border-radius;
    overflow: hidden;

    ::-webkit-scrollbar {
        display: none;
    }

    .circle {
        position: absolute;
        height: 600px;
        width: 600px;
        border-radius: 50%;

        &.left-side-circle {
            background: #a9b88c80;
            top: -20%;
            left: -250px;
        }

        &.right-side-circle {
            background: #556f7280;
            top: 30%;
            right: -30%;
        }
    }

    .left-side {
        width: 35%;
        height: 400px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;

        .img-favicon {
            width: 200px;
            position: absolute;
            transform: translateY(45%);
            opacity: .4;
        }

        h2 {
            font-size: 1.8em;
            padding-left: 10px;
            padding-top: 40px;
        }

        .left-side-bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 35px;
            margin-bottom: 25px;

            a {
                width: 50px;
                transition: filter .4s;

                &:hover {
                    filter : invert(45%) sepia(0%) saturate(0%) hue-rotate(172deg) brightness(97%) contrast(83%);
                }
            }
        }
    }

    .right-side {
        width: 65%;
        height: 400px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        z-index: 2;

        h2 {
            padding-left: 20px;
        }

        .description-div {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin: 0 20px;
            max-height: 140px;
            overflow-y: scroll;

            p {
                margin: 0;
                font-size: 1.1em;
                @include unselectable;
                overflow-y: hidden;
            }
        }

        .vfor-languages {
            .languages {
                margin: 10px 12px 0;
                display: inline-block;
                color: #ffffff;
                padding: 8px 14px;
                font-size: 1.15em;
                border: .5px solid black;
                border-radius: 6px;
            }
        }
    }
}

/*** Languages ***/
.HTML {
    background-color: #F16529;
}

/* CSS3 */
.CSS {
    background-color: #2561E9;
}

/* JavaScript */
.JavaScript {
    background-color: #F2D53C;
}

/* CSharp */
.CSharp {
    background-color: #91498C;
}

/* Frameworks, Platforms & Libraries */
.VueJs {
    background-color: #00BC7C;
}

.Vue-Router {
    background-color: #009664;
}

.Vuex {
    background-color: #32475B;
}

.Composition-API {
    background-color: #22313f;
}

/* React */
.React {
    background-color: #17B6E7;
}

/* NodeJs */
.NodeJs {
    background-color: #6AA05C;
}

/* Express */
.Express {
    background-color: #030703;
}

/* Pinia */
.Pinia {
    background-color: #8ECF5B;
}

/* Nuxt */
.Nuxt {
    background-color: #397C6C;
}

/* SASS */
.SCSS {
    background-color: #C76494;
}

/* Tailwind */
.Tailwind {
    background-color: #3C9DAC;
}

/* jQuery */
.jQuery {
    background-color: #0769AD;
}

/* Bootstrap */
.Bootstrap {
    background-color: #7952B3;
}

/* Less */
.Less {
    background-color: #1D365D;
}

/* NPM */
.NPM {
    background-color: #CB3837;
}

/* Databases */
.MySQL {
    background-color: #4479A1;
}

/* MongoDB */
.MongoDB {
    background-color: #61A753;
}

/* Hosting/SaaS */
.Firebase {
    background-color: #F7A10F;
}

/* Netlify */
.Netlify {
    background-color: #00C7B7;
}

/* Other */
.Vite {
    background-color: #646CFF;
}

/* Github */
.Github {
    background-color: #181717;
}

/* Git */
.Git {
    background-color: #F1502F;
}

/* ESLint */
.ESLint {
    background-color: #4B32C3;
}

/* Docker */
.Docker {
    background-color: #2496ED;
}

/* Wordpress */
.Wordpress {
    background-color: #30353A;
}

.ApiRestful {
    background-color: #b1c8db;
}

.Encrypted-Data {
    background-color: #aaacad;
}
</style>