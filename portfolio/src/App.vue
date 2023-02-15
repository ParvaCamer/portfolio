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
body {
  margin: 0;
}

#app {
  height: 100vh;
  margin: 0;
  background-color: #F7F7E8;
}
</style>
