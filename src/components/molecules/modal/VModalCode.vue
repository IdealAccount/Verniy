<template>
  <v-modal class="modal-code">
    <h3 class="modal-code__title">Код подтверждения</h3>
    <form class="form-code">
      <v-input-code v-for="n in 4" :key="n"></v-input-code>
    </form>
    <p>Запросить код подтверждения повторно через {{timer}}</p>
    <div class="modal-code__footer">
      <v-button @click="$router.push('game')">Готово!</v-button>
    </div>
  </v-modal>
</template>
<script>
  import {mapActions} from 'vuex'
  import VModal from './VModal'
  import VButton from '../../atoms/VButton'
  import VInputCode from '../../atoms/VInputCode'

  export default {
    name: 'VModalCode',
    components: {VModal, VButton, VInputCode},
    data() {
      return {
        timer: 20
      }
    },
    mounted() {
    },
    methods: {
      ...mapActions(['changeType'])
    }
  }
</script>
<style lang="scss">
  .modal-code {
    max-width: 500px;
    width: 100%;
    .v-button {
      margin-top: 142px;
    }
  }

  .form-code {
    display: flex;
    margin-top: 133px;
    margin-bottom: 35px;
  }
</style>