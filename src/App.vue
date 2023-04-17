<template>
  <Header @menu-is-open="menuOpen" :menuIsOpen="isMenuOpen" />
  <Home :isMenuOpen="isMenuOpen" @is-menu-open="menuOpen" />
  <Footer :isMenuOpen="isMenuOpen" @is-menu-open="menuOpen" />
</template>

<script>
import Header from './components/Layouts/Header.vue';
import Home from './Pages/Home.vue';
import Footer from './components/Layouts/Footer.vue';

export default {
  components: {
    Header,
    Home,
    Footer
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    menuOpen(value) {
      this.isMenuOpen = value;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display&display=swap');

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Bebas Neue', cursive;
  font-family: 'Playfair Display', serif;
  letter-spacing: 2px;
  font-size: 16px;
}

#app {
  height: 100vh;
  margin: 0;
  background-color: #F7F7E8;
}
</style>
