<template>
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
    <nuxt-link to="/add-device"><Plus /></nuxt-link>
  </div>
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
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
.newDevicePasswordBox {
  background-color: #f8efef;
  padding: 5px;
  margin: 5px;
}
.devicePasswordNew {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
