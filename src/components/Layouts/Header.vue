<template>
  <header>
    <nav class="menu-burger">
      <div class="menu-icon" @click="toggleMenu">
        <span :class="{ active: isMenuOpen }"></span>
        <span :class="{ active: isMenuOpen }"></span>
        <span :class="{ active: isMenuOpen }"></span>
      </div>
      <ul class="menu-items" :class="{ active: isMenuOpen }">
        <li>
          <a href="#home" @click.prevent="scrollTo('#home')"
            >Home<span></span
          ></a>
        </li>
        <li>
          <a href="#aboutme" @click.prevent="scrollTo('#aboutme')"
            >About Me<span></span
          ></a>
        </li>
        <li>
          <a href="#projects" @click.prevent="scrollTo('#projects')"
            >My Projects<span></span
          ></a>
        </li>
        <li>
          <a href="#contact" @click.prevent="scrollTo('#contact')"
            >Reach me<span></span
          ></a>
        </li>
      </ul>
    </nav>
    <div class="burger-circle" :class="{ show: isMenuOpen }"></div>
  </header>
</template>

<script>
export default {
  props: {
    menuIsOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      document.querySelector(".a-button").style.zIndex = "1";
      this.isMenuOpen = !this.isMenuOpen;
      this.$emit("menu-is-open", this.isMenuOpen);
    },
    scrollTo(id) {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    },
  },
  watch: {
    menuIsOpen(newValue) {
      this.isMenuOpen = newValue;
      if (!newValue)
        setTimeout(() => {
          document.querySelector(".a-button").style.zIndex = "3";
        }, 300);
    },
  },
};
</script>

<style lang="scss">
header {
  position: fixed;
  top: 30px;
  right: 50px;
  z-index: 3;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.2s;

  .menu-burger {
    display: flex;
    align-items: center;

    .menu-icon {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      width: 30px;
      height: 20px;
      z-index: 3;

      &:hover {
        span {
          width: 70%;

          &:nth-child(3) {
            width: 100%;
          }
        }
      }

      span {
        display: block;
        width: 100%;
        height: 3px;
        background-color: #a8b78b;
        transition: width 0.2s;

        &:nth-child(2) {
          width: 85%;
        }

        &:nth-child(3) {
          width: 70%;
        }

        &.active {
          transition: background-color 0.9s, width 0.2s;
          background-color: #f7f7e8;
        }
      }
    }

    .menu-items {
      padding: 0;
      position: absolute;
      top: 80px;
      right: 125px;
      display: none;
      list-style-type: none;
      z-index: 3;

      &.active {
        display: flex;
        flex-direction: column;
        animation: slide-in 0.6s forwards;
      }

      li {
        padding: 15px 0 2px;
        font-size: 1.4em;
        position: relative;
        transition: all 0.3s ease-in-out;
        z-index: 1;
      }

      a {
        text-decoration: none;
        color: #f7f7e8;
        cursor: pointer;
        transition: color 0.5s ease-in-out;

        &:hover {
          color: #557174;
          span {
            width: 50%;
            background-color: #557174;
          }
        }

        span {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #f7f7e8;
          transition: all 0.3s ease-in-out;
          z-index: -1;
        }
      }
    }
  }

  .burger-circle {
    z-index: 2;
    position: absolute;
    top: -300px;
    right: -300px;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    background-color: #a8b78b;
    opacity: 0;
    transform: translateX(100%) translateY(-100%);
    transition: opacity 0.7s ease-out, transform 0.4s ease-out;

    &.show {
      opacity: 1;
      transform: scale(1);
    }
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
}

@media screen and (max-width: 576px) {
  header .menu-burger .menu-items {
    top: -10px;
    right: 50px;
  }
  header .menu-burger .menu-items li {
    font-size: 1.55em;
    padding: 20px 0 2px;
  }

  header .burger-circle {
    height: 500px;
    width: 500px;
    top: -175px;
    right: -175px;
  }
}
</style>
