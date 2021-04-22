<template>
  <div class="boxes">
    <div class="boxContainer" v-for="(a, i) in items" :key="i">
      <div class="boxHeader">
        <div class="boxMake view" :class="`content-view-${i}`">
          <input type="text" readonly :value="a.make" />
        </div>
        <div class="boxMake edit" :class="`content-edit-${i}`">
          <input type="text" :value="a.make" />
        </div>

        <div class="tools">
          <div class="view" :class="`content-view-${i}`">
            <Pencil @click="edit(`content-view-${i}`, `content-edit-${i}`)" />
          </div>
          <div class="edit" :class="`content-edit-${i}`">
            <CloseCircle
              @click="cancel(`content-view-${i}`, `content-edit-${i}`)"
            /><Send />
          </div>
        </div>
      </div>

      <div class="boxContent" :class="`content-view-${i}`">
        <div class="boxUsername">
          <input
            readonly
            type="text"
            :value="a.username"
            :id="`username-view-${i}`"
          />
          <ContentCopy />
        </div>

        <div class="boxPassword">
          <input
            readonly
            type="text"
            :value="a.pass"
            :id="`password-view-${i}`"
          />
          <ContentCopy />
        </div>
      </div>

      <div class="boxContent edit" :class="`content-edit-${i}`">
        <div class="boxUsername">
          <input type="text" :value="a.username" :id="`username-edit-${i}`" />
        </div>

        <div class="boxPassword">
          <input type="text" :value="a.pass" :id="`password-edit-${i}`" />
        </div>
      </div>
    </div>
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
    edit(tv, te) {
      let toolView = document.getElementsByClassName(`${tv}`)
      let toolEdit = document.getElementsByClassName(`${te}`)
      toolView.forEach((el) => {
        el.classList.add('hide')
      })
      toolEdit.forEach((el) => {
        el.classList.add('show')
      })
    },
    cancel(tv, te) {
      let toolView = document.getElementsByClassName(`${tv}`)
      let toolEdit = document.getElementsByClassName(`${te}`)
      toolView.forEach((el) => {
        el.classList.remove('hide')
      })
      toolEdit.forEach((el) => {
        el.classList.remove('show')
      })
    },
  },
}
</script>

<style lang="scss">
@import '~/../sass-mixins/_styles';

.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.boxMake,
.boxContent {
  padding: 10px;
}
.boxContainer {
  @include border1;
  margin: 5px;
  width: 250px;

  .boxHeader {
    display: flex;
    background-color: #dbdbdb;
    justify-content: space-between;
  }
  input {
    outline: none;
    border: 1px solid #fcfcfc;
    padding: 5px;
    background-color: inherit;
  }
  .edit input {
    background-color: #fff;
    // margin: 2px 0;
  }
  .boxMake.view input {
    border: 1px solid #dbdbdb;
    padding: 5px;
  }
}
.edit {
  display: none;
  input {
    border-color: #a3a2a2;
  }
}
.boxContent.edit input {
  margin: 2px 0;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>
