export default {
  data() {
    return {
      customer: [],
      size: 20,
      devicePasswordView: true,
      serverListView: true,
      methodView: true,
    }
  },
  mounted() {
    let customer = { name: this.customer.name, id: this.customer._id }
    localStorage.setItem('customer', JSON.stringify(customer))
  },
  methods: {
    copyChild(field) {
      this.$emit('copy', field)
    },
    editMode(view, edit) {
      this.$emit('editMode', view, edit)
    },
    abort(id, view, edit) {
      this.$emit('abort', id, view, edit)
    },
    update(id, view, edit) {
      this.$emit('update', id, view, edit)
    },
    test() {
      alert('from mixins')
    },
    editMode(tv, te) {
      let toolView = document.getElementsByClassName(`${tv}`)
      let toolEdit = document.getElementsByClassName(`${te}`)
      toolView.forEach((el) => {
        el.classList.add('hide')
      })
      toolEdit.forEach((el) => {
        el.classList.add('show')
      })
    },
    viewMode(tv, te) {
      let toolView = document.getElementsByClassName(`${tv}`)
      let toolEdit = document.getElementsByClassName(`${te}`)
      toolView.forEach((el) => {
        el.classList.remove('hide')
      })
      toolEdit.forEach((el) => {
        el.classList.remove('show')
      })
      this.$router.push('/customer/' + this.$route.params.customer)
    },
    copy(ele) {
      let el = this.$refs[ele]
      console.log(el.value)
      el.select() // console.log(el.value)
      document.execCommand('copy')
    },
    copy2(a) {
      // console.log(this.$refs)
      // let el = this.$refs[a][0] ? this.$refs[a][0] : this.$refs[a]
      let el = document.querySelector(`#${a}`)
      el.select() // console.log(el.value)
      document.execCommand('copy')
      // let el = document.getElementById(a + '-' + id + '-' + i)
    },
    getCustomers() {
      this.$axios.get('/api/customers').then((data) => {
        this.$store.commit('setCustomers', data.data)
      })
    },
    getCustomer() {
      let [a] = this.$store.state.customers.filter(
        (p) => p._id === this.$route.params.customer
      )
      // console.log(a)
      this.customer = a
      // localStorage.setItem('customers', JSON.stringify(a))
    },
  },
  created() {
    this.getCustomer()
  },
}
