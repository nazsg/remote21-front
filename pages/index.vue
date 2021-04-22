<template>
  <div class="home">
    <h2>Remote Access Admin</h2>
    <div class="cust" v-for="(c, i) in cust" :key="i">
      <nuxt-link :to="`/customer/${c._id}`">{{ c.name }}</nuxt-link>
    </div>
    <!-- <pre>{{ JSON.stringify(cust, null, '\t') }}</pre> -->
  </div>
</template>

<script>
// import info from '~/test.json'
export default {
  data() {
    return {
      cust: [],
    }
  },
  computed: {
    friendly() {
      1
      // return JSON.parse(this.cust)
      return this.cust
    },
  },
  mounted() {
    this.$axios.get('/api/customers').then((data) => {
      // console.log(data.data)
      this.cust = data.data
      localStorage.setItem('customers', JSON.stringify(data.data))
    })
    this.$axios.get('/backend').then((data) => console.log(data))
  },
}
</script>

<style lang="scss">
@import '~/../sass-mixins/_styles';

.application.theme--light {
  height: 100%;
  @include fullPage;
}
.application--wrap {
  min-height: inherit;
  // width: 100%;
}
.editJournal {
  @include fullPage;
  height: 100%;
  background-color: rgb(221, 196, 196);
}
// form {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   @include fullPage;
//   iframe {
//     width: 100%;
//     height: 600px;
//   }
// }

.cust {
  @include border1;
  margin: 10px 0;
  padding: 10px;
}
</style>
