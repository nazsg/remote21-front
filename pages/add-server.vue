<template>
  <add-new>
    <div class="addServer">
      <template v-if="errors.length > 0">
        <ul class="formErrors">
          Required
          <li v-for="(err, i) in errors" :key="i">{{ err }}</li>
        </ul>
      </template>
      <h2 slot="header">Add server for {{ customer }}</h2>
      <ul>
        <li class="item">
          <label>Server Name:</label>
          <input v-model="name" type="text" />
        </li>
        <li class="item">
          <label>Server IP:</label>
          <div class="ips">
            <input v-model="ip" type="text" />
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
        <div @click="validate">
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
      ip: '',
      username: '',
      password: '',
      errors: [],
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
      this.errors = []
    },
    validate() {
      const _ = this
      _.errors = []
      if (_.username === '') _.errors.push('username is required')
      if (_.password === '') _.errors.push('password is required')
      if (_.ip !== '') {
        const match = _.ip.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/)
        const res =
          match != null &&
          match[1] <= 255 &&
          match[2] <= 255 &&
          match[3] <= 255 &&
          match[4] <= 255
        if (!res) _.errors.push('invalid ip')
      } else {
        _.errors.push('ip is required')
      }
      if (_.errors.length > 0) return
      _.insertServer()
    },
    insertServer(serverId, viewMode, editMode) {
      const token = localStorage.getItem('token')
      const ip = this.ip
      const id = JSON.parse(localStorage.getItem('customer')).id
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
