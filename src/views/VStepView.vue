<template>
  <div class="v-step-view">
    <v-modal type="VModalReg"></v-modal>
    <!--<v-first-page></v-first-page>-->
  </div>
</template>
<script>
  import VModal from '../components/templates/VModal'
  import VFirstPage from '../components/organisms/VFirstPage'
  export default {
    components: { VModal, VFirstPage },
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