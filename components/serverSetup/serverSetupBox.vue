<template>
  <one-section>
    <h3>Server Setup</h3>
    <client-only>
      <LightGallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </client-only>
    <div class="thumbs">
      <div v-for="(thumb, thumbIndex) in images" :key="thumbIndex">
        <a href="#" @click="index = thumbIndex">
          <img :src="`${thumb.url}`" width="100px" />
          <!-- <img :src="`${host}/${path2}${thumb.thumb}`" width="100px" /> -->
        </a>
        <span>{{ thumb.title }}</span>
        <button
          :key="thumb._id"
          @click="edit(thumb._id, thumb.title, thumb.thumb, thumb.path)"
        >
          Edit
        </button>
      </div>
    </div>
    <nuxt-link to="/add-server-setup"><Plus /></nuxt-link>
  </one-section>
</template>

<script>
export default {
  head: {
    script: [],
  },
  data() {
    return {
      show1: false,
      dialogIsVisible: false,
      img: '',
      comment: '',
      images: [],
      index: null,
      visible: false,
      host: this.$store.state.host,
    }
  },
  created() {
    this.images = this.screenshots.map((s) => {
      return {
        _id: s._id,
        title: s.comment,
        path: s.path,
        url: `${this.host}${s.path.replace('public', '').replace('\\', '/')}`,
        thumb: s.screenshot,
      }
    })
    console.log(this.images)
  },
  filters: {
    img(n) {
      return n.replace('./public', '')
    },
  },
  methods: {
    edit(id, comment, screenshot, path) {
      let item = { id, comment, screenshot, path }
      // console.table({ item })
      localStorage.setItem('serverSetupId', JSON.stringify(item))
      this.$router.push('/edit-server-setup')
    },
  },
  computed: {
    path2() {
      return this.images[0].path.replace('./public/', '')
    },
    customer() {
      // console.log('cust')
      return this.$store.state.customers.filter(
        (c) => c._id === this.$route.params.customer
      )
    },
    screenshots() {
      return this.customer[0].serverSetup
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
.thumbs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      padding-right: 5px;
    }
  }
}
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #413f3fc0;
  overflow: auto;
}
.dialog {
  // margin-top: 130px;
  background-color: #f8efef;
  width: 90%;
  margin: 0 auto;
  @include border1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.one {
  padding: 10px;
}
.comment {
  padding: 5px;
  text-align: center;
}
.actions {
  display: flex;
  justify-content: center;
}
</style>
