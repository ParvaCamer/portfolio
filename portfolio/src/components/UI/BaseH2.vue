<template>
    <h2 :style="{ color: newColor }">{{ title }}</h2>
</template>

<script>
export default {
    props: ['title', 'newColor']
}
</script>

<style scoped>
h2 {
    margin: 0;
    padding: 10px 0;
    text-align: center;
    font-size: 2.3em;
    width: 20vw;
    border-radius: 6px;
    box-shadow: inset 20px 20px 60px #c7cfb715,
        inset -20px -20px 60px #c7cfb720;
}
</style>