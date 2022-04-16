<template>
  <one-section>
    <h3>Server List</h3>

    <div v-if="$store.state.serverErrors.length > 0" class="storeErrors">
      <span>Attention : </span>
      <ul>
        <li v-for="(err, i) in $store.state.serverErrors" :key="i">
          {{ err }}
        </li>
      </ul>
    </div>
    <div class="devicePasswordNew boxes">
      <new-server
        v-for="server in customer[0].server"
        :key="server._id"
        :server="server"
      >
      </new-server>
    </div>
    <nuxt-link to="/add-server"><PlusIcon /></nuxt-link>
  </one-section>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    customer() {
      // console.log('cust')
      return this.$store.state.customers.filter(
        (c) => c._id === this.$route.params.customer
      )
    },
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
