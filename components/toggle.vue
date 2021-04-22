<template>
  <div>
    <Pencil v-if="view" />
    <Send title="Submit Change" v-else />
  </div>
</template>

<script>
export default {
  props: ['view', 'icon1', 'icon2'],
}
</script>

<style></style>
