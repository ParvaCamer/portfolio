<template>
    <h2 class="gradient-title" :style="{ '--gradient-color': newColor }">{{ title }}</h2>
</template>

<script>
export default {
    props: ['title', 'newColor']
}
</script>

<style scoped>
.gradient-title {
    margin: 0;
    padding: 5px 0 20px;
    font-size: 7em;
    user-select: none;
    opacity: .4;
    background: linear-gradient(to bottom, transparent 10%, var(--gradient-color) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    mask-image: linear-gradient(to bottom, transparent 0%, #000000 100%);
}

@media screen and (max-width: 576px) {
    .gradient-title {
        font-size: 3.5em;
        padding: 50px 0 20px 10px;
    }
}

</style>