<template>
  <div class="v-view">
    <transition name="appearance" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
.v-view {
  position: relative;
  min-height: 100vh;
  background: #f37032 url("../../assets/img/bg-decor.png") center / contain;
  overflow: hidden;
}
.appearance-enter-active,
.appearance-leave-active {
  transition: opacity 0.3s ease-in;
}
.appearance-enter {
  opacity: 0;
}
.appearance-leave-to {
  opacity: 1;
}
</style>
