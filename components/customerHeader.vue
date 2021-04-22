<template>
  <div>
    <div class="nameHeader">
      <div class="name view" :class="`content-view-${customer._id}`">
        <input type="text" readonly :value="customer.name" :id="`name-view`" />
      </div>
      <div class="name edit" :class="`content-edit-${customer._id}`">
        <input type="text" :value="customer.name" :id="`name-edit`" />
      </div>
      <action-tools
        :device="customer"
        @editMode="editMode(arguments[0], arguments[1])"
        @abort="abort(arguments[0], arguments[1], arguments[2])"
        @update="update(arguments[0], arguments[1], arguments[2])"
      />
    </div>
    <div class="solution itemContainer">
      <div>Solution:</div>
      <div>{{ customer.solution }}</div>
    </div>
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  methods: {
    abort(deviceId, viewMode, editMode) {
      let view = document.querySelector(`#name-view`).value
      document.querySelector(`#name-edit`).value = view // reverse user input
      this.viewMode(viewMode, editMode)
    },
    update(name, viewMode, editMode) {
      let view = document.querySelector(`#name-view`),
        edit = document.querySelector(`#name-edit`),
        token = localStorage.getItem('token')
      this.$axios
        .put(
          '/api/customers/' + this.customer._id,
          { name: edit.value },
          { headers: { token } }
        )
        .then((res) => {
          if (res.statusText === 'OK') {
            view.value = edit.value
            this.viewMode(viewMode, editMode)
            this.getCustomers()
            this.$router.push(`/customer`)
          }
        })
    },
  },
}
</script>

<style lang="scss">
@import '~/../sass-mixins/_styles';

.nameHeader {
  display: flex;
  // background-color: #d4d1d1;
}
.name.view {
  input {
    font: 2rem Arial;
    border: 1px solid #fff;
  }
}
.name.edit {
  input {
    font: 2rem Arial;
    border: 1px solid #999;
  }
}
</style>
