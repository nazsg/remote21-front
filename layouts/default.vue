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
ul.formErrors {
  color: rgb(184, 90, 90);
  text-align: left;
  width: 200px;
  li {
    margin-left: 20px;
  }
}
</style>
