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
        <label for="">name</label>
        <input type="text" v-model="name" readonly />
        <ContentCopy class="spacer" />
      </div>
      <div class="fields">
        <label for="">ip</label>
        <input type="text" v-model="ip" readonly ref="ip" />
        <ContentCopy @click="copy('ip')" />
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
    </div>
    <div v-else class="fieldsBox">
      <div class="fields new">
        <label for="">name</label>
        <input type="text" v-model="nameNew" />
      </div>
      <div class="fields new">
        <label for="">ip</label>
        <input type="text" v-model="ip" />
      </div>
      <div class="fields new">
        <label for="">username</label>
        <input type="text" v-model="usernameNew" />
      </div>
      <div class="fields new">
        <label for="">password</label>
        <input type="text" v-model="passwordNew" />
      </div>
    </div>
  </one-item>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  props: ['server'],
  data() {
    return {
      view: true,
      username: this.server.username,
      usernameNew: this.server.username,
      password: this.server.password,
      passwordNew: this.server.password,
      name: this.server.name,
      nameNew: this.server.name,
      ip: this.server.ip,
      ipNew: this.server.ip,
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
      this.nameNew = this.name
      this.ipNew = this.ip
    },
    update() {
      let token = localStorage.getItem('token'),
        server = [
          {
            _id: this.server._id,
            name: this.nameNew,
            username: this.usernameNew,
            password: this.passwordNew,
            ip: this.ipNew,
          },
        ]
      this.$axios
        .put(
          '/api/customers/' + this.customer._id + '/updateOneServer',
          { server },
          { headers: { token } }
        )
        .then((res) => {
          if (res.statusText === 'OK') {
            // update DOM
            this.ip = this.ipNew
            this.username = this.usernameNew
            this.password = this.passwordNew
            this.name = this.nameNew
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
  height: 180px;
}
</style>
