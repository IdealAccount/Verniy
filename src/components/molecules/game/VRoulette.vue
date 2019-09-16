<template>
  <transition :name="`slide-${direction}`">
    <div class="v-roulette">
      <img src="../../../assets/img/roulette1.svg" v-if="1">
    </div>
  </transition>
</template>
<script>
  export default {
    props: ['direction'],
  }
</script>
<style lang="scss">
  @function calc-w($amount) {
    @return ($amount / 1920) * 100vmax
  }
  .v-roulette {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: calc-w(1203);
    transition: .3s;
    img {
      width: 100%;
    }
    /*&-pointer {
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #993C0B 14.53%, #FFE368 74.66%, #F8C448 85.31%);;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      &:after,
      &:before {
        content: '';
        position: absolute;
        display: block;
      }
      &:before {
        z-index: -1;
        width: 64px;
        height: 72px;
        left: 50px;
        top: 50%;
        transform: translate(-100%, -50%) rotate(-34deg) skew(20deg);
        background: linear-gradient(49deg, #F8C448 28.34%, #F8C64B 35.73%, #F9CD53 40.14%, #FAD961 43.77%, #FCEA75 46.96%, #FFFF8F 49.87%, #F8C448 64.93%, #DE9E37 77.19%, #C07424 93.15%, #AB5516 107.57%, #9E430E 119.83%, #993C0B 128.42%);
      }
      &:after {
        border-radius: 50%;
        width: 110px;
        height: 110px;
        background: radial-gradient(55.06px at 50% 50%, #FFFE8E 0%, #CE943D 100%);
      }
      &-wrap {
        position: absolute;
        z-index: 10;
        top: 50%;
        right: 0;
        width: 138px;
        height: 138px;
      }
    }*/
  }
</style>