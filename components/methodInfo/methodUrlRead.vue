<template>
  <div class="field">
    <label>url:</label>
    <input
      :id="`url-view-${method._id}`"
      :value="method.url"
      readonly
      type="text"
    />
    <ContentCopy @click="copy(`url-view-${method._id}`)" />
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  props: {
    method: {
      type: [String, Object],
      default: '',
    },
  },
}
</script>
