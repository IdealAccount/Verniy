<template>
  <div class="v-game-view">
    <v-roulette></v-roulette>
    <!--<div class="container">-->
      <!--<span class="logo-mini">-->
        <!--<img src="../../assets/img/logo-mini.png">-->
      <!--</span>-->
      <!--<v-button>Крутить колесо!</v-button>-->

    <!--</div>-->
    <!--<v-balls class="v-game_balls"></v-balls>-->
  </div>
</template>
<script>
  import VRoulette from '../molecules/game/VRoulette'
  import VBalls from '../molecules/VBalls'
  import VButton from '../atoms/VButton'
  export default {
    components: { VRoulette, VBalls, VButton }
  }
</script>
<style lang="scss">
  .v-game-view {
    display: flex;
    .v-roulette {
      transform: translate(-50%, -20%);
      flex-shrink: 0;
      img {
        display: block;
      }
    }
    .container {
      width: 100%;
    }

    .v-balls {
      right: 0;
    }
  }

</style>