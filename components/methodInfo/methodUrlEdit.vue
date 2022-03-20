<template>
  <div class="field">
    <label>url:</label>
    <input type="text" :value="method.url" :id="`url-edit-${method._id}`" />
  </div>
</template>

<script>
export default {
  props: ['method'],
}
</script>
