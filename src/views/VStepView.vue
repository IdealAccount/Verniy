<template>
  <div class="v-step-view">
    <v-modal-view>
      <template #header>
        <h3>Заполните данные</h3>
      </template>
        <v-modal-reg></v-modal-reg>
      <template #footer>

      </template>
    </v-modal-view>
  </div>
</template>
<script>
  import VModalView from '../components/templates/VModalView'
  import VModalReg from '../components/organisms/VModalReg'
  export default {
    components: { VModalView, VModalReg },
    methods: {
    }
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