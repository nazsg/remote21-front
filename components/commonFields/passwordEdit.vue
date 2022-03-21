<template>
  <div class="field">
    <label>password:</label>
    <input
      :id="`password-edit-${device._id}`"
      type="text"
      :value="device.password"
    />
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  props: {
    device: {
      type: [String, Object],
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
</style>
