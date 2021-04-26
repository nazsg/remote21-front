<template>
  <add-new>
    <div class="addServer">
      <h2 slot="header">Add server setup for {{ customer }}</h2>
      <ul>
        <li class="item">
          <label>Comment:</label>
          <input type="text" v-model="comment" />
        </li>
        <!-- <input type="text" /> -->
        <!-- <p contenteditable="true" placeholder="tests">test</p> -->
        <li class="item">
          <label>Screenshot</label>
          <iframe
            src=""
            frameborder="1"
            ref="imageBox"
            name="imageBox"
          ></iframe>

          <input type="hidden" :value="customer.id" />
        </li>
        <!-- <li class="item">
          <label for="">File</label>
          <input type="file" id="file" ref="file" @change="onFileSelected" />
        </li> -->
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
              <span class="text textLeft orange">Add server</span>
              <span class="icon iconRight orange"><Send /></span>
            </Button>
          </div>
        </div>
      </ul>
      {{ err }}
    </div>
  </add-new>
</template>

<script>
import wys from '~/functions/wysiwyg'
export default {
  data() {
    return {
      customer: '',
      comment: '',
      image: '',
      el: '',
      selectedFile: null,
      err: '',
    }
  },
  mounted() {
    if (process.browser) {
      setTimeout(() => {
        this.customer = JSON.parse(localStorage.getItem('customer')).name
        console.log(this.customer)
        wys.editableFrame('imageBox')
      }, 200)
      // console.log('test')
    }
  },
  methods: {
    onFileSelected() {
      this.selectedFile = this.$refs.file.files[0]
      // this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
    },
    getCustomers() {
      this.$axios.get('/api/customers').then((data) => {
        this.$store.commit('setCustomers', data.data)
      })
    },
    clear() {
      this.name = ''
      this.image = ''
      // window.frames['imageBox'].document.body.innerHTML = ''
      // console.log(this.$refs['imageBox'])
      // console.log(this.$refs.imageBox.innerHTML)
    },
    insertServer(serverId, viewMode, editMode) {
      console.log(typeof this.comment)
      // if (this.selectedFile !== null || this.comment.trim().length == 0) {
      const fd = new FormData()
      let token = localStorage.getItem('token'),
        id = JSON.parse(localStorage.getItem('customer')).id,
        screenshot = window.frames['imageBox'].document.body.innerHTML
          .replace('<img src="', '')
          .replace('" alt="">', ''),
        // name = JSON.parse(localStorage.getItem('customer')).name,
        serverSetup = {
          comment: this.comment,
          screenshot,
          id,
        }
      // console.log(serverSetup)
      // return false
      if (screenshot !== '') {
        // console.log(screenshot)
        // '/api/customers/' + id + '/insertScreenshotOnly',
        // { serverSetup },
        this.$axios
          .put('/api/customers/' + id + '/insertOneServerSetup', serverSetup, {
            headers: { token },
          })
          .then((res) => {
            console.log(res)
            if (res.statusText === 'OK') {
              console.log('insert ok', id)
              this.getCustomers() // update data
              setTimeout(() => {
                this.$router.push(`/customer/${id}`)
              }, 400)
            }
          })
      } else {
        this.err = 'pls complete form'
      }
    },
    insertServer2(serverId, viewMode, editMode) {
      console.log(typeof this.comment)
      if (this.selectedFile !== null) {
        // if (this.selectedFile !== null || this.comment.trim().length == 0) {
        const fd = new FormData()
        let token = localStorage.getItem('token'),
          id = JSON.parse(localStorage.getItem('customer')).id,
          // screenshot = window.frames['imageBox'].document.body.innerHTML
          //   .replace('<img src="', '')
          //   .replace('" alt="">', ''),
          // screenshot,
          // name = JSON.parse(localStorage.getItem('customer')).name,
          serverSetup = {
            comment: this.comment,
            id,
          }
        fd.append('image', this.selectedFile, this.selectedFile.name)
        fd.append('id', id)
        fd.append('comment', this.comment)

        // console.log(screenshot)
        // '/api/customers/' + id + '/insertScreenshotOnly',
        // { serverSetup },
        this.$axios
          .put('/api/customers/' + id + '/insertOneServerSetup2', fd, {
            headers: { token },
          })
          .then((res) => {
            console.log(res)
            if (res.statusText === 'Created') {
              console.log('insert ok', id)
              this.getCustomers() // update data
              setTimeout(() => {
                this.$router.push(`/customer/${id}`)
              }, 400)
            }
          })
      } else {
        this.err = 'pls complete form'
      }
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
    list-style: none;
    iframe {
      display: block;
      margin-bottom: 5px;
      outline: none;
      @include border1;
    }
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
