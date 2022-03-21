<template>
  <div class="addContainer">
    <sub-menus></sub-menus>
    <slot name="header"> </slot>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return { customer: '' }
  },
  mounted() {
    if (process.env.LOG) console.log('debug on')
    this.customer = JSON.parse(localStorage.getItem('customer')).name
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
* {
  box-sizing: border-box;
  transition: 0.3s;
}
.addContainer {
  // @include fullPage;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  text-align: center;
  padding: 0 20px;
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-position: left;
  background-attachment: fixed;
  height: 95%;
  padding: 0;
  padding-top: 80px;
  overflow: auto;
}

.addServer {
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  // z-index: -301;
  // height: 100%;
  ul {
    // margin: -20px auto 0;
    width: 95%;
    @include border1;
    display: flex;
    flex-direction: column;
    @media (min-width: 500px) {
      width: 490px;
    }

    .item {
      margin: 10px;
      display: flex;
      flex-direction: column;
      input {
        padding: 5px;
        outline: none;
        &.ip {
          width: 55px;
          margin-right: 1px;
        }
        @include border1($col: #c5c2c2);
        &:focus,
        &:active {
          border-color: #666;
        }
      }
      @media (min-width: 500px) {
        flex-direction: row;
        label {
          text-align: right;
          flex-basis: 125px;
          padding-right: 5px;
        }
      }
    }
  }
}
.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }
}
h2 {
  position: absolute;
  top: 42px;
  text-align: center;
  background-color: #f8efef;
  padding: 20px 0;
  width: 100%;
  z-index: 20;
}
textarea {
  padding: 5px;
  outline: none;
  resize: none;
}
</style>
