<template>
    <div class="container-display-projects">
        <MainCard class="main-card" :class="{ active: display }" v-if="!display" @emit-show="emitShow" :url="url"
            :title="title" :languages="languages" :github="github" />
        <ShowMore class="show-more" :class="{ active: display }" v-else :url="url" :title="title" :description="description"
            :github="github" />
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
            console.log(value)
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