<template>
  <div class="addServer">
    <h2>Add New Customer</h2>
    <form>
      <fieldset>
        <legend>Customer</legend>
        <div>
          <label>Name:</label>
          <input v-model="customer.name" type="text" />
        </div>
        <div>
          <label>Solution:</label>
          <input v-model="customer.solution" type="text" list="brand_list" />
          <datalist id="brand_list">
            <option value="ACP"></option>
            <option value="Equitrac"></option>
            <option value="Papercut"></option>
            <option value="Safecom"></option>
          </datalist>
        </div>
      </fieldset>
      <fieldset>
        <legend>Remote method</legend>
        <div>
          <label>Remote Name</label>
          <input v-model="methodInfo.methodName" type="text" />
        </div>
        <div>
          <label>URL</label>
          <input v-model="methodInfo.url" type="text" />
        </div>
        <div>
          <label>username</label>
          <input v-model="methodInfo.username" type="text" />
        </div>
        <div>
          <label>password</label>
          <input v-model="methodInfo.password" type="text" />
        </div>
        <div>
          <label>Notes</label>
          <textarea
            id=""
            v-model="methodInfo.notes"
            name=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </fieldset>
    </form>
    <div class="actions">
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
      <div @click="addCustomer">
        <Button>
          <span class="text textLeft orange">Add server</span>
          <span class="icon iconRight orange"><SendIcon /></span>
        </Button>
      </div>
    </div>
    <!-- <nuxt-link to="/customer">home</nuxt-link> -->
    <!-- </ul> -->
  </div>
</template>

<script>
// import wys from '~/functions/wysiwyg'
export default {
  data() {
    return {
      customer: {
        name: '',
        solution: '',
      },
      methodInfo: {
        methodName: '',
        url: '',
        username: '',
        password: '',
        notes: '',
      },
    }
  },

  mounted() {},
  methods: {
    getCustomers() {
      this.$axios.get('/api/customers').then((data) => {
        this.$store.commit('setCustomers', data.data)
      })
    },
    clear() {
      this.customer = {}
      this.methodInfo = {}
    },
    addCustomer(serverId, viewMode, editMode) {
      const token = localStorage.getItem('token')
      this.$axios
        .post(
          '/api/customers',
          {
            name: this.customer.name,
            solution: this.customer.solution,
            methodInfo: [
              {
                methodName: this.methodInfo.methodName,
                url: this.methodInfo.url,
                username: this.methodInfo.username,
                password: this.methodInfo.password,
                notes: this.methodInfo.notes,
              },
            ],
          },
          { headers: { token } }
        )
        .then((res) => {
          console.log(res)
          if (res.statusText === 'Created') {
            this.getCustomers() // update data
            this.$router.push(`/customer`)
          }
        })
        .catch((err) => console.log(err))
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
  ul,
  fieldset {
    padding: 15px 0;
    div {
      display: flex;
      flex-direction: column;
      input,
      select,
      textarea {
        font-family: Courier;
        padding: 5px;
        outline: none;
        @include border1($col: #bfbfc2);
        &:hover,
        &:focus {
          border-color: #616060;
        }
      }
    }
    // width: 100%;
    list-style: none;
    iframe {
      display: block;
      margin-bottom: 5px;
      outline: none;
      @include border1;
    }
    width: 95%;
    margin: 10px auto;
    @include border1;
    display: flex;
    flex-direction: column;
    @media (min-width: 500px) {
      div {
        margin: 2px 0;
        flex-direction: row;
        justify-content: center;
        label {
          // flex-grow: 1;
          flex-basis: 100px;
          text-align: right;
          padding-right: 5px;
        }
        input,
        select,
        textarea {
          // flex-grow: 3;
          flex-basis: 200px;
        }
      }
      padding: 15px;
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
.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
