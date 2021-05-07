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
        <label for="">name</label>
        <input type="text" v-model="name" readonly />
        <ContentCopy class="spacer" />
      </div>
      <div class="fields">
        <label for="">email</label>
        <input type="text" v-model="email" readonly ref="email" />
        <ContentCopy @click="copy('email')" />
      </div>
      <div class="fields">
        <label for="">tel</label>
        <input type="text" v-model="tel" readonly ref="tel" />
        <ContentCopy @click="copy('tel')" />
      </div>
    </div>
    <div v-else class="fieldsBox">
      <div class="fields new">
        <label for="">name</label>
        <input type="text" v-model="nameNew" />
      </div>
      <div class="fields new">
        <label for="">email</label>
        <input type="text" v-model="emailNew" />
      </div>
      <div class="fields new">
        <label for="">tel</label>
        <input type="text" v-model="telNew" />
      </div>
    </div>
  </one-item>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
  props: ['contact'],
  data() {
    return {
      view: true,
      name: this.contact.name,
      nameNew: this.contact.name,
      email: this.contact.email,
      emailNew: this.contact.email,
      tel: this.contact.tel,
      telNew: this.contact.tel,
    }
  },
  methods: {
    abort() {
      this.view = true
      this.revertChanges()
    },
    revertChanges() {
      this.nameNew = this.name
      this.emailNew = this.email
      this.telNew = this.tel
    },
    update() {
      let token = localStorage.getItem('token'),
        contact = [
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
            this.name = this.nameNew
            this.email = this.emailNew
            this.tel = this.telNew
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
