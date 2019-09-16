<template>
  <v-modal class="modal-photo">
    <h3>Загрузить фотографию</h3>
    <div class="modal-photo__content">
      <picture-input
        ref="pictureInput"
        width="462"
        height="15265+"
      >

      </picture-input>
    </div>
    <p>Обработка чека может занять до 3 часов</p>
    <div class="v-modal-footer">
      <v-button class="modal-qr__button">Отправить чек</v-button>
    </div>
  </v-modal>
</template>
<script>
  import VModal from './VModal'
  import PictureInput from 'vue-picture-input'

  export default {
    components: { VModal, PictureInput },
  }
</script>