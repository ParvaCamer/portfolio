<template>
    <div class="button-div">
        <a>
            <slot></slot>
        </a>
    </div>
</template>

<style scoped lang="scss">
.button-div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #e4edcf;
    border-radius: 14px;
    height: 50px;
    width: 180px;
    cursor: pointer;
    transition: all .2s ease-in;

    &:hover {
        transform: scale(1.05);
        border-color: #a8b78b;
        color: #a8b78b;
        background-color: #e4edcf1a;
    }
}
</style>