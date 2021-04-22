<template>
  <div class="wrapper other">
    <div class="content">
      <my-header />
      <nuxt />
    </div>
    <my-footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../../sass-mixins/_styles';
@import '~/assets/box';
html {
  overflow: auto;
  @include layout;
}
header,
footer {
  background-color: rgb(168, 165, 165);
}
</style>
