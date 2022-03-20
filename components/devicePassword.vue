<template>
  <div class="devicePassword">
    <div class="topBar">
      <h3>Device Password</h3>
    </div>

    <div class="boxes devicePasswordBox">
      <div
        class="boxContainer"
        v-for="device in customer.devicePassword"
        :key="device._id"
      >
        <div class="boxHeader">
          <make-read :device="device" />
          <make-edit :device="device" />
          <action-tools
            :device="device"
            @editMode="editMode(arguments[0], arguments[1])"
            @abort="abort(arguments[0], arguments[1], arguments[2])"
            @update="update(arguments[0], arguments[1], arguments[2])"
          />
        </div>

        <div
          class="boxContent devicePasswordContent"
          :class="`content-view-${device._id}`"
        >
          <username-read :device="device" />
          <password-read :device="device" />
        </div>

        <div
          class="boxContent devicePasswordContent edit"
          :class="`content-edit-${device._id}`"
        >
          <username-edit :device="device" />
          <password-edit :device="device" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  methods: {
    abort(deviceId, viewMode, editMode) {
      let makeView = document.querySelector(`#make-view-${deviceId}`).value
      document.querySelector(`#make-edit-${deviceId}`).value = makeView // reverse user input
      let usernameView = document.querySelector(`#username-view-${deviceId}`)
        .value
      document.querySelector(`#username-edit-${deviceId}`).value = usernameView // reverse input
      let passwordView = document.querySelector(`#password-view-${deviceId}`)
        .value
      document.querySelector(`#password-edit-${deviceId}`).value = passwordView // reverse input
      this.viewMode(viewMode, editMode)
    },
    update(deviceId, viewMode, editMode) {
      let makeView = document.querySelector(`#make-view-${deviceId}`),
        makeEdit = document.querySelector(`#make-edit-${deviceId}`),
        usernameView = document.querySelector(`#username-view-${deviceId}`),
        usernameEdit = document.querySelector(`#username-edit-${deviceId}`),
        passwordView = document.querySelector(`#password-view-${deviceId}`),
        passwordEdit = document.querySelector(`#password-edit-${deviceId}`),
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
</style>
