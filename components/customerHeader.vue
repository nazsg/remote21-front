<template>
  <one-section>
    <div class="nameHeader" :class="{ editingName: !view }">
      <input v-if="view" v-model="cust_name" readonly type="text" />
      <input v-else v-model="nameNew" type="text" />
      <div class="actions">
        <div v-if="view">
          <PencilIcon @click="view = !view" />
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
              <span class="icon iconLeft orange"><SendIcon /></span>
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
      cust_name: '',
      nameNew: '',
      solution: '',
    }
  },
  created() {
    this.cust_name = this.customer.name
    this.nameNew = this.customer.name
    this.solution = this.customer.solution
  },
  methods: {
    abort(deviceId, viewMode, editMode) {
      this.nameNew = this.cust_name
      this.view = true
    },
    update(name, viewMode, editMode) {
      if (process.env.LOG) console.log(this.nameNew)
      // const view = document.querySelector(`#name-view`)
      // const edit = document.querySelector(`#name-edit`)
      const token = localStorage.getItem('token')
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
