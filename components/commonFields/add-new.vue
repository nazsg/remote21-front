<template>
  <div>
    <slot name="header" />
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
.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }
}
h2 {
  text-align: center;
}
</style>
