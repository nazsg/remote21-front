<template>
  <add-new>
    <div class="addServer">
      <h2 slot="header">Add server for {{ customer }}</h2>
      <ul>
        <li class="item">
          <label>Server Name:</label>
          <input v-model="name" type="text" />
        </li>
        <li class="item">
          <label>Server IP:</label>
          <div class="ips">
            <input
              v-model="ip[0]"
              type="number"
              class="ip"
              min="10"
              max="255"
            />
            <input
              v-model="ip[1]"
              type="number"
              class="ip"
              min="10"
              max="255"
            />
            <input
              v-model="ip[2]"
              type="number"
              class="ip"
              min="10"
              max="255"
            />
            <input
              v-model="ip[3]"
              type="number"
              class="ip"
              min="10"
              max="255"
            />
          </div>
        </li>
        <li class="item">
          <label>Server Username:</label>
          <input v-model="username" type="text" />
        </li>
        <li class="item">
          <label>Server Password:</label>
          <input v-model="password" type="text" />
        </li>
      </ul>
      <div slot="default" class="actions">
        <div @click="back">
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
            <span class="text textLeft orange">Add server</span>
            <span class="icon iconRight orange"><SendIcon /></span>
          </Button>
        </div>
      </div>
    </div>
  </add-new>
</template>

<script>
import globalMixins from '~/assets/global'
export default {
  mixins: [globalMixins],
  data() {
    return {
      customer: '',
      name: '',
      ip: [],
      username: '',
      password: '',
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
      this.ip = ''
      this.username = ''
      this.password = ''
    },
    insertServer(serverId, viewMode, editMode) {
      const token = localStorage.getItem('token')
      const ip1 = this.ip[0] === undefined ? '' : this.ip[0]
      const ip2 = this.ip[1] === undefined ? '' : this.ip[1]
      const ip3 = this.ip[2] === undefined ? '' : this.ip[2]
      const ip4 = this.ip[3] === undefined ? '' : this.ip[3]
      const id = JSON.parse(localStorage.getItem('customer')).id
      const ip = `${ip1}.${ip2}.${ip3}.${ip4}`
      const server = [
        {
          name: this.name,
          username: this.username,
          password: this.password,
          ip,
        },
      ]
      this.$axios
        .put(
          '/api/customers/' + id + '/insertOneServer',
          { server },
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
</style>
