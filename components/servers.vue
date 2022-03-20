<template>
  <div class="servers">
    <div class="topBar">
      <h3>Servers..</h3>
    </div>

    <div class="boxes seversBox">
      <div
        class="boxContainer"
        v-for="server in customer.server"
        :key="server._id"
      >
        <div class="boxHeader">
          <server-name-read :server="server" />
          <server-name-edit :server="server" />
          <action-tools
            :device="server"
            @editMode="editMode(arguments[0], arguments[1])"
            @abort="abort(arguments[0], arguments[1], arguments[2])"
            @update="update(arguments[0], arguments[1], arguments[2])"
          />
        </div>

        <div
          class="boxContent serversContent"
          :class="`content-view-${server._id}`"
        >
          <server-ip-read :server="server" />
          <username-read :device="server" />
          <password-read :device="server" />
        </div>

        <div
          class="boxContent serversContent edit"
          :class="`content-edit-${server._id}`"
        >
          <server-ip-edit :server="server" />
          <username-edit :device="server" />
          <password-edit :device="server" />
        </div>
      </div>
    </div>
    <nuxt-link to="/add-server"><Plus /></nuxt-link>
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  methods: {
    abort(serverId, viewMode, editMode) {
      let nameView = document.querySelector(`#name-view-${serverId}`).value
      document.querySelector(`#name-edit-${serverId}`).value = nameView // reverse user input

      let ipView = document.querySelector(`#ip-view-${serverId}`).value
      document.querySelector(`#ip-edit-${serverId}`).value = ipView // reverse user input

      let usernameView = document.querySelector(`#username-view-${serverId}`)
        .value
      document.querySelector(`#username-edit-${serverId}`).value = usernameView // reverse input

      let passwordView = document.querySelector(`#password-view-${serverId}`)
        .value
      document.querySelector(`#password-edit-${serverId}`).value = passwordView // reverse input

      this.viewMode(viewMode, editMode)
    },
    update(serverId, viewMode, editMode) {
      let nameView = document.querySelector(`#name-view-${serverId}`),
        nameEdit = document.querySelector(`#name-edit-${serverId}`),
        usernameView = document.querySelector(`#username-view-${serverId}`),
        usernameEdit = document.querySelector(`#username-edit-${serverId}`),
        passwordView = document.querySelector(`#password-view-${serverId}`),
        passwordEdit = document.querySelector(`#password-edit-${serverId}`),
        ipView = document.querySelector(`#ip-view-${serverId}`),
        ipEdit = document.querySelector(`#ip-edit-${serverId}`),
        token = localStorage.getItem('token'),
        server = [
          {
            _id: serverId,
            name: nameEdit.value,
            username: usernameEdit.value,
            password: passwordEdit.value,
            ip: ipEdit.value,
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
            nameView.value = nameEdit.value
            usernameView.value = usernameEdit.value
            passwordView.value = passwordEdit.value
            ipView.value = ipEdit.value
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
