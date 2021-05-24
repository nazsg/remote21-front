<template>
  <div class="home">
    <h2>Remote Access Admin</h2>
    <h3>Simulate a user:</h3>
    <select name="" v-model="user">
      <option disabled value="0">Choose one</option>
      <option value="Jupiter">Jupiter</option>
      <option value="Saturn">Saturn</option>
      <option value="Neptune">Neptune</option>
    </select>
    <div @click="login">
      <Button>
        <span class="text textLeft orange">Login</span>
        <span class="icon iconRight orange"><Send /></span>
      </Button>
    </div>
    <!-- <div class="cust" v-for="(c, i) in cust" :key="i">
      <nuxt-link :to="`/customer/${c._id}`">{{ c.name }}</nuxt-link>
    </div> -->
    <!-- <pre>{{ JSON.stringify(cust, null, '\t') }}</pre> -->
  </div>
</template>

<script>
// import info from '~/test.json'
export default {
  data() {
    return {
      cust: [],
      user: '0',
    }
  },
  methods: {
    login() {
      // localStorage.setItem('user', this.user)
      this.$store.commit('setUser', this.user)
      this.$router.push('/customer')
    },
  },
  computed: {
    friendly() {
      1
      // return JSON.parse(this.cust)
      return this.cust
    },
  },
  created() {
    // this.$router.push('/customer')
    if (process.client && process.env.LOG) console.log('test from browser')
    // console.log(process)
  },
  mounted() {
    this.$axios.get('/api/customers').then((data) => {
      // console.log(data.data)
      this.cust = data.data
      localStorage.setItem('customers', JSON.stringify(data.data))
    })
    // this.$axios.get('/backend').then((data) => console.log(data))
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
select {
  margin: 5px;
  padding: 5px;
}
</style>
