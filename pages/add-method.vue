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
      </ul>
      <div class="actions" slot="default">
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
        <div @click="insertStep">
          <Button>
            <span class="text textLeft orange">Add server</span>
            <span class="icon iconRight orange"><Send /></span>
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
      url: [],
      username: '',
      password: '',
      notes: '',
      id: '',
    }
  },
  mounted() {
    this.customer = JSON.parse(localStorage.getItem('customer')).name
    this.id = JSON.parse(localStorage.getItem('customer')).id
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
          '/api/customers/' + this.id + '/insertOneMethod',
          { methodInfo },
          { headers: { token } }
        )
        .then((res) => {
          if (res.statusText === 'OK') {
            // console.log('insert ok', ip, id)
            this.getCustomers() // update data
            this.$router.push(`/customer/${this.id}`)
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
</style>
