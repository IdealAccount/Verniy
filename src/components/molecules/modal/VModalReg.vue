<template>
  <v-modal class="modal-reg">
    <h3 class="modal-reg__title">Заполните данные</h3>
    <form class="modal-form">
      <v-modal-input class="modal-reg__input" place-holder="Имя" autofocus />
      <!--<v-icon :icon="'error'"></v-icon>-->
      <v-modal-input class="modal-reg__input" type="tel" />
    </form>
    <p>
      Номер телефона нужен для входа в игру. Обещаем не присылать вам спам и не
      передавать ваш номер телефона третьим лицам.
    </p>
    <div class="v-modal-footer modal-reg__footer">
      <v-button @click="goNext" :class="{ disabled: !rules.checked }"
        >Играть</v-button
      >
      <v-rules-agree
        type="modal"
        @change="rules.checked = !rules.checked"
        :class="rules.class"
      >
        <span
          >и согласен на
          <a class="link" href="#!">обработку личных данных</a></span
        >
      </v-rules-agree>
    </div>
  </v-modal>
</template>
<script>
import VModal from "./VModal";
import VModalInput from "./VModalInput";
import VRulesAgree from "../../molecules/VRulesAgree";
import VButton from "../../atoms/VButton";

export default {
  name: "VModalReg",
  props: ["routerPush"],
  components: {
    VModal,
    VButton,
    VRulesAgree,
    VModalInput
  },
  data() {
    return {
      rules: {
        checked: false,
        class: null
      }
    };
  },
  methods: {
    goNext() {
      if (!this.rules.checked) {
        this.rules.class = "animate-shake";
        setTimeout(() => {
          this.rules.class = null;
        }, 800);
        return;
      }
      this.$router.push("code");
    }
  }
};
</script>
<style lang="scss">
@function calc-w($amount) {
  @return ($amount / 1920) * 100vmax;
}
.modal-reg {
  margin: 0 auto;
  &__input:not(:last-child) {
    margin-bottom: calc-w(57);
  }
  .v-modal__body {
    /*max-width: calc-w(522);*/
  }
  p {
    width: 70%;
    text-align: center;
    font-size: calc-w(16);
  }
  &__footer {
    margin-top: calc-w(66);
  }
}
.modal-form {
  width: 100%;
  margin-top: calc-w(166);
  margin-bottom: 45px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .v-modal.modal-reg p {
    width: 89%;
    font-size: 10px;
    line-height: 12px;
  }
  .modal-form {
    margin-top: 35px;
    margin-bottom: 18px;
  }
  .modal-reg__input:not(:last-child) {
    margin-bottom: 36px;
  }
}
</style>