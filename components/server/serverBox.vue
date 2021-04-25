<template>
  <one-section>
    <h3>Server List</h3>
    <div class="devicePasswordNew boxes">
      <!-- {{ customer }} -->
      <new-server
        v-for="server in customer.server"
        :key="server._id"
        :server="server"
      >
      </new-server>
    </div>
    <nuxt-link to="/add-server"><Plus /></nuxt-link>
  </one-section>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  data() {
    return {}
  },
  computed: {
    // customer() {
    //   if (process.browser) {
    //     return this.$store.state.customers.filter(
    //       (c) => c._id === JSON.parse(localStorage.getItem('cid'))._id
    //     )
    //   }
    // },
  },
  mounted() {
    // console.log(
    //   this.$store.state.customers.filter(
    //     (c) => c._id === this.$route.params.customer
    //   )
    // )
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
.newDevicePasswordBox {
  background-color: #f8efef;
  flex-wrap: wrap;
}
</style>
