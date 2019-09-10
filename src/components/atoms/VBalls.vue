<template>
  <div class="v-balls">
    <div class="ball ball-top">
      <img src="../../assets/img/ball-star.png">
      <img class="ball-thread" src="../../assets/img/ball-star-thread.png">
    </div>
    <div class="ball ball-bottom">
      <img src="../../assets/img/ball.png">
      <img class="ball-thread" src="../../assets/img/ball-thread.png">
    </div>
  </div>
</template>
<style lang="scss">
  .v-balls {
    position: absolute;
    height: 926px;
    width: 620px;
  }

  .ball {
    position: absolute;
    z-index: 10;
    &-top {
      left: 0;
      top: -50px;
      .ball-thread {
        transform: translate(-11%, 50%);
      }
    }
    &-bottom {
      bottom: 50px;
      right: 0;
      .ball-thread {
        transform: translate(-100%, 50%)
      }
    }
    &-thread {
      z-index: -1;
      position: absolute;
      left: 50%;
      bottom: 0;
    }
  }
</style>