<template>
  <div class="boxMake edit" :class="`content-edit-${device._id}`">
    <div class="label"></div>
    <input type="text" :value="device.make" :id="`make-edit-${device._id}`" />
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
