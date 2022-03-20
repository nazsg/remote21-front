<template>
  <one-section>
    <div class="newDevicePasswordBox">
      <h3>Device Password</h3>
      <div class="devicePasswordNew">
        <new-device
          v-for="device in customer[0].devicePassword"
          :key="device._id"
          :device="device"
        >
        </new-device>
      </div>
      <nuxt-link to="/add-device"><PlusIcon /></nuxt-link>
    </div>
  </one-section>
</template>

<script>
import oneSection from '../commonFields/oneSection.vue'
export default {
  components: { oneSection },
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
}
</script>
