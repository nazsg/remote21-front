<template>
  <div class="deviceList">
    <h3>Device List</h3>
    <dl>
      <dd v-for="(d, i) in customer.deviceList" :key="i">
        <div>
          name: <span>{{ d.name }}</span>
        </div>
        <div>
          IP: <span>{{ d.ip }}</span>
        </div>
        <div>
          comment: <span>{{ d.comment }}</span>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
}
</script>

<style></style>
