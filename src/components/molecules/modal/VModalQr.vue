<template>
  <v-modal class="modal-qr">
    <h3>Введите данные чека</h3>
    <div class="row">
      <div class="v-input-wrapper modal-qr__input">
        <the-mask mask="##.##.## ##:##" class="v-input" placeholder="Дата"></the-mask>
      </div>
      <div class="v-input-wrapper modal-qr__input">
        <the-mask mask="################" class="v-input" placeholder="ФН"></the-mask>
      </div>
      <div class="v-input-wrapper modal-qr__input">
        <the-mask mask="######" class="v-input" placeholder="ФД"></the-mask>
      </div>
      <div class="v-input-wrapper modal-qr__input">
        <the-mask mask="##########" class="v-input" placeholder="ФП/ФПД"></the-mask>
      </div>
    </div>
    <p>Обработка чека может занять до 3 часов</p>
    <div class="v-modal-footer">
      <v-button class="modal-qr__button">Отправить чек</v-button>
    </div>
  </v-modal>
</template>
<script>
import VModal from "./VModal";
import VButton from "../../atoms/VButton";
import { TheMask } from "vue-the-mask"

export default {
  name: "VModalQr",
  components: {
    VModal,
    VButton,
    TheMask
  },
  data() {
    return {
      placeholder: ["Дата", "ФН", "ФД", "ФП/ФПД"]
    };
  }
};
</script>
<style lang="scss">
.modal-qr {
  h3 {
    margin-bottom: 40px;
  }
  .row {
    width: 100%;
    margin-top: 21px;
    margin-bottom: 45px;
  }
  &__input:not(:last-child) {
    margin-bottom: 31px;
  }
  &__button {
    margin-top: 40px;
  }
}
  @media (min-width: 320px) and (max-width: 767px) {

  }
</style>
