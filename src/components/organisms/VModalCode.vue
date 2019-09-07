<template>
    <v-modal-body>
      <template #header>
        <h3>Код подтверждения</h3>
      </template>
      <template #content>
        <div class="v-modal-code">
          <form class="form-code">
            <v-input-code v-for="n in 4" :key="n"></v-input-code>
          </form>
        </div>
      </template>
      <template #description>
        Запросить код подтверждения повторно через {{timer}}
      </template>
      <template #footer>
        <v-button @click="changeType('VModalReg')">Готово!</v-button>
      </template>
    </v-modal-body>
</template>
<script>
  import { mapActions } from 'vuex'
  import VModalBody from '../molecules/VModalBody'
  import VButton from '../atoms/VButton'
  import VInputCode from '../atoms/VInputCode'
  export default {
    name: 'VModalCode',
    components: { VModalBody, VButton, VInputCode },
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
  .v-modal-code {
    max-width: 500px;
    width: 100%;
  }
  .form-code {
    display: flex;
    margin-bottom: 35px;
  }
</style>