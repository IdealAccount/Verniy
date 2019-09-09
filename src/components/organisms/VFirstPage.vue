<template>
  <div class="v-first-page">
    <div class="page-container">
      <div class="logo">
        <img src="../../assets/img/logo.png">
      </div>
      <div class="">
        <v-button @click="animate = !animate">Играть</v-button>
        <v-button>Мои призы</v-button>
        <v-rules-agree type="game">и подтверждаю, что мне 18 лет</v-rules-agree>
      </div>
    </div>
  </div>
</template>
<script>
  import VButtonAgree from '../molecules/VButtonAgree'
  import VButton from '../atoms/VButton'
  import VRulesAgree from '../molecules/VRulesAgree'

  export default {
    name: 'FirstPage',
    components: {VButtonAgree, VButton, VRulesAgree},
    data() {
      return {
        animate: false
      }
    }
  }
</script>
<style lang="scss">
  .v-first-page {
    position: relative;
    padding: 128px 0 64px;
    overflow: hidden;
  }

  .page-container {
    position: relative;
    z-index: 10;
    max-width: 1100px;
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