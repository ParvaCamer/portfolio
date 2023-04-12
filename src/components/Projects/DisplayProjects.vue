<template>
    <div class="container-display-projects" :id="`${title.replace(/ /g, '')}`">
        <MainCard class="main-card" @emit-show="emitShow" :url="url" :imageUrl="imageUrl" :imageAlt="imageAlt"
            :title="title" :languages="languages" :github="github" />
        <ShowMore class="show-more" @emit-show="emitShow" v-if="display" :url="url" :imageUrl="imageUrl" :title="title"
            :description="description" :github="github" :languages="languages" />
    </div>
</template>

<script>
import MainCard from './DisplayInfos/MainCard.vue';
import ShowMore from './DisplayInfos/ShowMore.vue';
export default {
    props: ['index', 'url', 'title', 'description', 'github', 'languages'],
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
        emitShow(value) {
            this.display = value;
        }
    }
}
</script>

<style scoped lang="scss">
.container-display-projects {
    position: relative;
    flex: 1 1 calc(30% - 10px);
}
</style>