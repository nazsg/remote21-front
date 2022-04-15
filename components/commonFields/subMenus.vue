<template>
  <div>
    <a href="#" class="toggle" @click.prevent="menu"><Menu :size="size" /></a>

    <nav class="menu" :class="{ show }">
      <ul>
        <li @click.prevent="close">
          <nuxt-link to="/add-contact">Add Contact</nuxt-link>
        </li>
        <li @click.prevent="close">
          <nuxt-link to="/add-method">Add Method</nuxt-link>
        </li>
        <li @click.prevent="close">
          <nuxt-link to="/add-server">Add Server</nuxt-link>
        </li>
        <li @click.prevent="close">
          <nuxt-link to="/add-server-setup">Add Server Setup</nuxt-link>
        </li>
        <li @click.prevent="close">
          <nuxt-link to="/add-device">Add Device</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Menu from 'vue-material-design-icons/Menu.vue'
export default {
  components: { Menu },
  data() {
    return { show: false, hideNav: false, size: 34 }
  },
  methods: {
    menu() {
      this.show = !this.show
    },
    close() {
      this.show = false
      // this.hideNav = true
    },
    onResize(event) {
      // console.log('window has been resized', event)
      this.show = false
    },
  },
  mounted() {
    // Register an event listener when the Vue component is ready
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
ul {
  position: absolute;
  top: 75px;
  right: 0px;
  text-align: right;
  padding: 10px;
  background-color: #f8efef;
  font: 1rem Helvetica;
  list-style-type: none;

  li {
    a {
      display: inline-block;
      margin: 3px 2px;
      padding: 8px 10px;
      text-decoration: none;
      background-color: #f8efef;
      @include border1($col: #cecbcb);
      color: #868686;
      &:hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
}
.nuxt-link-exact-active {
  background-color: #fff;
  color: #000;
  @include border1($col: #969393);
  &:hover {
    background-color: #fff;
  }
}
.toggle {
  z-index: 100;
  top: 70px;
  right: 0;
  position: fixed;
  height: 35px;
  line-height: 35px;
  background-color: #f8efef;
  width: 200px;
  color: inherit;
  transition: right 0.3s ease-in;
  @media (min-width: 900px) {
    right: -400px;
    transition: right 0.3s ease-in;
  }
}
nav {
  position: fixed;
  top: 35px;
  right: -200px;
  transition: right 0.3s ease-out;
  // z-index: -30;
  @media (min-width: 900px) {
    display: flex;
    right: 0;
  }
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  letter-spacing: 2px;
  width: 200px;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: inherit;
    li {
      padding: 1px;
      a {
        display: block;
        text-decoration: none;
        padding: 10px;
        background-color: #f8efef;
        // border-radius: 5px;
        transition: 0.3s;
        &:hover {
          background-color: #f9f9fa;
          transition: 0.1s;
        }
      }
    }
  }
}

nav.menu.show {
  // display: flex;
  // top: 36px;
  right: 0;
  transition: right 0.3s ease-in-out;
}
.hideNav {
  display: none;
}
</style>
