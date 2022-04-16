<template>
  <add-new>
    <div class="addServer">
      <h2 slot="header">Add server setup for {{ customer }}</h2>
      <p v-if="submitted">submitting...</p>
      <template v-if="errors.length > 0">
        <ul class="formErrors">
          Required
          <li v-for="(err, i) in errors" :key="i">{{ err }}</li>
        </ul>
      </template>
      <ul>
        <li class="item">
          <label>Comment:</label>
          <input v-model="comment" type="text" />
        </li>
        <!-- <input type="text" /> -->
        <!-- <p contenteditable="true" placeholder="tests">test</p> -->
        <li class="item">
          <label>Screenshot</label>
          <iframe
            ref="imageBox"
            src=""
            frameborder="1"
            name="imageBox"
          ></iframe>

          <input type="hidden" :value="customer.id" />
        </li>
        <!-- <li class="item">
          <label for="">File</label>
          <input type="file" id="file" ref="file" @change="onFileSelected" />
        </li> -->
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
      <!-- {{ image }} -->
    </div>
  </add-new>
</template>

<script>
import wys from '~/functions/wysiwyg'
import globalMixins from '~/assets/global'
export default {
  mixins: [globalMixins],
  data() {
    return {
      customer: '',
      comment: '',
      image: '',
      el: '',
      selectedFile: null,
      errors: [],
      submitted: false,
    }
  },
  mounted() {
    // if (process.browser) {
    this.customer = JSON.parse(localStorage.getItem('customer')).name
    //   console.log(this.customer)
    setTimeout(() => {
      wys.editableFrame('imageBox')
    }, 200)
    // console.log('test')
    // }
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
      this.comment = ''
      window.frames.imageBox.document.body.innerHTML = ''
      this.image = ''
      this.errors = []
      // window.frames['imageBox'].document.body.innerHTML = ''
      // console.log(this.$refs['imageBox'])
      // console.log(this.$refs.imageBox.innerHTML)
    },
    validate() {
      this.errors = []
      this.image = window.frames.imageBox.document.body.innerHTML.replace(
        '<br>',
        ''
      )
      if (this.comment.trim() === '') this.errors.push('comment')
      if (this.image.trim() === '') this.errors.push('screenshot')
      if (this.errors.length > 0) return
      this.insertServer()
      this.submitted = true
    },
    insertServer(serverId, viewMode, editMode) {
      console.log(typeof this.comment)
      // if (this.selectedFile !== null || this.comment.trim().length == 0) {
      // const fd = new FormData()
      const token = localStorage.getItem('token')
      const id = JSON.parse(localStorage.getItem('customer')).id
      const screenshot = this.image
        .replace('<img src="', '')
        .replace('" alt="">', '')
      // name = JSON.parse(localStorage.getItem('customer')).name,
      const serverSetup = {
        comment: this.comment,
        screenshot,
        id,
      }
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
        const token = localStorage.getItem('token')
        const id = JSON.parse(localStorage.getItem('customer')).id
        // screenshot = window.frames['imageBox'].document.body.innerHTML
        //   .replace('<img src="', '')
        //   .replace('" alt="">', ''),
        // screenshot,
        // name = JSON.parse(localStorage.getItem('customer')).name,

        // const serverSetup = {
        //   comment: this.comment,
        //   id,
        // }

        // fd.append('image', this.selectedFile, this.selectedFile.name)
        // fd.append('id', id)
        // fd.append('comment', this.comment)

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
iframe {
  display: block;
  margin-bottom: 5px;
  outline: none;
  @include border1;
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
