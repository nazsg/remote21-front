<template>
  <div class="css">
    <h1>css</h1>
    <div class="fieldBoxContainer">
      <css-compo v-for="(field, i) in db" :key="i" :fields="db"></css-compo>
    </div>
    <button @click="open(100)">open 100</button>
    <button @click="open(200)">open 200</button>
    <base-modal :open="dialogIsVisible" @close="hideDialog">
      <p>hello {{ myValue }}</p>
      <CloseCircle class="hovers" @click="dialogIsVisible = false" />
    </base-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      show: true,
      myValue: '',
      db: [
        {
          method: 'method1',
          username: 'user1',
          password: 'pass1',
          url: 'domain.uk',
          notes: 'note1',
          others: 'other1',
        },
        {
          method: 'method2',
          username: 'user2',
          password: 'pass2',
          url: 'domain2.uk',
          notes: 'note2',
          others: 'other2',
        },
        {
          method: 'method3',
          username: 'user3',
          password: 'pass3',
          url: 'domain3.uk',
          notes: 'note3',
          others: 'other3',
        },
      ],
    }
  },
  methods: {
    hideDialog() {
      this.dialogIsVisible = false
    },
    open(val) {
      localStorage.setItem('value', val + ' 100-mile emo')
      this.myValue = val
      this.dialogIsVisible = true
    },
  },
}
</script>

<style lang="scss" scoped>
.fieldBoxContainer {
  // @media (min-width: 450px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.fieldsBox {
  display: flex;
  flex-direction: column;
  border: 1px solid #a2a1a1;
  margin: 5px;
  .fields {
    padding: 1px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    label {
      // width: 30%;
      font: 0.9rem Arial, Helvetica, sans-serif;
      color: #918f8f;
      padding: 5px;
      // background-color: rgb(190, 61, 61);
      flex: 2;
      // text-align: center;
    }
    input,
    textarea {
      // width: 70%;
      padding: 5px;
      // background-color: rgb(224, 211, 211);
      flex: 5;
      font-family: 'Courier New', Courier, monospace;
    }
  }
  @media (min-width: 450px) {
    margin: 5px auto;
    width: 350px;
    .fields {
      width: 350px;
      flex-direction: row;
    }
  }
}
</style>
