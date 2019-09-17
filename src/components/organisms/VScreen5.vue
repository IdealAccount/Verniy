<template>
  <div class="screen-5">
    <div class="roulette-wrapper">
      <v-roulette :style="animate ? rotate : ''"></v-roulette>
      <span class="roulette-pointer">
        <img src="../../assets/img/pointer.svg" alt="" />
      </span>
    </div>
    <div class="v-control">
      <div class="v-control__sound" @click="soundOn = !soundOn">
        <img src="../../assets/img/sound_on.svg" v-if="soundOn" />
        <img src="../../assets/img/sound_off.svg" v-if="!soundOn" />
      </div>
      <div class="v-control__window" @click="openFullscreen">
        <img src="../../assets/img/window.svg" />
      </div>
    </div>
    <slot></slot>
    <v-balls></v-balls>
  </div>
</template>
<script>
import VRoulette from "../molecules/game/VRoulette";
import VBalls from "../molecules/VBalls";

export default {
  props: {
    rotate: Object,
    animate: Boolean
  },
  components: { VRoulette, VBalls },
  data() {
    return {
      soundOn: true
    };
  },
  methods: {
    openFullscreen() {
      // if (elem.requestFullscreen) {
      //   elem.requestFullscreen();
      // } else if (elem.mozRequestFullScreen) { /* Firefox */
      //   elem.mozRequestFullScreen();
      // } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      //   elem.webkitRequestFullscreen();
      // } else if (elem.msRequestFullscreen) { /* IE/Edge */
      //   elem.msRequestFullscreen();
      // }
    }
  }
};
</script>
<style lang="scss">
@function calc-w($amount) {
  @return ($amount / 1920) * 100vmax;
}
.screen-5 {
  display: flex;
  height: 100vh;
  width: 100%;
  background: #f37032 url(../../assets/img/bg-decor-opacity.png) 140px -6px;
  .content {
    width: 100%;
    z-index: 20;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding-top: calc-w(64);
    flex-shrink: 1;
  }
  .v-button {
    width: calc-w(710);
    max-width: 800px;
    height: calc-w(138);
    font-size: calc-w(64);
    border-radius: calc-w(20) 0;
    padding: 0;
    &:not(:last-child) {
      margin-bottom: calc-w(48);
    }
  }
  .v-balls {
    max-width: calc-w(662);
    top: 50%;
    transform: translateY(-50%);
    max-height: 1080px;
  }
  .ball-top {
    left: 0;
    top: 19px;
    max-width: calc-w(346);
  }
  .ball-bottom {
    bottom: -327px;
    right: 5px;
    max-width: calc-w(287);
  }
  .v-roulette {
    left: calc-w(-601.5);
  }
}
.roulette-wrapper {
  position: relative;
  max-width: calc-w(601.5);
  width: 100%;
  flex-shrink: 0;
}

.roulette-pointer {
  position: absolute;
  right: calc-w(29);
  top: 50%;
  max-width: calc-w(138);
  width: 100%;
  transform: translate(100%, -50%) rotate(-90deg);
  img {
    width: 100%;
  }
}
.v-control {
  position: absolute;
  z-index: 30;
  display: flex;
  align-items: center;
  height: 70px;
  right: 60px;
  top: 21px;
  div {
    cursor: pointer;
  }
  &__sound {
    margin-right: 25px;
    img {
      display: block;
    }
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .screen-5 {
    .roulette-wrapper {
      position: absolute;
      max-width: 100%;
      left: 0;
      top: 0;
    }
    .content {
      align-items: center;
      padding-top: calc-w(500);
    }
    .logo-mini {
      transform: rotate(-15deg);
      margin-bottom: 30px;
    }
    .v-button {
      width: 260px;
      &:not(:last-child) {
        margin-bottom: 28px;
      }
    }
    .roulette-pointer {
      display: none;
    }
    .v-control {
      display: none;
    }
    .v-balls {
      display: none;
    }
  }
}
</style>
