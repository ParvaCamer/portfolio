<template>
  <Header />
  <Home />
</template>

<script>
import Header from './components/Layouts/Header.vue';
import Home from './Pages/Home.vue';

export default {
  components: {
    Header,
    Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Roboto+Slab:wght@100;300;700&family=Ubuntu&display=swap');

body {
  margin: 0;
}

#app {
  font-family: 'Ubuntu', 'Times New Roman';
  height: 100vh;
  margin: 0;
  background-color: #F7F7E8;
}
</style>
