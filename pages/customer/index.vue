<template>
  <div class="home">
    <h2>Remote Access Admin</h2>
    <ul class="cust">
      <li v-for="c in cust" :key="c._id">
        <nuxt-link class="linkList" :to="`/customer/${c._id}`">{{
          c.name
        }}</nuxt-link>
      </li>
    </ul>
    <nuxt-link to="/add-customer"><Plus />Add customer</nuxt-link>
    <!-- <pre>{{ JSON.stringify(cust, null, '\t') }}</pre> -->
  </div>
</template>

<script>
function compare(a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
  return 0
}
export default {
  data() {
    return {
      cust: [],
    }
  },
  mounted() {
    this.$axios.get('/api/customers').then((data) => {
      this.cust = data.data.map((c) => {
        return {
          _id: c._id,
          name: c.name,
        }
      })
      this.cust = this.cust.sort(compare)
      localStorage.setItem('customers', JSON.stringify(this.cust))
    })
    // this.$axios.get('/backend').then((data) => console.log(data))
  },
  methods: {
    swap(v) {
      console.log(this.$refs[v][0])
      let t = this.$refs[v][0].children
      t[2].className = t[2].className == 'hide' ? 'show' : 'hide'
      t[3].className = t[3].className == 'hide' ? 'show' : 'hide'
    },
    cancel(v) {
      // this.refs[v][0].children[2]
    },
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

// .cust {
//   background-color: #e9e5e5;
//   display: flex;
//   flex-wrap: wrap;
//   li {
//     margin: 5px 2px;
//     // padding: 10px;
//   }
//   &:hover {
//     cursor: pointer;
//     background-color: #e7ddd5;
//   }
// }
ul.cust {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    list-style-type: none;
    a.linkList {
      display: inline-block;
      margin: 5px 2px;
      padding: 10px 12px;
      text-decoration: none;
      background-color: #e0d5d5;
      &:hover {
        background-color: #c4b5b5;
      }
    }
  }
}

button {
  cursor: pointer;
}
.show {
  display: inline-block;
}
.hide {
  display: none;
}
</style>
