<template>
  <add-new>
    <div class="addServer">
      <h2 slot="header">Add device password {{ customer }}</h2>
      <ul>
        <li class="item">
          <label>Make:</label>
          <input type="text" list="brand_list" v-model="brand" />
          <datalist id="brand_list">
            <option value="HP"></option>
            <option value="Samsung"></option>
            <option value="Kyocera"></option>
            <option value="Xerox"></option>
          </datalist>
          <button @click.prevent="brand = ''">X</button>
        </li>
        <li class="item">
          <label>Username:</label>
          <input type="text" v-model="username" />
        </li>
        <li class="item">
          <label>Password:</label>
          <input type="text" v-model="password" />
        </li>
        <div class="actions" slot="default">
          <div @click="$router.back()">
            <Button>
              <span class="text textLeft orange">Back</span>
              <span class="icon iconRight orange"><LeftArrow /></span>
            </Button>
          </div>
          <div @click="clear">
            <Button>
              <span class="text textLeft orange">Clear</span>
              <span class="icon iconRight orange"><DeleteForever /></span>
            </Button>
          </div>
          <div @click="insertServer">
            <Button>
              <span class="text textLeft orange">Add device</span>
              <span class="icon iconRight orange"><Send /></span>
            </Button>
          </div>
        </div>
      </ul>
    </div>
  </add-new>
</template>

<script>
export default {
  data() {
    return {
      customer: '',
      username: '',
      password: '',
      brand: '',
    }
  },
  mounted() {
    this.customer = JSON.parse(localStorage.getItem('customer')).name
  },
  methods: {
    getCustomers() {
      this.$axios.get('/api/customers').then((data) => {
        this.$store.commit('setCustomers', data.data)
      })
    },
    clear() {
      this.username = ''
      this.password = ''
      this.brand = ''
    },
    insertServer(serverId, viewMode, editMode) {
      let token = localStorage.getItem('token'),
        id = JSON.parse(localStorage.getItem('customer')).id,
        devicePassword = [
          {
            make: this.brand,
            username: this.username,
            password: this.password,
          },
        ]
      this.$axios
        .put(
          '/api/customers/' + id + '/insertOneDevicePassword',
          { devicePassword },
          { headers: { token } }
        )
        .then((res) => {
          if (res.statusText === 'OK') {
            // console.log('insert ok', ip, id)
            this.getCustomers() // update data
            this.$router.push(`/customer/${id}`)
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
* {
  box-sizing: border-box;
  transition: 0.3s;
}

ips {
  display: flex;
}
.addServer {
  height: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  ul {
    // width: 100%;
    width: 95%;
    padding: 15px;
    margin: 40px auto;
    @include border1;
    display: flex;
    flex-direction: column;
    @media (min-width: 500px) {
      width: 490px;
    }

    .item {
      margin: 10px;
      display: flex;
      flex-direction: column;
      // padding: 5px;
      input {
        padding: 5px;
        outline: none;
        &.ip {
          width: 55px;
          margin-right: 1px;
        }
        @include border1($col: #c5c2c2);
        &:focus,
        &:active {
          border-color: #666;
        }
      }
      @media (min-width: 500px) {
        flex-direction: row;
        label {
          text-align: right;
          flex-basis: 125px;
          padding-right: 5px;
        }
      }
    }
  }
}
</style>
