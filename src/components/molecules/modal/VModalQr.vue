<template>
  <v-modal class="modal-qr">
    <h3>Введите данные чека</h3>
    <div class="modal-qr__content">
      <v-modal-input
        class="modal-qr__input"
        v-for="(n, i) in 4"
        :place-holder="placeholder[i]"
        :key="n"
      ></v-modal-input>
    </div>
    <p>Обработка чека может занять до 3 часов</p>
    <div class="modal-qr__footer">
      <v-button class="modal-qr__button">Отправить чек</v-button>
    </div>
  </v-modal>
</template>
<script>
  import VModal from './VModal'
  import VModalInput from './VModalInput'
  import VButton from '../../atoms/VButton'

  export default {
    name: 'VModalQr',
    components: {
      VModal,
      VButton,
      VModalInput
    },
    data() {
      return {
        placeholder: ['Дата', 'ФН', 'ФД', 'ФП/ФПД']
      }
    }
  }
</script>
<style lang="scss">
  .modal-qr {
    max-width: 522px;
    width: 100%;
    &__content {
      width: 522px;
      margin-top: 21px;
      margin-bottom: 34px;
    }
    &__input:not(:last-child) {
      margin-bottom: 31px;
    }
    &__button {
      margin-top: 27px;
    }
  }
</style>