<template>
  <div class="method">
    <div class="topBar">
      <h3>Remote Steps</h3>
    </div>
    <div class="boxes methodBox">
      <div
        class="boxContainer"
        v-for="method in customer.methodInfo"
        :key="method._id"
      >
        <div class="boxHeader">
          <method-make-read :method="method" />
          <method-make-edit :method="method" />
          <action-tools
            :device="method"
            @editMode="editMode(arguments[0], arguments[1])"
            @abort="abort(arguments[0], arguments[1], arguments[2])"
            @update="update(arguments[0], arguments[1], arguments[2])"
          />
        </div>

        <div class="boxContent" :class="`content-view-${method._id}`">
          <username-read :device="method" />
          <password-read :device="method" />
          <method-url-read :method="method" />
          <method-notes-read :method="method" />
        </div>

        <div class="boxContent edit" :class="`content-edit-${method._id}`">
          <username-edit :device="method" />
          <password-edit :device="method" />
          <method-url-edit :method="method" />
          <method-notes-edit :method="method" />
        </div>
      </div>
    </div>
    <nuxt-link to="/add-method"><Plus /></nuxt-link>
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  methods: {
    abort(methodId, viewMode, editMode) {
      let methodNameView = document.querySelector(
        `#methodName-view-${methodId}`
      ).value
      document.querySelector(
        `#methodName-edit-${methodId}`
      ).value = methodNameView // reverse user input

      let usernameView = document.querySelector(`#username-view-${methodId}`)
        .value
      document.querySelector(`#username-edit-${methodId}`).value = usernameView // reverse user input

      let passwordView = document.querySelector(`#password-view-${methodId}`)
        .value
      document.querySelector(`#password-edit-${methodId}`).value = passwordView // reverse input

      let urlView = document.querySelector(`#url-view-${methodId}`).value
      document.querySelector(`#url-edit-${methodId}`).value = urlView // reverse input

      let notesView = document.querySelector(`#notes-view-${methodId}`).value
      document.querySelector(`#notes-edit-${methodId}`).value = notesView // reverse input

      this.viewMode(viewMode, editMode)
    },
    update(methodId, viewMode, editMode) {
      let methodView = document.querySelector(`#methodName-view-${methodId}`),
        makeEdit = document.querySelector(`#methodName-edit-${methodId}`),
        usernameView = document.querySelector(`#username-view-${methodId}`),
        usernameEdit = document.querySelector(`#username-edit-${methodId}`),
        passwordView = document.querySelector(`#password-view-${methodId}`),
        passwordEdit = document.querySelector(`#password-edit-${methodId}`),
        urlView = document.querySelector(`#url-view-${methodId}`),
        urlEdit = document.querySelector(`#url-edit-${methodId}`),
        notesView = document.querySelector(`#notes-view-${methodId}`),
        notesEdit = document.querySelector(`#notes-edit-${methodId}`),
        token = localStorage.getItem('token'),
        methodInfo = [
          {
            _id: methodId,
            methodName: makeEdit.value,
            username: usernameEdit.value,
            password: passwordEdit.value,
            notes: notesEdit.value,
            url: urlEdit.value,
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
            methodView.value = makeEdit.value
            usernameView.value = usernameEdit.value
            passwordView.value = passwordEdit.value
            urlView.value = urlEdit.value
            notesView.value = notesEdit.value
            this.viewMode(viewMode, editMode)
          }
        })
    },
  },
}
</script>

<style></style>
