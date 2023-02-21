<template>
    <component-projects @emit-display="emitDisplay" :url="url" :title="title" :github="github">
        <template v-slot:title>What is it about ?</template>
        <template v-slot:infos>
            <div class="description-div">
                <p>{{ description }}</p>
            </div>
        </template>
        <template v-slot:button>Go Back</template>
    </component-projects>
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