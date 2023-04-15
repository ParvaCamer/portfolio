<template>
    <div class="component-projects-container">
        <div class="card">
            <a :href=url target="_blank">
                <img :src="imageUrl" :alt="imageAlt" class="card__img">
            </a>
            <span class="card__footer">
                <span> {{ title }} </span>
                <span>
                    <a class="read-more" @click="showMore">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                </span>
            </span>
            <a target="_blank" :href="github">
                <span class="card__action">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                </span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'languages', 'url', 'github', "imageUrl", "imageAlt"],
    methods: {
        showMore() {
            this.$emit('emit-show', true);
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

.component-projects-container {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 30vh;

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
        --size: clamp(300px, 45vmin, 600px);
        width: var(--size);
        aspect-ratio: 4 / 3;
        position: relative;
        border-radius: 2rem;
        overflow: hidden;
        color: #000;
        transform: translateZ(0);
        transition: all 0.2s;
        box-shadow: 10px 10px 0px #a8b68b80;

        &:hover {
            box-shadow: 10px 10px 20px #6b745980;
            transform: translate(10px, 10px);   
        }

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
                color: #557174;
                z-index: 4;

                &::after {
                    position: absolute;
                    inset-block: 0;
                    inset-inline: 0;
                    cursor: pointer;
                    content: "";
                    pointer-events: auto;
                }

                &:focus {
                    outline: 1px dotted #557174;
                }
            }
        }

        .card__action {
            position: absolute;
            aspect-ratio: 1;
            width: calc(var(--size) * 0.15);
            bottom: 30%;
            right: 1.5rem;
            transform: translateY(120%) translateY(calc((var(--size) * 0.4))) translateY(calc(var(--hover, 0) * (var(--size) * -0.4)));
            background: purple;
            display: grid;
            place-items: center;
            border-radius: 0.5rem;
            background: hsl(0 0% 100% / 0.5);
            /*   backdrop-filter: blur(calc(var(--blur) * 0.5)); */
            transition: all 0.2s;

            &:hover {
                background: #dadada80;
            }
            svg {
                aspect-ratio: 1;
                width: 50%;
            }
        }
    }
}
</style>