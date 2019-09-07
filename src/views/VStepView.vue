<template>
  <div class="v-step-view">
    <v-modal></v-modal>
  </div>
</template>
<script>
  import VModal from '../components/templates/VModal'
  export default {
    components: { VModal },
  }
</script>
<style lang="scss">
  .v-step-view {
    position: relative;
    min-height: 100vh;
    background: #F37032 url('../assets/img/bg-decor.png') center / contain;
    overflow: hidden;
  }
</style>