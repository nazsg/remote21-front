<template>
  <add-new>
    <h2 slot="header">Edit screenshot for {{ customer_name }}</h2>
    <form action="">
      <div class="field">
        <label for="">comment</label>
        <input type="text" v-model="comment" />
      </div>
      <iframe src="" frameborder="1" ref="imageBox" name="imageBox"></iframe>
    </form>
    <div class="old">
      <p>current screenshot to be replaced</p>
      <img :src="`${host}/${path.replace('./public', '')}${screenshot}`" />
      <!-- <img
        :src="`http://localhost:3121${path.replace(
          './public',
          ''
        )}${screenshot}`"
      /> -->
    </div>
    <div class="actions" slot="default">
      <div @click="$router.back()">
        <Button>
          <span class="text textLeft orange">Back</span>
          <span class="icon iconRight orange"><LeftArrow /></span>
        </Button>
      </div>
      <div @click="update">
        <Button>
          <span class="text textLeft orange">Update</span>
          <span class="icon iconRight orange"><Send /></span>
        </Button>
      </div>
    </div>
  </add-new>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      customer_name: '',
      customer_id: '',
      comment: '',
      screenshot: '',
      path: '',
      host: this.$store.state.host,
    }
  },
  filters: {
    img(n) {
      return n.replace('./public', '')
      // return n.replace('<img src="', '').replace('" alt="">', '')
    },
  },
  methods: {
    setId() {
      this.id = JSON.parse(localStorage.getItem('serverSetupId')).id
      this.comment = JSON.parse(localStorage.getItem('serverSetupId')).comment
      this.screenshot = JSON.parse(
        localStorage.getItem('serverSetupId')
      ).screenshot
      this.path = JSON.parse(localStorage.getItem('serverSetupId')).path
    },
    setCustomer() {
      this.customer_name = JSON.parse(localStorage.getItem('customer')).name
      this.customer_id = JSON.parse(localStorage.getItem('customer')).id
      // this.comment =
    },
    getCustomers() {
      this.$axios.get('/api/customers').then((data) => {
        this.$store.commit('setCustomers', data.data)
      })
    },
    update() {
      let token = localStorage.getItem('token'),
        screenshot = window.frames['imageBox'].document.body.innerHTML
          .replace('<img src="', '')
          .replace('" alt="">', ''),
        serverSetup = {
          id: this.id,
          comment: this.comment,
          screenshot,
          old: this.screenshot,
          name: this.customer_name,
        }

      this.$axios
        .put(
          this.host +
            '/api/customers/' +
            this.customer_id +
            '/updateOneServerSetup',
          { serverSetup }
          // { headers: { token } }
          // { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        .then((res) => {
          console.log(res)
          if (res.statusText === 'OK') {
            // update DOM
            this.getCustomers()
            setTimeout(() => {
              this.$router.push(`/customer/${this.customer_id}`)
            }, 400)
          }
        })
      // .catch((er) => console.log(er))
    },
  },
  mounted() {
    this.setId()
    this.setCustomer()
    setTimeout(() => {
      window.frames['imageBox'].document.designMode = 'On'
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
form {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  iframe {
    @include border1;
    margin-top: 5px;
  }
}
.old {
  width: 600px;
  margin: 10px auto;
  @include border1;
  padding: 10px;
  img {
    max-width: 590px;
    // max-height: 100px;
    width: auto;
    height: auto;
    margin: 0 auto;
    @include border1;
  }
  p {
    margin-bottom: 10px;
    font: Italic 12px Arial;
  }
}
</style>
