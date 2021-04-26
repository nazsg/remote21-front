<template>
  <div class="oneSection">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
.oneSection {
  background-color: #f8efef;
  margin: 5px;
  padding: 5px;
}
.devicePasswordNew {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
