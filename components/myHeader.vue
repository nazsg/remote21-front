<template>
  <header>
    <div class="banner">
      <span v-if="user != ''"
        >logged in as <i>{{ user }}</i></span
      >
    </div>
    <nuxt-link to="/">
      <myHome :size="size" />
    </nuxt-link>
    <i @click="logout" id="logout" v-if="user != ''">Logout</i>
  </header>
</template>

<script>
import myHome from 'vue-material-design-icons/Home.vue'
export default {
  components: { myHome },
  data() {
    return {
      size: 40,
      user: '',
    }
  },
  mounted() {
    if (process.client) this.user = localStorage.getItem('user')
  },
  methods: {
    logout() {
      localStorage.setItem('user', '')
      this.$store.commit('setUser', '')
      this.$router.push('/')
    },
  },
  watch: {
    user(newValue) {
      this.user = newValue
      console.log(newValue)
    },
  },
}
</script>

<style lang="scss" scoped></style>
