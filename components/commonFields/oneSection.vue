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
.nameHeader {
  display: flex;
  // background-color: #d4d1d1;
  justify-content: space-between;
  width: 600px;
  @include border1($col: #f8efef);
  margin: 0 auto;
}
input {
  background-color: #fff;
  width: 350px;
  &:read-only {
    font-size: 2rem;
    background-color: #f8efef;
    border: none;
  }
}
.actions2 {
  display: flex;
}
</style>
