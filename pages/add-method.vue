<template>
  <add-new>
    <div class="addServer">
      <h2 slot="header">Add remote step for {{ customer }}</h2>
      <ul>
        <li class="item">
          <label>Method Name:</label>
          <input type="text" v-model="name" />
        </li>
        <li class="item">
          <label>URL:</label>
          <input type="text" v-model="url" />
        </li>
        <li class="item">
          <label>Server Username:</label>
          <input type="text" v-model="username" />
        </li>
        <li class="item">
          <label>Server Password:</label>
          <input type="text" v-model="password" />
        </li>
        <label for="item">Notes:</label>
        <textarea name="" id="" cols="30" rows="10" v-model="notes"></textarea>
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
          <div @click="insertStep">
            <Button>
              <span class="text textLeft orange">Add server</span>
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
      name: '',
      url: [],
      username: '',
      password: '',
      notes: '',
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
      this.name = ''
      this.url = ''
      this.username = ''
      this.password = ''
    },
    insertStep(serverId, viewMode, editMode) {
      let token = localStorage.getItem('token'),
        id = JSON.parse(localStorage.getItem('customer')).id,
        methodInfo = [
          {
            methodName: this.name,
            username: this.username,
            password: this.password,
            url: this.url,
            notes: this.notes,
          },
        ]
      this.$axios
        .put(
          '/api/customers/' + id + '/insertOneMethod',
          { methodInfo },
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
h2 {
  text-align: center;
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
