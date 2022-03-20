<template>
  <div class="field">
    <label>password:</label>
    <input
      type="text"
      :value="device.password"
      :id="`password-edit-${device._id}`"
    />
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  props: ['device'],
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
</style>
