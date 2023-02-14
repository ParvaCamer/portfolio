<template>
    <header>
        <nav class="menu-burger">
            <div class="menu-icon" @click="toggleMenu">
                <span :class="{ active: isMenuOpen }"></span>
                <span :class="{ active: isMenuOpen }"></span>
                <span :class="{ active: isMenuOpen }"></span>
            </div>
            <ul class="menu-items" :class="{ active: isMenuOpen }">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">My Projects</a></li>
                <li><a href="#">My Resume</a></li>
            </ul>
        </nav>
        <div v-if="isMenuOpen" class="burger-circle"></div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>

<style>
header {
    position: fixed;
    top: 30px;
    right: 50px;
    z-index: 999;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.menu-burger {
    display: flex;
    align-items: center;
}

.menu-icon {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 30px;
    height: 20px;
    z-index: 2;
}

.menu-icon span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #011502;
    transition: transform 0.2s;
}

.menu-icon span:nth-child(2) {
    width: 85%;
}

.menu-icon span:nth-child(3) {
    width: 70%;
}

.menu-icon span.active {
    transition: background-color .9s;
    background-color: #CAF0CD;
}

.menu-items {
    padding: 0;
    position: absolute;
    top: 80px;
    right: 125px;
    display: none;
    list-style-type: none;
    z-index: 2;
}

.menu-items.active {
    display: flex;
    flex-direction: column;
    animation: slide-in .9s forwards;
}

.menu-items li {
    padding: 10px 0;
    font-size: 1.4em;
}

.menu-items a {
    text-decoration: none;
    color: #CAF0CD;
}

@keyframes slide-in {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }

    80% {
        opacity: 0;
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.burger-circle {
    position: absolute;
    top: -300px;
    right: -300px;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    background-color: #000;
    animation: circle-move .8s ease-in-out forwards;
}

@keyframes circle-move {
    0% {
        top: -1000px;
        right: -1000px;
    }

    100% {
        top: -300px;
        right: -300px;
    }
}
</style>
