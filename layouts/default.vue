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
  font: 0.5rem Helvetica;
  letter-spacing: 2px;
}
header {
  display: flex;
  justify-content: center;
  padding: 0 10px;
  font: 0.8rem Arial;
}
i#logout {
  position: absolute;
  right: 5px;
  color: #6b6868;
  padding: 5px 5px 0 0;
  cursor: pointer;
  &:hover {
    color: rgb(36, 35, 35);
  }
}
.banner {
  position: absolute;
  left: 5px;
  display: flex;
  justify-content: space-between;
  span {
    font: 0.8rem Arial;
    padding: 5px 5px 0 0;
    i {
      font: 1.2rem 'Monotype Corsiva';
    }
  }
}

footer {
  // padding: 5px 0;
  color: #504e4e;
  // font-size: 0.4rem;
  padding: 10px 0;
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
</style>
