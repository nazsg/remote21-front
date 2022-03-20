<template>
  <div class="field">
    <label>ip:</label>
    <input
      readonly
      type="text"
      :value="server.ip"
      :id="`ip-view-${server._id}`"
    />
    <ContentCopy @click="copy(`ip-view-${server._id}`)" />
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  props: ['server'],
}
</script>
