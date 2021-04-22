<template>
  <div class="serverSetup">
    <div class="topBar">
      <h3>Server Setup</h3>
    </div>

    <div class="boxes devicePasswordBox">
      <div
        class="boxContainer"
        v-for="server in customer.serverSetup"
        :key="server._id"
      >
        <div class="boxHeader">
          <div class="boxMake view" :class="`content-view-${server._id}`">
            <input
              type="text"
              readonly
              :value="server.make"
              :ref="`make-view-${server._id}`"
            />
          </div>
          <div class="boxMake edit" :class="`content-edit-${server._id}`">
            <div class="label"></div>
            <input
              type="text"
              :value="server.make"
              :ref="`make-edit-${server._id}`"
            />
          </div>

          <div class="tools">
            <div class="view" :class="`content-view-${server._id}`">
              <Pencil
                @click="
                  editMode(
                    `content-view-${server._id}`,
                    `content-edit-${server._id}`
                  )
                "
              />
            </div>
            <div class="edit" :class="`content-edit-${server._id}`">
              <CloseCircle
                title="Cancel"
                @click="
                  abort(
                    server._id,
                    `content-view-${server._id}`,
                    `content-edit-${server._id}`
                  )
                "
              /><Send
                @click="
                  updateDevicePassword(
                    server._id,
                    `content-view-${server._id}`,
                    `content-edit-${server._id}`
                  )
                "
              />
            </div>
          </div>
        </div>

        <div
          class="boxContent serverSetupContent"
          :class="`content-view-${server._id}`"
        >
          <div class="serverSetupComment">
            {{ server.comment }}
            <img width="200px" :src="`${server.screenshot}` | img" />
            <!-- :src="`${server.path}${server.screenshot}` | img" -->
          </div>
        </div>
      </div>
    </div>
    <nuxt-link to="/add-server-setup"><Plus /></nuxt-link>
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  filters: {
    img(n) {
      return n.replace('./public', '')
      // return n.replace('<img src="', '').replace('" alt="">', '')
    },
  },
  methods: {
    abort(deviceId, viewMode, editMode) {
      let makeView = this.$refs[`make-view-${deviceId}`][0].value
      this.$refs[`make-edit-${deviceId}`][0].value = makeView // reverse user input

      let usernameView = this.$refs[`username-view-${deviceId}`][0].value
      this.$refs[`username-edit-${deviceId}`][0].value = usernameView // reverse input

      let passwordView = this.$refs[`password-view-${deviceId}`][0].value
      this.$refs[`password-edit-${deviceId}`][0].value = passwordView // reverse input

      this.viewMode(viewMode, editMode)
    },
    updateDevicePassword(deviceId, viewMode, editMode) {
      let makeView = this.$refs[`make-view-${deviceId}`][0],
        makeEdit = this.$refs[`make-edit-${deviceId}`][0],
        usernameView = this.$refs[`username-view-${deviceId}`][0],
        usernameEdit = this.$refs[`username-edit-${deviceId}`][0],
        passwordView = this.$refs[`password-view-${deviceId}`][0],
        passwordEdit = this.$refs[`password-edit-${deviceId}`][0],
        token = localStorage.getItem('token'),
        devicePassword = [
          {
            _id: deviceId,
            make: makeEdit.value,
            username: usernameEdit.value,
            password: passwordEdit.value,
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
            makeView.value = makeEdit.value
            usernameView.value = usernameEdit.value
            passwordView.value = passwordEdit.value
            this.viewMode(viewMode, editMode)
          }
        })
    },
  },
}
</script>
<style lang="scss">
@import '~/../sass-mixins/_styles';

img {
  // width: 100%;
  display: block;
}
</style>
