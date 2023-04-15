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
    cursor: pointer;
    transition: all .4s;
    &:hover {
        animation-play-state: paused;
        opacity: 1 !important;
        transform: scale(1.05) !important;
    }
}

@keyframes slide {
    0% {
        left: -30%;
    }

    100% {
        left: 90%;
    }
}
</style>