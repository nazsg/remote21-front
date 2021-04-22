<template>
  <div>
    hello
    {{ $store.state.host }}
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    console.log(this.$store.state.host)
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
</style>
