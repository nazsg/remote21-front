<template>
  <one-item class="boxContainer device">
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
      <div></div>
    </div>

    <div v-if="view" class="fieldsBox">
      <div class="fields">
        <label for="">make</label>
        <input type="text" v-model="make" readonly />
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
    </div>
    <div v-else class="fieldsBox">
      <div class="fields new">
        <label for="">make</label>
        <input type="text" v-model="makeNew" />
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
  props: ['device'],
  data() {
    return {
      view: true,
      make: this.device.make,
      makeNew: this.device.make,
      username: this.device.username,
      usernameNew: this.device.username,
      password: this.device.password,
      passwordNew: this.device.password,
    }
  },
  methods: {
    abort() {
      this.view = true
      this.revertChanges()
    },
    revertChanges() {
      this.makeNew = this.make
      this.usernameNew = this.username
      this.passwordNew = this.password
    },
    update() {
      let token = localStorage.getItem('token'),
        devicePassword = [
          {
            _id: this.device._id,
            make: this.makeNew,
            username: this.usernameNew,
            password: this.passwordNew,
          },
        ]
      this.$axios
        .put(
          '/api/customers/' + this.customer._id + '/updateOneDevicePassword',
          { devicePassword },
          { headers: { token } }
        )
        .then((res) => {
          if (res.statusText === 'OK') {
            // update DOM
            this.make = this.makeNew
            this.username = this.usernameNew
            this.password = this.passwordNew
            this.view = true
          }
        })
    },
    copy(ele) {
      let el = this.$refs[ele]
      console.log(el.value)
      el.select() // console.log(el.value)
      document.execCommand('copy')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
.boxContainer.device {
  height: 150px;
}
</style>
