<template>
  <one-section>
    <h3>Remote Steps</h3>
    <div v-if="$store.state.methodErrors.length > 0" class="storeErrors">
      <span>Attention : </span>
      <ul>
        <li v-for="(err, i) in $store.state.methodErrors" :key="i">
          {{ err }}
        </li>
      </ul>
    </div>
    <div class="devicePasswordNew boxes">
      <new-method
        v-for="method in customer[0].methodInfo"
        :key="method._id"
        :method="method"
      >
      </new-method>
    </div>
    <nuxt-link to="/add-method"><PlusIcon /></nuxt-link>
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
  // mounted() {
  //   console.log(
  //     this.$store.state.customers.filter(
  //       (c) => c._id === this.$route.params.customer
  //     )
  //   )
  // },
}
</script>
