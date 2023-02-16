<template>
    <div class="display-projects-container">bite</div>
    <p>{{ url }}</p>
    <p>{{ title }}</p>
    <p>{{ languages }}</p>
    <p>{{ description }}</p>
    <p>{{ github }}</p>
</template>

<script>
export default {
    props: ['url', 'title', 'languages', 'description', 'github']
}
</script>