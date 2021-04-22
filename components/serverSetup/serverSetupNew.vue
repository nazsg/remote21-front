<template>
  <one-item class="boxContainer">
    <div class="boxHeader">
      <div class="actions">
        <div v-if="view">
          <Pencil
            @click="
              edit(
                serverSetup._id,
                serverSetup.comment,
                serverSetup.screenshot,
                serverSetup.path
              )
            "
          />
        </div>
        <div v-else class="actions2">
          <div @click="abort">
            <Button>
              <span class="icon iconLeft orange"><CloseCircle /></span>
              <span class="text textRight orange">Abort</span>
            </Button>
          </div>
          <div @click="update">
            <Button>
              <span class="icon iconLeft orange"><Send /></span>
              <span class="text textRight orange">Update</span>
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="view" class="fieldsBox">
      <div class="fields">
        <label for="">comment</label>
        <input type="text" v-model="comment" readonly />
      </div>
      <div class="fields">
        <img :src="`http://localhost:3121/${path2}${serverSetup.screenshot}`" />
        <!-- {{ serverSetup }} -->
      </div>
    </div>
    <div v-else class="fieldsBox">
      <div class="fields new">
        <label for="">comment</label>
        <input type="text" v-model="commentNew" />
      </div>
      <div class="fields new">
        <!-- <iframe src="" frameborder="1" ref="imageBox" name="imageBox"></iframe> -->
      </div>
    </div>
  </one-item>
</template>

<script>
import myMixins from '~/assets/mixins'
import wys from '~/functions/wysiwyg'
export default {
  mixins: [myMixins],
  props: ['serverSetup'],
  data() {
    return {
      view: true,
      comment: this.serverSetup.comment,
      commentNew: this.serverSetup.comment,
      path: this.serverSetup.path,
      pathNew: this.serverSetup.path,
      screenshot: this.serverSetup.screenshot,
      screenshotNew: this.serverSetup.screenshot,
    }
  },
  filters: {
    img(n) {
      return n.replace('./public', '')
      // return n.replace('<img src="', '').replace('" alt="">', '')
    },
  },
  computed: {
    path2() {
      return this.serverSetup.path.replace('./public/', '')
    },
  },
  mounted() {
    setTimeout(() => {
      // wys.editableFrame('imageBox')
    }, 900)
  },
  methods: {
    edit(id, comment, screenshot, path) {
      // console.log(id)
      let item = { id, comment, screenshot, path }
      localStorage.setItem('serverSetupId', JSON.stringify(item))
      this.$router.push('/edit-server-setup')
    },
    abort() {
      this.view = true
      this.revertChanges()
    },
    revertChanges() {
      // this.commentNew = this.comment
      // this.pathNew = this.password
      // this.notesNew = this.notes
      // this.urlNew = this.url
      // this.methodNameNew = this.methodName
    },
    // update() {
    //   let token = localStorage.getItem('token'),
    //     screenshot = '',
    //     methodInfo = [
    //       {
    //         _id: this.method._id,
    //         comment: this.commentNew,
    //         screenshot: this.passwordNew,
    //       },
    //     ]
    //   this.$axios
    //     .put(
    //       '/api/customers/' + this.customer._id + '/updateOneServerSetup',
    //       { methodInfo },
    //       { headers: { token } }
    //     )
    //     .then((res) => {
    //       if (res.statusText === 'OK') {
    //         // update DOM
    //         this.url = this.urlNew
    //         this.username = this.usernameNew
    //         this.password = this.passwordNew
    //         this.notes = this.notesNew
    //         this.methodName = this.methodNameNew
    //         this.view = true
    //       }
    //     })
    // },
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
img {
  max-width: 200px;
  max-height: 100px;
  width: auto;
  height: auto;
}
.boxContainer {
  height: auto;
}
</style>
