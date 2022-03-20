<template>
  <div class="field">
    <label>username:</label>
    <input
      readonly
      type="text"
      :value="device.username"
      :id="`username-view-${device._id}`"
    />
    <ContentCopy @click="copy(`username-view-${device._id}`)" />
  </div>
</template>

<script>
/**
 * used in devicePassword, methodInfo and servers
 */
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  props: ['device'],
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
</style>
