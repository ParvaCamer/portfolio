<template>
    <div class="container-display-projects" :id="`${title.replace(/ /g, '')}`">
        <MainCard class="main-card" @emit-show="emitShow" :url="url" :imageUrl="imageUrl" :imageAlt="imageAlt"
            :title="title" :languages="languages" :github="github" />
        <ShowMore class="show-more" :class="{ active: display }" @emit-show="emitShow" :url="url"
            :imageUrl="imageUrl" :title="title" :description="description" :github="github" :languages="languages" />
        <div class="container-show-more" v-if="display" @click="display = !display"></div>
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
            imageUrl: new URL(`/src/assets/projects/${this.title}.webp`, import.meta.url).href,
            imageAlt: `${this.title} picture`,
            display: false
        }
    },
    methods: {
        emitShow(value) {
            this.display = value;
        }
    }
}
</script>

<style scoped lang="scss">
.container-show-more {
    cursor: pointer;
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #bbbbbb79;
}

.container-display-projects {
    position: relative;
    flex: 1 1 calc(30% - 10px);
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease;
}

.slide-enter {
    transform: translateX(100%);
}

.slide-enter-to {
    transform: translateX(0%);
}

.slide-leave {
    transform: translateX(0%);
}

.slide-leave-to {
    transform: translateX(-100%);
}
</style>