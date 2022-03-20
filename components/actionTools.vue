<template>
  <div class="tools">
    <div class="view" :class="`content-view-${device._id}`">
      <Pencil
        @click="
          editMode(`content-view-${device._id}`, `content-edit-${device._id}`)
        "
      />
    </div>
    <div class="edit" :class="`content-edit-${device._id}`">
      <CloseCircle
        title="Cancel"
        @click="
          abort(
            device._id,
            `content-view-${device._id}`,
            `content-edit-${device._id}`
          )
        "
      /><SendIcon
        @click="
          update(
            device._id,
            `content-view-${device._id}`,
            `content-edit-${device._id}`
          )
        "
      />
    </div>
  </div>
</template>

<script>
/**
 * used in devicePassword and methodInfo
 */
import myMixins from '~/assets/mixins'
export default {
  props: ['device'],
  mixins: [myMixins],
}
</script>
