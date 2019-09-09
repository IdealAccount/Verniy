<template>
  <v-modal-body class="modal-qr">
    <template #header>
      <h3>Введите данные чека</h3>
    </template>
    <template #content>
      <div class="modal-qr-content">
        <v-modal-input
          class="modal-qr__input"
          v-for="(n, i) in 4"
          :place-holder="placeholder[i]"
          :key="n"
        ></v-modal-input>
      </div>
    </template>
    <template #description>
      Обработка чека может занять до 3 часов
    </template>
    <template #footer>
      <v-button class="modal-qr__button">Отправить чек</v-button>
    </template>
  </v-modal-body>
</template>
<script>
  import VModalBody from '../molecules/VModalBody'
  import VModalInput from '../molecules/VModalInput'
  import VButton from '../atoms/VButton'

  export default {
    name: 'VModalQr',
    components: {
      VModalBody,
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
    &-content {
      width: 100%;
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