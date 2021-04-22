<template>
  <div class="field">
    <label>url:</label>
    <input
      readonly
      type="text"
      :value="method.url"
      :id="`url-view-${method._id}`"
    />
    <ContentCopy @click="copy(`url-view-${method._id}`)" />
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  props: ['method'],
}
</script>
