<template>
    <h3>What is it about ?</h3>
    <div class="description-div">
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: ['url', 'title', 'description', 'github'],
    methods: {
        emitDisplay() {
            this.$emit('emit-again')
        }
    }
}
</script>

<style scoped lang="scss">
$color: #e4edcf;

@mixin unselectable {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.description-div {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 0 20px;
    max-height: 140px;
    overflow-y: scroll;

    p {
        font-size: .9em;
        @include unselectable;
    }
}
</style>