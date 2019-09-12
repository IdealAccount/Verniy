<template>
  <v-modal-body class="modal-code">
    <template #header>
      <h3>Код подтверждения</h3>
    </template>
    <template #content>
      <form class="form-code">
        <v-input-code v-for="n in 4" :key="n"></v-input-code>
      </form>
    </template>
    <template #description>
      Запросить код подтверждения повторно через {{timer}}
    </template>
    <template #footer>
      <v-button @click="$router.push('game')">Готово!</v-button>
    </template>
  </v-modal-body>
</template>
<script>
  import {mapActions} from 'vuex'
  import VModalBody from '../molecules/modal/VModalBody'
  import VButton from '../atoms/VButton'
  import VInputCode from '../atoms/VInputCode'

  export default {
    name: 'VModalCode',
    components: {VModalBody, VButton, VInputCode},
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