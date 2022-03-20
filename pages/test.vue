<template>
  <div>
    <my-slot>
      <div
        class="show"
        slot="title"
        v-for="(d, i) in items"
        :key="`view-${i}`"
        :class="`view-${i}`"
      >
        <button @click="swap(`view-${i}`, `edit-${i}`)">swap</button>
        <input type="text" :value="d.make" />
        <input type="text" :value="d.username" />
        <input type="text" :value="d.pass" />
      </div>
      <div
        class="hide"
        slot="title"
        v-for="(d, i) in items"
        :key="`edit-${i}`"
        :class="`edit-${i}`"
      >
        <input type="text" :value="d.make" />
        <input type="text" :value="d.username" />
        <input type="text" :value="d.pass" />
      </div>
    </my-slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { make: 'hp', username: 'admin', pass: '1234' },
        { make: 'Samsung', username: 'admin', pass: '1234' },
        { make: 'Kyo', username: 'admin', pass: '1234' },
      ],
    }
  },
  methods: {
    swap(v, e) {
      let view = document.getElementsByClassName(`${v}`)
      let edit = document.getElementsByClassName(`${e}`)
      view.forEach((el) => el.classList.add('hide'))
      edit.forEach((el) => el.classList.add('show'))
    },
  },
}
</script>

<style lang="scss">
h3 {
  color: green;
}
p {
  color: black;
}

.show {
  color: blue;
}
.hide {
  // display: none;
}
.show {
  font-size: 30px;
}
</style>
