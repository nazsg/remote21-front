<template>
  <one-section>
    <div class="newDevicePasswordBox">
      <h3>Contact</h3>
      <div class="devicePasswordNew">
        <!-- {{ customer[0].contact }} -->
        <one-contact
          v-for="contact in customer[0].contact"
          :key="contact._id"
          :contact="contact"
        >
        </one-contact>
      </div>
      <nuxt-link to="/add-contact"><Plus /></nuxt-link>
    </div>
  </one-section>
</template>

<script>
export default {
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
