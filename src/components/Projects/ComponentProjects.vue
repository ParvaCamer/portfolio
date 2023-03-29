<template>
    <div class="component-projects-container">
        <a href="#" class="card">
            <img :src="imageUrl" :alt="imageAlt" class="card__img">
            <span class="card__footer">
                <span>{{ title }}</span>
                <span>
                    <a href="#" class="read-more">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                </span>
            </span>
            <span class="card__action">
                <svg viewBox="0 0 448 512" title="play">
                    <path
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                </svg>
            </span>
        </a>
    </div>
</template>

<script>
import ShowMore from './DisplayInfos/ShowMore.vue';
export default {
    components: {
        ShowMore
    },
    props: ['url', 'github', 'title'],
    data() {
        return {
            imageUrl: new URL(`/src/assets/projects/${this.title}.png`, import.meta.url).href,
            imageAlt: `${this.title} picture`,
        }
    },
    methods: {
        toggleDisplay() {
            this.$emit('emit-display');
        }
    },
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

.component-projects-container {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 100vh;

    .icon {
        min-width: 24px;
        width: 24px;
        height: 24px;
        margin-left: 5px;
        transform: translateX(-20px);
        opacity: 0;
        transition: all 0.3s;
    }

    &:has(:hover, :focus) {
        .icon {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .card {
        --blur: 16px;
        --size: clamp(300px, 50vmin, 600px);
        width: var(--size);
        aspect-ratio: 4 / 3;
        position: relative;
        border-radius: 2rem;
        overflow: hidden;
        color: #000;
        transform: translateZ(0);

        &:is(:hover, :focus-visible) {
            --hover: 1;
        }

        .card__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(calc(1 + (var(--hover, 0) * 0.25))) rotate(calc(var(--hover, 0) * -5deg));
            transition: transform 0.2s;
        }

        .card__footer {
            padding: 0 1.5rem;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: red;
            display: grid;
            gap: 0.5ch;
            background: hsl(0 0% 100% / 0.5);
            backdrop-filter: blur(var(--blur));
            height: 30%;
            align-content: center;

            span:nth-of-type(1) {
                font-size: calc(var(--size) * 0.065);
            }

            span:nth-of-type(2) {
                font-size: calc(var(--size) * 0.035);
            }

            .read-more {
                display: inline-flex;
                align-items: center;
                text-decoration: none;
                color: #28666e;

                &::after {
                    position: absolute;
                    inset-block: 0;
                    inset-inline: 0;
                    cursor: pointer;
                    content: "";
                }

                &:focus {
                    outline: 1px dotted #28666e;
                }
            }
        }

        .card__action {
            position: absolute;
            aspect-ratio: 1;
            width: calc(var(--size) * 0.15);
            bottom: 30%;
            right: 1.5rem;
            transform: translateY(50%) translateY(calc((var(--size) * 0.4))) translateY(calc(var(--hover, 0) * (var(--size) * -0.4)));
            background: purple;
            display: grid;
            place-items: center;
            border-radius: 0.5rem;
            background: hsl(0 0% 100% / 0.5);
            /*   backdrop-filter: blur(calc(var(--blur) * 0.5)); */
            transition: transform 0.2s;

            svg {
                aspect-ratio: 1;
                width: 50%;
            }
        }
    }
}
</style>