<template>
  <div class="boxMake edit" :class="`content-edit-${method._id}`">
    <input
      type="text"
      :value="method.methodName"
      :id="`methodName-edit-${method._id}`"
    />
  </div>
</template>

<script>
export default {
  props: ['method'],
}
</script>
