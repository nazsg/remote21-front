<template>
  <div class="boxMake view" :class="`content-view-${server._id}`">
    <input
      type="text"
      readonly
      :value="server.name"
      :id="`name-view-${server._id}`"
    />
  </div>
</template>

<script>
export default {
  props: ['server'],
}
</script>
