<template>
  <div class="field">
    <label>password:</label>
    <input
      readonly
      type="text"
      :value="device.password"
      :id="`password-view-${device._id}`"
    />
    <ContentCopy @click="copy(`password-view-${device._id}`)" />
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  props: ['device'],
}
</script>
