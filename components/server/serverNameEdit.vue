<template>
  <div class="boxMake edit" :class="`content-edit-${server._id}`">
    <input type="text" :value="server.name" :id="`name-edit-${server._id}`" />
  </div>
</template>

<script>
export default {
  props: ['server'],
}
</script>
