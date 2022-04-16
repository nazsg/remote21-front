<template>
  <add-new>
    <div class="addServer">
      <h2 slot="header">Add remote step for {{ customer }}</h2>
      <ul>
        <li class="item">
          <label>Method Name:</label>
          <input v-model="name" type="text" />
        </li>
        <li class="item">
          <label>URL:</label>
          <input v-model="url" type="text" />
        </li>
        <li class="item">
          <label>Server Username:</label>
          <input v-model="username" type="text" />
        </li>
        <li class="item">
          <label>Server Password:</label>
          <input v-model="password" type="text" />
        </li>
        <label for="item">Notes:</label>
        <textarea id="" v-model="notes" name="" cols="30" rows="5"></textarea>
      </ul>
      <template v-if="errors.length > 0">
        <ul class="formErrors">
          Required
          <li v-for="(err, i) in errors" :key="i">{{ err }}</li>
        </ul>
      </template>
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
      url: '',
      username: '',
      password: '',
      notes: '',
      id: '',
      errors: [],
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
      this.notes = ''
      this.errors = []
    },
    validate() {
      this.errors = []
      const reg =
        /https?:\/\/w{0,3}\w*?\.(\w*?\.)?\w{2,3}\S*|\.(\w*?\.)?\w*?\.\w{2,3}\S*|(\w*?\.)?\w*?\.\w{2,3}[/?]\S*/
      // reg.test('www.google.com')    # will return true
      if (this.name.trim() === '') this.errors.push('method name')
      if (this.url.trim() !== '') {
        if (this.url.indexOf('http://') !== 0)
          this.url = 'http://' + this.url.trim()
        if (!reg.test(this.url.trim())) this.errors.push('inavlid url')
      } else {
        this.errors.push('url')
      }
      if (this.username.trim() === '') this.errors.push('username')
      if (this.password.trim() === '') this.errors.push('password')
      if (this.errors.length > 0) return
      this.insertStep()
    },
    insertStep(serverId, viewMode, editMode) {
      const token = localStorage.getItem('token')
      const methodInfo = [
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
