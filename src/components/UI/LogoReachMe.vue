<template>
    <a href="mailto:romain.camerlynck@gmail.com" aria-label="logo svg">
        <img src="../../assets/Footer/envelope-solid.svg" alt="envelope svg" :style="style"/>
    </a>
    <a href="https://www.linkedin.com/in/romain-camerlynck-b974a6177/" target="_blank" aria-label="logo svg">
        <img src="../../assets/Footer/linkedin.svg" alt="linkedin svg" :style="style"/>
    </a>
    <a href="https://github.com/ParvaCamer" target="_blank" aria-label="logo svg">
        <img src="../../assets/Footer/github.svg" alt="github svg" :style="style"/>
    </a>
</template>

<script>
export default {
    props: ['style'],
    computed: {
        changeColor() {
            return this.style;
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    cursor: pointer;
    z-index: 1;

    img {
        width: var(--width);
        height: 100%;
        filter: var(--color);
        transition: filter .5s;

        &:hover {
            filter: var(--color-hover);
        }
    }    
}
</style>