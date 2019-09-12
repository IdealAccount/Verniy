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
    right: 0;
    height: 100vh;
    width: 662px;
  }
  .ball {
    position: absolute;
    z-index: 10;
    &-top {
      left: 0;
      top: 0;
      .ball-thread {
        transform: translate(-14%, 58%);
      }
    }
    &-bottom {
      bottom: 0;
      right: 0;
      transform: translate(-22%, -27%);
      .ball-thread {
        transform: translate(-105%, 50%)
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