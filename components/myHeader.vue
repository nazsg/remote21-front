<template>
  <header>
    <div class="banner">
      <span v-if="$store.state.user !== ''"
        >logged in as <i>{{ $store.state.user }}</i></span
      >
    </div>
    <nuxt-link to="/">
      <myHome :size="size" />
    </nuxt-link>
    <i @click="logout" id="logout" v-if="$store.state.user !== ''">Logout</i>
  </header>
</template>

<script>
import myHome from 'vue-material-design-icons/Home.vue'
export default {
  components: { myHome },
  data() {
    return {
      size: 40,
    }
  },
  methods: {
    logout() {
      this.$router.push('/')
      this.$store.commit('setUser', '')
    },
  },
}
</script>

<style lang="scss" scoped></style>
