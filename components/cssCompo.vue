<template>
  <div class="fieldsBox">
    <div class="fields new">
      <label for="">method</label>
      <input type="text" value="method name" />
    </div>
    <div class="fields new">
      <label for="">username</label>
      <input type="text" value="username" />
    </div>
    <div class="fields new">
      <label for="">password</label>
      <input type="text" value="password" />
    </div>
    <div class="fields new">
      <label for="">url</label>
      <input type="text" value="domain.uk" />
    </div>
    <div class="fields new text">
      <label for="notes">notes</label>
      <textarea name="" cols="15" rows="3"></textarea>
    </div>
    <div class="fields new text">
      <label for="notes">others</label>
      <input type="text" value="others" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fields: {
      type: [String, Object],
      default: '',
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
</style>
