<template>
  <v-modal-body class="modal-reg">
    <template #header>
      <h3 class="modal-reg__title">Заполните данные</h3>
    </template>
    <template #content>
      <form class="form-reg">
        <v-modal-input class="modal-reg__input" place-holder="Имя">
          <v-icon :icon="'error'"></v-icon>
        </v-modal-input>
        <v-modal-input class="modal-reg__input" place-holder="Телефон"/>
      </form>
    </template>
    <template #description>
      Номер телефона нужен для входа в игру. Обещаем
      не присылать вам спам и не передавать ваш номер
      телефона третьим лицам.
    </template>
    <template #footer>
      <div class="modal-reg__footer">
        <v-button @click="changeType('VModalCode')">Играть</v-button>
        <v-rules-agree type="modal">
          <span>и согласен на <a href="#!">обработку личных данных</a></span>
        </v-rules-agree>
      </div>
    </template>
  </v-modal-body>
</template>
<script>
  import {mapActions} from 'vuex'

  import VModalInput from '../molecules/VModalInput'
  import VModalBody from '../molecules/VModalBody'
  import ButtonAgree from '../molecules/VButtonAgree'
  import VButton from '../atoms/VButton'
  import VIcon from '../atoms/VIcon'
  import VRulesAgree from '../molecules/VRulesAgree'

  export default {
    name: 'VModalReg',
    components: {
      VModalInput,
      VModalBody,
      ButtonAgree,
      VButton,
      VRulesAgree,
      VIcon
    },
    methods: {
      ...mapActions(['changeType']),
    },
  }
</script>
<style lang="scss">
  .modal-reg {
    max-width: 522px;
    width: 100%;
    margin: 0 auto;
    &__input:not(:last-child) {
      margin-bottom: 57px;
    }
    &__footer {
      margin-top: 66px;
    }
  }

  .form-reg {
    width: 100%;
    margin-top: 166px;
    margin-bottom: 45px;
  }
</style>