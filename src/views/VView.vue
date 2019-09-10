<template>
  <div class="v-view">
    <router-view></router-view>
  </div>
</template>
<script>
  import VModal from '../components/templates/VModal'
  import VFirstPage from '../components/organisms/VFirstPage'
  import VGame from '../components/organisms/VGame'
  export default {
  }
</script>
<style lang="scss">
  .v-view {
    position: relative;
    min-height: 100vh;
    background: #F37032 url('../assets/img/bg-decor.png') center / contain;
    overflow: hidden;
  }
</style>