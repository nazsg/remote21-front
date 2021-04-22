<template>
  <div class="field notes">
    <label>notes:</label>
    <textarea
      cols="5"
      type="text"
      :value="method.notes"
      :id="`notes-edit-${method._id}`"
    />
  </div>
</template>

<script>
export default {
  props: ['method'],
}
</script>
