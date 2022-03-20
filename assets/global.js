export default {
  methods: {
    back() {
      const id = JSON.parse(localStorage.getItem('customer')).id
      this.$router.push(`/customer/${id}`)
      if (process.env.LOG) console.log('from globalMixins')
    },
  },
}
