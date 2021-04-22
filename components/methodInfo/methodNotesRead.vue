<template>
  <div class="field notes">
    <label>notes:</label>
    <textarea
      readonly
      type="text"
      :value="method.notes"
      :id="`notes-view-${method._id}`"
    />
  </div>
</template>

<script>
export default {
  props: ['method'],
}
</script>
