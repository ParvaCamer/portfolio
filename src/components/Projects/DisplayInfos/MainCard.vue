<template>
    <component-projects @emit-display="emitDisplay" :url="url" :title="title" :github="github">
        <template v-slot:title>{{ title }}</template>
        <template v-slot:infos>
            <div class="language-div">
                <div class="language-div-display" v-for="language in languages" :key="language.id">
                    {{ language }}
                </div>
            </div>
        </template>
        <template v-slot:button>Show me more</template>
    </component-projects>
</template>

<script>
export default {
    props: ['title', 'languages', 'url', 'github'],
    methods: {
        emitDisplay() {
            this.$emit('emit-again')
        }
    }
}
</script>

<style scoped lang="scss">
.language-div {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 20px;

    .language-div-display {
        padding: 10px;
        background-color: lightcoral;
        font-size: .8em;
    }
}
</style>