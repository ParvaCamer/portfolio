<template>
    <img class="animated-image">
</template>

<script>
export default {
    props: ['index']
}
</script>

<style lang="scss" scoped>
.animated-image {
    position: absolute;
    animation-name: slide;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes slide {
    0% {
        left: -25%;
    }

    100% {
        left: 100%;
    }
}
</style>