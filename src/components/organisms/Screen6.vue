<template>
  <div class="screen-6">
    <div class="roulette-wrapper">
      <v-roulette></v-roulette>
      <span class="roulette-pointer">
        <img src="../../assets/img/pointer.svg" alt="">
      </span>
    </div>
    <div class="content">
      <div class="logo-mini">
        <img src="../../assets/img/logo-mini.png" alt="">
      </div>
      <div class="container">
        <v-button>Крутить колесо!</v-button>
        <span class="link">Отсканировать чек</span>
      </div>
    </div>
    <v-balls></v-balls>
  </div>
  
</template>
<script>
  import VRoulette from '../molecules/game/VRoulette'
  import VBalls from '../molecules/VBalls'
  import VButton from '../atoms/VButton'
  export default {
    components: {
      VRoulette,
      VBalls,
      VButton
    }
  }
</script>
<style lang="scss">
  .screen-6 {
    display: flex;
    height: 100vh;
    width: 100%;
    background: #F37032 url(../../assets/img/bg-decor.png) center ;
    .content {
      width: 100%;
      z-index: 20;
      display: flex;
      flex-direction: column;
      max-width: 100%;
      flex-shrink: 1;
    }
    .container {
      width: 710px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      padding-bottom: 150px;
    }
    .v-button {
      max-width: 710px;
      height: 138px;
      font-size: 64px;
      border-radius: 20px 0;
      margin-bottom: 60px;
    }
    .link {
      font-size: 50px;
      font-weight: bold;
      color: #fff;
      &:before {
        background: #fff;
      }
    }
  }
  .roulette-wrapper {
    position: relative;
    max-width: 50vh;
    width: 100%;
    .v-roulette {
      left: -50vh;
      top: 0;
    }
  }
  .roulette-pointer {
    position: absolute;
    right: 0;
    top: 50%;
    max-width: 138px;
    width: 100%;
    transform: translate(100%,-50%) rotate(-90deg);
    img {
      width: 100%;
    }
  }
  .roulette-container {
    height: 100vh;
  }
</style>