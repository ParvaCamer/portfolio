<template>
    <div class="container-display-projects" :class="{ active: display }">
        <MainCard class="main-card" :class="{ active: display }" @emit-again="emitAgain" :url="url" :title="title"
            :languages="languages" :github="github" />
        <ShowMore class="show-more" :class="{ active: display }" @emit-again="emitAgain" v-if="display" :url="url"
            :title="title" :description="description" :github="github" />
    </div>
</template>

<script>
import MainCard from './DisplayInfos/MainCard.vue';
import ShowMore from './DisplayInfos/ShowMore.vue';
export default {
    props: ['url', 'title', 'description', 'github', 'languages'],
    components: {
        MainCard,
        ShowMore
    },
    data() {
        return {
            imageUrl: new URL(`/src/assets/projects/${this.title}.png`, import.meta.url).href,
            imageAlt: `${this.title} picture`,
            display: false
        }
    },
    methods: {
        emitAgain() {
            this.display = !this.display
        }
    }
}
</script>

<style scoped lang="scss">
.container-display-projects {
    position: relative;
    margin-left: 75px;

    .main-card {
        animation: slide-rotate-ver-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        -webkit-animation: slide-rotate-ver-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

        &.active {
            left: -71px;
            position: absolute;
            -webkit-animation: slide-rotate-ver-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation: slide-rotate-ver-left .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        @-webkit-keyframes slide-rotate-ver-left {
            0% {
                -webkit-transform: translateX(0) rotateY(0);
                transform: translateX(0) rotateY(0);
            }

            50% {
                filter: blur(.4rem);
            }

            100% {
                -webkit-transform: translateX(-150px) rotateY(80deg);
                transform: translateX(-150px) rotateY(80deg);
                filter: blur(.8rem);
            }
        }

        @keyframes slide-rotate-ver-left {
            0% {
                -webkit-transform: translateX(0) rotateY(0);
                transform: translateX(0) rotateY(0);
            }

            50% {
                filter: blur(.4rem);
            }

            100% {
                -webkit-transform: translateX(-150px) rotateY(80deg);
                transform: translateX(-150px) rotateY(80deg);
                filter: blur(.8rem);
            }
        }

        @keyframes slide-rotate-ver-right {
            0% {
                -webkit-transform: translateX(-150px) rotateY(80deg);
                transform: translateX(-150px) rotateY(80deg);
                filter: blur(.8rem);
            }

            50% {
                filter: blur(.4rem);
            }

            100% {
                -webkit-transform: translateX(0) rotateY(0);
                transform: translateX(0) rotateY(0);
            }
        }

        @-webkit-keyframes slide-rotate-ver-right {
            0% {
                -webkit-transform: translateX(-150px) rotateY(80deg);
                transform: translateX(-150px) rotateY(80deg);
                filter: blur(.8rem);
            }

            50% {
                filter: blur(.4rem);
            }

            100% {
                -webkit-transform: translateX(0) rotateY(0);
                transform: translateX(0) rotateY(0);
            }
        }
    }

    .show-more {
        animation: leave-right .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

        &.active {
            animation: slide-right .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        @keyframes slide-right {
            0% {
                left: -200px;
                opacity: 0;
            }

            75% {
                opacity: 0.2;
            }

            100% {
                opacity: 1;
                left: 0;
            }
        }
    }
}
</style>