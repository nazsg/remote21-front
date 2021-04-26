<template>
  <one-section>
    <div class="newDevicePasswordBox">
      <h3>Contact</h3>
      <div class="devicePasswordNew">
        <new-device
          v-for="contact in customer[0].contact"
          :key="contact._id"
          :contact="contact"
        >
        </new-device>
      </div>
      <nuxt-link to="/add-device"><Plus /></nuxt-link>
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
      return this.$store.state.customers.filter(
        (c) => c._id === this.$route.params.customer
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
</style>
