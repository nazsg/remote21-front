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

footer {
  padding: 5px 0;
  color: #504e4e;
}

// used in gallery in serverSetupBox
.light-gallery__image-container .light-gallery__image .light-gallery__text {
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
