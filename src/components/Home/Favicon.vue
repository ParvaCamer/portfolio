<template>
  <img class="animated-image" :style="{ transform: rotate }">
</template>

<script>
export default {
  props: ['rotate'],
  computed: {
    getRotate() {
      return this.rotate;
    }
  }
}
</script>

<style scoped lang="scss">
.animated-image {
  animation: slide-down ease forwards infinite;
  position: absolute;
  cursor: pointer;
  transition: all .4s;

  --rotate-value: {
      {
      getRotate
    }
  }

  ;

  &:hover {
    animation-play-state: paused;
    opacity: 1 !important;
  }
}

@keyframes slide-down {
  from {
    transform: translateY(-100vh);
  }

  to {
    transform: translateY(90vh);
  }
}</style>