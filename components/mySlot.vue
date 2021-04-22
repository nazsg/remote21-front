<template>
  <div class="slot">
    <h2>from the slot</h2>
    <slot name="title" />
    <slot name="text" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.slot {
  color: red;
  h3 {
    color: blue;
  }
  p {
    color: purple;
  }

  .view input {
    color: red;
  }
  .edit input {
    color: #710080;
  }
}
.show {
  color: rgb(24, 163, 87);
  display: block;
}
.hide {
  display: none;
  color: green;
}
.show {
  font-size: 30px;
}
// .edit {
//   display: none;
// }
</style>
