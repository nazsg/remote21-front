<template>
  <header>
    <nuxt-link to="/customer">
      <myHome :size="size" />
    </nuxt-link>
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
}
</script>

<style></style>
