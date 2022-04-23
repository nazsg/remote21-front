<template>
  <div>
    <div class="topBar"></div>
    <div class="devicePasswordBox">
      <!-- <div class="boxContainer"> -->
      <slot />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
label {
  font: 12px Verdana;
  color: #747272;
}
// .boxContainer {
//   height: 220px;
// }
.boxHeader {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  svg {
    padding: 3px;
    margin: 3px;
  }
}

button {
  height: auto;
  margin-bottom: 0;
}

.mySpacer.material-design-icon {
  cursor: default;
  color: #f8efef;
}
.actions2 {
  display: flex;
  margin-right: 5px;
  div {
    span {
      font-size: 12px;
    }
  }
}
.fields {
  overflow: auto;
  display: flex;
  // justify-content: space-evenly;
  align-items: center;
  @media (min-width: 450px) {
    padding: 0 5px;
    label {
      // width: 80px;
      text-align: right;
      margin-right: 3px;
      // background-color: #fff;
      flex: 2;
    }
    input {
      flex: 5;
    }
  }
  &.new {
    display: flex;
    justify-content: space-evenly;
    margin: 5px 0;
    input {
      // width: 120px;
      background-color: #fff;
      flex: 5;
    }
    &.text {
      textarea {
        flex: 5;
        background-color: #fff;
      }
    }
  }
  &.text {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px 0;
    label {
      text-align: right;
      // margin-left: 10px;
      // display: none;
    }
    textarea {
      resize: none;
      // width: 96%;
      margin: 0 auto;
      // overflow-y: scroll;
      outline: none;
      border-color: #dbdbdb;
      // background-color: #f1ecec;
      padding: 5px;
    }
  }
}
.fieldsBox {
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  height: auto;
  // justify-content: center;
  // align-items: center;
  overflow: auto;
  .fields {
    display: flex;
    flex-direction: column;
    label {
      flex: 3;
    }
    textarea,
    input {
      flex: 6;
      // background-color: #fff;
    }
    @media (min-width: 450px) {
      flex-direction: row;
    }
  }
}
.fields22 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  label {
    flex: 2;
    text-align: right;
    background-color: #fff;
  }
  input,
  textarea {
    flex: 5;
    background-color: #fff;
  }
  span {
    flex: 1;
  }
}
</style>
