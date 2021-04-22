<template>
  <div class="customer itemContainer">
    <!-- {{ $store.getters.getCustomers }} -->
    <customer-header />
    <methodInfoBox />
    <serverBox />
    <server-setup-box />
    <device-password-box />
    <!-- <device-list /> -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.$axios.get('/api/customers').then((data) => {
      this.$store.commit('setCustomers', data.data)
    })
    console.log(this.$route.params.customer)
  },
}
</script>

<style lang="scss">
@import '~/../sass-mixins/_styles';

.customer {
  @include border1;
}
.view-password,
.view-make,
.view-username {
  // display: none;
  background-color: #e7dcdc;
}
.edit-password,
.edit-make,
.edit-username {
  display: none;
  background-color: #fff;
}
.itemContainer {
  padding: 5px;
}
.table {
  box-sizing: border-box;
  width: 95%;
  margin: 0 auto;
}
.tableHeader {
  font-weight: bold;
}
.tableHeader,
.tableContent {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  flex-wrap: wrap;
}
.methodInfo {
  background-color: #e2dddd;
  padding: 5px;
  margin: 5px;
  div {
    padding: 5px;
  }
}
input {
  outline: none;
  @include border1;
  border-color: #e7dcdc;
  font-family: 'Courier New';
  background-color: inherit;
  padding-bottom: 21px;
  // margin-right: 5px;
  padding: 5px;
}
.method,
.solution,
.deviceList,
.serverList,
.devicePassword {
  // width: 300px;
  list-style-type: none;
  display: flex;
  // justify-content: space-between;
  user-select: none;
}
.method,
.servers,
.serverList,
.devicePassword,
.serverSetup,
.deviceList {
  background-color: #f8efef;
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  .topBar {
    display: flex;
    justify-content: space-between;
  }
  dl {
    padding: 5px;
    dd {
      @include border1;
      background-color: #e7dcdc;
      border-color: #e7dcdc;
      text-align: right;
      padding: 10px;
      div {
        display: flex;
        padding: 5px;
        justify-content: space-between;
      }
      margin: 5px;
      span {
        display: flex;
      }
    }
  }
}
.material-design-icon {
  cursor: pointer;
}

.devicePasswordEdit {
  dd {
    @include border1;
  }
  input {
    background-color: #fff;
    &:focus,
    &:active {
      border: 1px solid orange;
    }
  }
}
</style>
