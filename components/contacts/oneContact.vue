<template>
  <one-item class="boxContainer device">
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
          <div @click="validate">
            <Button>
              <span class="icon iconLeft orange"><SendIcon /></span>
              <span class="text textRight orange">Update</span>
            </Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>

    <div v-if="view" class="fieldsBox">
      <div class="fields">
        <label for="">name</label>
        <input ref="contact_name" v-model="contact_name" type="text" readonly />
        <ContentCopy @click="copy('contact_name')" />
      </div>
      <div class="fields">
        <label for="">email</label>
        <input ref="email" v-model="email" type="text" readonly />
        <ContentCopy @click="copy('email')" />
      </div>
      <div class="fields">
        <label for="">tel</label>
        <input ref="tel" v-model="tel" type="text" readonly />
        <ContentCopy @click="copy('tel')" />
      </div>
    </div>
    <div v-else class="fieldsBox">
      <div class="fields new">
        <label for="">name</label>
        <input v-model="nameNew" type="text" />
      </div>
      <div class="fields new">
        <label for="">email</label>
        <input v-model="emailNew" type="text" />
      </div>
      <div class="fields new">
        <label for="">tel</label>
        <input v-model="telNew" type="text" />
      </div>
    </div>
  </one-item>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  props: {
    contact: {
      type: [String, Object],
      default: '',
    },
  },
  data() {
    return {
      view: true,
      contact_name: this.contact.name,
      nameNew: this.contact.name,
      email: this.contact.email,
      emailNew: this.contact.email,
      tel: this.contact.tel,
      telNew: this.contact.tel,
      errors: [],
    }
  },
  methods: {
    abort() {
      this.view = true
      this.revertChanges()
      this.$store.commit('resetContactErrors', '')
    },
    revertChanges() {
      this.nameNew = this.contact_name
      this.emailNew = this.email
      this.telNew = this.tel
    },
    validate() {
      const _ = this
      this.$store.commit('resetContactErrors', '')
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (_.nameNew.trim() === '')
        this.$store.commit('setContactErrors', 'name')
      if (_.emailNew.trim() !== '') {
        if (re.test(String(_.emailNew).toLowerCase()) === false) {
          this.$store.commit('setContactErrors', 'email needs a valid format')
          // _.errors.push('email needs a valid format')
        }
      }
      if (_.emailNew.trim() === '' && _.telNew.trim() === '')
        // this.errors.push('email or tel')
        this.$store.commit('setContactErrors', 'email or tel')
      if (_.$store.state.contact_errors.length > 0) return
      this.update()
    },
    update() {
      const token = localStorage.getItem('token')
      const contact = [
        {
          _id: this.contact._id,
          name: this.nameNew,
          email: this.emailNew,
          tel: this.telNew,
        },
      ]
      this.$axios
        .put(
          '/api/customers/' + this.customer._id + '/updateOneContact',
          { contact },
          { headers: { token } }
        )
        .then((res) => {
          if (res.statusText === 'OK') {
            // update DOM
            this.contact_name = this.nameNew
            this.email = this.emailNew
            this.tel = this.telNew
            this.view = true
          }
        })
    },
    copy(ele) {
      const el = this.$refs[ele]
      console.log(el.value)
      el.select() // console.log(el.value)
      document.execCommand('copy')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
// .boxContainer.device {
//   height: 150px;
// }
</style>
