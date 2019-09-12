<template>
  <div class="v-screen-1">
    <div class="logo-label">
      <img src="../../assets/img/logo-label.png" alt="">
    </div>
    <div class="page-container">
      <div class="logo">
        <img src="../../assets/img/logo.png">
      </div>
      <div class="">
        <v-button @click="$router.push('registration')">Играть</v-button>
        <v-button>Мои призы</v-button>
        <v-rules-agree type="game">и подтверждаю, что мне 18 лет</v-rules-agree>
      </div>
    </div>
    <v-roulette></v-roulette>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import VRoulette from '../molecules/game/VRoulette'
  import VButtonAgree from '../molecules/VButtonAgree'
  import VButton from '../atoms/VButton'
  import VRulesAgree from '../molecules/VRulesAgree'

  export default {
    name: 'FirstPage',
    components: {VButtonAgree, VButton, VRulesAgree, VRoulette},
    data() {
      return {
        animate: false
      }
    },
    methods: {
      ...mapActions(['routerPush'])
    }
  }
</script>
<style lang="scss">
  @function calc-w($amount) {
    @return ($amount / 1920) * 100vmax
  }
  .v-screen-1 {
    position: relative;
    overflow: hidden;
    height: 100vh;
    .v-roulette {
      right: calc-w(-601.5);
    }
  }
  .logo-label {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%)
  }
  .page-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    width: 100%;
    margin: 0 auto;
    &.is-animate {

    }
  }

  .logo {
    width: 1100px;
    height: 550px;
    margin-bottom: 42px;
  }
  .roulette {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    &.is-animate {
      animation: rotate-left 4s ease-in-out forwards;
    }
  }

  @keyframes rotate-left {
    50% {
      transform: translate(-140vh, -50%) rotate(-390deg);
    }
    70% {
      transform: translate(-110vh, -50%) rotate(-350deg);
    }
    90% {
      transform: translate(-130vh, -50%) rotate(-370deg);
    }
    100% {
      transform: translate(-120vh, -50%) rotate(-360deg);
    }

  }
</style>