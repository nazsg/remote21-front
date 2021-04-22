<template>
  <one-item class="boxContainer">
    <div class="boxHeader">
      <div class="actions">
        <div v-if="view">
          <Pencil @click="view = !view" />
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
        <label for="">method</label>
        <input type="text" v-model="methodName" readonly />
        <ContentCopy class="spacer" />
      </div>
      <div class="fields">
        <label for="">username</label>
        <input type="text" v-model="username" readonly ref="username" />
        <ContentCopy @click="copy('username')" />
      </div>
      <div class="fields">
        <label for="">password</label>
        <input type="text" v-model="password" readonly ref="password" />
        <ContentCopy @click="copy('password')" />
      </div>
      <div class="fields">
        <label for="">url</label>
        <input type="text" v-model="url" readonly ref="url" />
        <ContentCopy @click="copy('url')" />
      </div>
      <div class="fields">
        <label for="">notes</label>
        <input type="text" v-model="notes" readonly ref="notes" />
        <ContentCopy @click="copy('notes')" />
      </div>
    </div>
    <div v-else class="fieldsBox">
      <div class="fields new">
        <label for="">method</label>
        <input type="text" v-model="methodNameNew" />
      </div>
      <div class="fields new">
        <label for="">username</label>
        <input type="text" v-model="usernameNew" />
      </div>
      <div class="fields new">
        <label for="">password</label>
        <input type="text" v-model="passwordNew" />
      </div>
      <div class="fields new">
        <label for="">url</label>
        <input type="text" v-model="urlNew" />
      </div>
      <div class="fields new">
        <label for="">notes</label>
        <input type="text" v-model="notesNew" />
      </div>
    </div>
  </one-item>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  props: ['method'],
  data() {
    return {
      view: true,
      url: this.method.url,
      urlNew: this.method.url,
      notes: this.method.notes,
      notesNew: this.method.notes,
      username: this.method.username,
      usernameNew: this.method.username,
      password: this.method.password,
      passwordNew: this.method.password,
      methodName: this.method.methodName,
      methodNameNew: this.method.methodName,
    }
  },
  methods: {
    abort() {
      this.view = true
      this.revertChanges()
    },
    revertChanges() {
      this.usernameNew = this.username
      this.passwordNew = this.password
      this.notesNew = this.notes
      this.urlNew = this.url
      this.methodNameNew = this.methodName
    },
    update() {
      let token = localStorage.getItem('token'),
        methodInfo = [
          {
            _id: this.method._id,
            methodName: this.methodNameNew,
            username: this.usernameNew,
            password: this.passwordNew,
            notes: this.notesNew,
            url: this.urlNew,
          },
        ]
      this.$axios
        .put(
          '/api/customers/' + this.customer._id + '/updateMethodInfo',
          { methodInfo },
          { headers: { token } }
        )
        .then((res) => {
          if (res.statusText === 'OK') {
            // update DOM
            this.url = this.urlNew
            this.username = this.usernameNew
            this.password = this.passwordNew
            this.notes = this.notesNew
            this.methodName = this.methodNameNew
            this.view = true
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
.boxContainer {
  height: 200px;
}
</style>
