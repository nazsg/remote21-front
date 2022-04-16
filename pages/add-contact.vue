<template>
  <add-new>
    <div class="addServer">
      <h2 slot="header">Add Contact for {{ customer }}</h2>
      <ul>
        <li class="item">
          <label>Name:</label>
          <input v-model="contact_name" type="text" />
        </li>
        <li class="item">
          <label>Email:</label>
          <input v-model="email" type="email" />
        </li>
        <li class="item">
          <label>Tel / Mob:</label>
          <input v-model="tel" type="text" />
        </li>
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
            <span class="text textLeft orange">Add contact</span>
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
      contact_name: '',
      email: '',
      tel: '',
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
      this.contact_name = ''
      this.email = ''
      this.tel = ''
      this.errors = ''
    },
    validate() {
      this.errors = []
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (this.contact_name.trim() === '') this.errors.push('name')
      if (this.email.trim() !== '') {
        if (re.test(String(this.email).toLowerCase()) === false) {
          this.errors.push('email needs a valid format')
        }
      }
      if (this.email.trim() === '' && this.tel.trim() === '')
        this.errors.push('email or tel')
      if (this.errors.length > 0) return
      this.insertContact()
    },
    insertContact() {
      const token = localStorage.getItem('token')
      const id = JSON.parse(localStorage.getItem('customer')).id
      const contact = [
        {
          name: this.contact_name,
          tel: this.tel,
          email: this.email,
        },
      ]
      this.$axios
        .put(
          '/api/customers/' + id + '/insertOneContact',
          { contact },
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

.btm {
  @include border1;
}
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
    margin: 10px auto;
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
