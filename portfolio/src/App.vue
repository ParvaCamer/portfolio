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
  color: #104F55;
  height: 100vh;
  margin: 0;
  background-color: #E9FAEA;
}
</style>
