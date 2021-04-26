<template>
  <button>
    <slot>
      <span class="text">Submit</span>
    </slot>
  </button>
</template>

<script>
export default {
  // props: ['label'],
}
</script>

<style lang="scss" scoped>
@mixin theme {
  color: #fff;
  background-color: #918f8e;
}
button {
  display: block;
  box-sizing: border-box;
  height: 32px;
  margin: 0 1px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  font-family: Tahoma;
  font-size: 1rem;
  .icon,
  .text {
    @include theme;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    width: 32px;
    height: 32px;
    // margin: 0 1px 0 0;
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    height: 32px;
    padding: 0 10px;
    // margin: 0 1px 0 0;
  }
  .iconLeft {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .iconRight {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .textLeft {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .textRight {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  &:focus {
    outline: 0;
  }
  &:hover {
    opacity: 0.8;
  }
}
</style>
