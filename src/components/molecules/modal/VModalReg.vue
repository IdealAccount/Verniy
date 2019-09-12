<template>
  <v-modal class="modal-reg">
    <h3 class="modal-reg__title">Заполните данные</h3>
    <form class="modal-form">
      <v-modal-input class="modal-reg__input" place-holder="Имя"/>
      <!--<v-icon :icon="'error'"></v-icon>-->
      <v-modal-input class="modal-reg__input" type="tel"/>
    </form>
    <p>Номер телефона нужен для входа в игру. Обещаем
      не присылать вам спам и не передавать ваш номер
      телефона третьим лицам.</p>
    <div class="modal-reg__footer">
      <v-button @click="$router.push('code')">Играть</v-button>
      <v-rules-agree type="modal">
        <span>и согласен на <a href="#!">обработку личных данных</a></span>
      </v-rules-agree>
    </div>

  </v-modal>
</template>
<script>
  import VModal from './VModal'
  import VModalInput from './VModalInput'
  import ButtonAgree from '../VButtonAgree'
  import VRulesAgree from '../VRulesAgree'
  import VButton from '../../atoms/VButton'

  export default {
    name: 'VModalReg',
    props: ['routerPush'],
    components: {
      VModal,
      ButtonAgree,
      VButton,
      VRulesAgree,
      VModalInput
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
    .v-modal__body {
      max-width: 522px;
    }
    &__footer {
      margin-top: 66px;
    }
  }
  .modal-form {
    width: 100%;
    margin-top: 166px;
    margin-bottom: 45px;
  }
</style>