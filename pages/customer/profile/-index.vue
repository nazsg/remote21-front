<template>
  <div>profile {{ id }}</div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
    }
  },
  created() {
    // if (localStorage === 'undefined') this.$router.push('/')
    if (process.browser) {
      console.log('we are running on the client')
      this.id = localStorage.getItem('cid')
    } else {
      console.log('we are running on the server')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
</style>
