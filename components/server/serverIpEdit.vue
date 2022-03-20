<template>
  <div class="field">
    <label>ip:</label>
    <input type="text" :value="server.ip" :id="`ip-edit-${server._id}`" />
  </div>
</template>

<script>
export default {
  props: ['server'],
}
</script>
