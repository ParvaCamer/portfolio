<template>
    <div class="skills-container">
        <img :src="imageUrl" :alt="imageAlt">
        <p>{{ name }}</p>
    </div>
</template>

<script>
export default {
    props: ['name'],
    data() {
        return {
            imageUrl: new URL(`/src/assets/skills/${this.name}.png`, import.meta.url).href,
            imageAlt: `${this.name} picture`
        }
    }
}
</script>

<style scoped lang="scss">
.skills-container {
    display: flex;
    flex-direction: column;
    background-color: #f2e7e225;
    border-radius: 50%;
    padding: 15px;
    gap: 10px;

    p {
        margin: 0;
    }

    img {
        width: 70px;
        aspect-ratio: 3/2;
        object-fit: contain;
    }

}
</style>