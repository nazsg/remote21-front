<template>
  <div class="boxMake view" :class="`content-view-${method._id}`">
    <input
      type="text"
      readonly
      :value="method.methodName"
      :id="`methodName-view-${method._id}`"
    />
  </div>
</template>

<script>
export default {
  props: ['method'],
}
</script>
