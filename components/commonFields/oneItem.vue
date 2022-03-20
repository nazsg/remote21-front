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
.boxContainer {
  height: 220px;
}
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

.spacer.material-design-icon {
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
  justify-content: space-evenly;
  align-items: center;
  label {
    width: 80px;
    text-align: right;
  }
  &.new {
    display: flex;
    justify-content: space-evenly;
    input {
      // width: 120px;
      background-color: #fff;
    }
    &.text {
      textarea {
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
      text-align: left;
      margin-left: 10px;
      // display: none;
    }
    textarea {
      resize: none;
      width: 96%;
      margin: 0 auto;
      // overflow-y: scroll;
      outline: none;
      border-color: #dbdbdb;
      // background-color: #f1ecec;
      padding: 3px;
    }
  }
}
.fieldsBox {
  padding: 5px 0;
  height: auto;
  justify-content: center;
  align-items: center;
  overflow: auto;
}
</style>
