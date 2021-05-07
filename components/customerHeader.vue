<template>
  <one-section>
    <div class="nameHeader">
      <input type="text" readonly v-model="name" v-if="view" />
      <input type="text" v-model="nameNew" v-else />
      <div class="actions">
        <div v-if="view">
          <Pencil @click="view = !view" />
        </div>
        <div v-else class="actions2">
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
      </div>
    </div>
    <div class="solution itemContainer">
      <div>Solution:</div>
      <div>{{ customer.solution }}</div>
    </div>
  </one-section>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  data() {
    return {
      view: true,
      name: '',
      nameNew: '',
      solution: '',
    }
  },
  created() {
    this.name = this.customer.name
    this.nameNew = this.customer.name
    this.solution = this.customer.solution
  },
  methods: {
    abort(deviceId, viewMode, editMode) {
      this.nameNew = this.name
      this.view = true
    },
    update(name, viewMode, editMode) {
      if (process.env.LOG) console.log(this.nameNew)
      let view = document.querySelector(`#name-view`),
        edit = document.querySelector(`#name-edit`),
        token = localStorage.getItem('token')
      this.$axios
        .put(
          '/api/customers/' + this.customer._id,
          { name: this.nameNew },
          { headers: { token } }
        )
        .then((res) => {
          if (res.statusText === 'OK') {
            this.name = this.nameNew
            this.getCustomers()
            // this.$router.push(`/customer`)
            this.view = true
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
</style>
