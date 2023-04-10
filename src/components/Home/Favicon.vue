<template>
    <img class="animated-image">
</template>

<script>
export default {
    props: ['index'],
    mounted() {
        const containerWidth = this.$el.clientWidth;
        const randomPosition = Math.floor(Math.random() * containerWidth);
        console.log(randomPosition)

        const icons = document.querySelectorAll('.home-favicon-animation img');
        let index = 0;
        setInterval(() => {
            icons[index].classList.add('show');
            index++;
            if (index === icons.length) {
                index = 0;
            }
        }, 2000);
    },
}
</script>

<style lang="scss" scoped>
.animated-image {
    position: absolute;
    animation-name: slide;
    animation-duration: 25s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    top: 65%;
    left: -10%;
    opacity: 0;

    &.show {
        opacity: 1;
    }
}

@keyframes slide {
    0% {
        left: 0;
    }

    100% {
        left: 100%;
    }
}
</style>