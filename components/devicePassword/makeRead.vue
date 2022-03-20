<template>
  <div class="boxMake view" :class="`content-view-${device._id}`">
    <input
      type="text"
      readonly
      :value="device.make"
      :id="`make-view-${device._id}`"
    />
  </div>
</template>

<script>
export default {
  props: ['device'],
  data() {
    return {}
  },
}
</script>

<style lang="scss">
@import '~/../sass-mixins/_styles';
</style>
