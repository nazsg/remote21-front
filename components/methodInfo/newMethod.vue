<template>
  <one-item class="boxContainer newMethod">
    <div class="boxHeader">
      <div class="actions">
        <div v-if="view">
          <PencilIcon @click="view = !view" />
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
              <span class="icon iconLeft orange"><SendIcon /></span>
              <span class="text textRight orange">Update</span>
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="view" class="fieldsBox">
      <div class="fields">
        <label for="">method</label>
        <input v-model="methodName" type="text" readonly />
        <ContentCopy class="spacer" />
      </div>
      <div class="fields">
        <label for="">username</label>
        <input ref="username" v-model="username" type="text" readonly />
        <ContentCopy @click="copy('username')" />
      </div>
      <div class="fields">
        <label for="">password</label>
        <input ref="password" v-model="password" type="text" readonly />
        <ContentCopy @click="copy('password')" />
      </div>
      <div class="fields">
        <label for="">url</label>
        <input ref="url" v-model="url" type="text" readonly />
        <ContentCopy @click="copy('url')" />
      </div>
      <div class="fields text">
        <label for="">notes</label>
        <!-- <input type="text" v-model="notes" readonly ref="notes" /> -->
        <textarea
          id=""
          v-model="notes"
          name=""
          cols="15"
          rows="3"
          readonly
        ></textarea>
        <!-- <ContentCopy @click="copy('notes')" /> -->
      </div>
    </div>
    <div v-else class="fieldsBox">
      <div class="fields new">
        <label for="">method</label>
        <input v-model="methodNameNew" type="text" />
      </div>
      <div class="fields new">
        <label for="">username</label>
        <input v-model="usernameNew" type="text" />
      </div>
      <div class="fields new">
        <label for="">password</label>
        <input v-model="passwordNew" type="text" />
      </div>
      <div class="fields new">
        <label for="">url</label>
        <input v-model="urlNew" type="text" />
      </div>
      <div class="fields new text">
        <label for="">notes</label>
        <!-- <input type="text" v-model="notesNew" /> -->
        <textarea
          id=""
          v-model="notesNew"
          name=""
          cols="15"
          rows="3"
        ></textarea>
      </div>
    </div>
  </one-item>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  props: {
    method: {
      type: [String, Object],
      default: '',
    },
  },
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
      const token = localStorage.getItem('token')
      const methodInfo = [
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
.boxContainer.newMethod {
  height: auto;
  box-sizing: border-box;
}
</style>
