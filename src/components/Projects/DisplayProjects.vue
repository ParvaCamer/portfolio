<template>
    <div class="container-display-projects">
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
        emitAgain() {
            this.display = !this.display
        }
    }
}
</script>

<style scoped lang="scss">
.container-display-projects {
    position: relative;
    flex: 1 1 calc(30% - 10px);

    .main-card {}

    .show-more {}
}</style>