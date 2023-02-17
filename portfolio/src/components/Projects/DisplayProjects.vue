<template>
    <div v-if="!display" class="display-projects-container">
        <div class="display-projects-container-top">
            <div class="image-div">
                <img :src="imageUrl" :alt="imageAlt">
                <span><a target="_blank" :href="url"></a></span>
            </div>
            <h3>{{ title }}</h3>
            <div class="language-div">
                <div class="language-div-display" v-for="language in languages" :key="language.id">
                    {{ language }}
                </div>
            </div>
        </div>
        <div @click="display = !display" class="display-projects-bottom">
            <div class="button-div">
                <a>Show more</a>
            </div>
            <div class="github-div">
                <div class="github-div-relative">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                    <a target="_blank" :href="github"></a>
                </div>
            </div>
        </div>

    </div>
    <ShowMore v-else :url="url" :title="title" :languages="languages" :description="description" :github="github"
        :imageUrl="imageUrl" :imageAlt="imageAlt" />
</template>

<script>
import ShowMore from './ShowMore.vue';
export default {
    components: {
        ShowMore
    },
    props: ['url', 'title', 'languages', 'description', 'github'],
    data() {
        return {
            imageUrl: new URL(`/src/assets/projects/${this.title}.png`, import.meta.url).href,
            imageAlt: `${this.title} picture`,
            display: false
        }
    }
}
</script>

<style scoped lang="scss">
$color: #e4edcf;

.display-projects-container {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 6px;
    background-color: #567073d5;
    height: 500px;
    width: 350px;
    padding: 40px 15px 20px;
    color: $color;

    .image-div {
        position: relative;
        display: flex;
        width: 100%;
        justify-content: center;

        img {
            border: 2px solid black;
            border-radius: 6px;
            width: 80%;
        }

        span {
            position: absolute;
            display: inline;
            width: 80%;
            height: 100%;
            z-index: 2;
        }

        a {
            display: block;
            height: 100%;
        }
    }

    h3 {
        width: 80%;
        border-bottom: 1px solid $color;
        padding: 0 10px 10px;
    }

    .language-div {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin: 20px;

        .language-div-display {
            padding: 10px;
            background-color: lightcoral;
            font-size: .8em;
        }
    }

    .display-projects-bottom {
        position: relative;
        display: flex;
        justify-content: center;
        margin: 30px 0 10px;

        .button-div {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border: 2px solid black;
            height: 60px;
            width: 200px;
        }

        .github-div {
            position: absolute;
            width: 50px;
            border-radius: 50%;
            right: 0;
            bottom: 0;

            .github-div-relative {
                position: relative;

                svg {
                    display: inline-block;
                    width: 100%;
                    border-radius: 50%;
                }

                a {
                    position: absolute;
                    display: block;
                    width: 100%;
                    height: 90%;
                    top: 0;
                    left: 0;
                    z-index: 2;
                    border-radius: 50%;
                }
            }
        }
    }
}
</style>