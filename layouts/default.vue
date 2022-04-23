<template>
  <div class="wrapper other">
    <div class="content">
      <my-header />
      <nuxt />
    </div>
    <my-footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../../sass-mixins/_styles';
@import '~/assets/box';
html {
  overflow: auto;
  @include layout;
}
header,
footer {
  background-color: rgb(168, 165, 165);
  display: flex;
  justify-content: center;
  font-family: Helvetica;
  @media (min-width: 550px) {
    letter-spacing: 2px;
  }
}

footer {
  // padding: 5px 0;
  color: #504e4e;
  // font-size: 0.4rem;
  padding: 10px 5px;
}

// used in gallery in serverSetupBox
.light-gallery__image-container .light-gallery__image .light-gallery__text {
  position: relative;
  font: 0.8rem Verdana;
  letter-spacing: 1px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.addServer {
  height: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  ul {
    // width: 100%;
    width: 95%;
    padding: 15px;
    margin: 10px auto;
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
      // padding: 5px;
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
  ul.formErrors {
    padding: 10px;
    margin-bottom: 5px;
    color: #b85a5a;
    text-align: left;
    width: 200px;
    border-color: #de3c3c;
    li {
      margin-left: 20px;
    }
  }
}

.storeErrors {
  padding: 10px;
  margin: 0 auto;
  color: rgb(184, 90, 90);
  text-align: left;
  width: 300px;
  border: 1px solid rgb(179, 74, 74);
  display: flex;
  flex-direction: row;
  li {
    margin-left: 20px;
    list-style-type: none;
  }
}
@mixin hovers($col) {
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: $col;
    transition: 0.3s;
  }
}
.hovers {
  @include hovers(red);
}
</style>
