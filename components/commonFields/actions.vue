<template>
  <div class="actions2">
    <div @click="abort">
      <Button>
        <span class="icon iconLeft orange"><CloseCircle /></span>
        <span class="text textRight orange">Abort</span>
      </Button>
    </div>
    <div @click="update">
      <Button>
        <span class="icon iconLeft orange"><Send /></span>
        <span class="text textRight orange">Update</span>
      </Button>
    </div>
  </div>
</template>

<script>
import globalMixins from '~/assets/global'
export default {
  mixins: [globalMixins],
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
</style>
