<template>
    <div class="skills-container">
        <p>{{ name }}</p>
        <img :src='require(url)' alt="language-picture">
    </div>
</template>

<script>
export default {
    props: ['name', 'url']
}
</script>

<style scoped lang="scss">
.skills-container {}
</style>