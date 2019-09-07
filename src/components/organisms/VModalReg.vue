<template>
  <div class="v-modal-reg">
    <v-modal-body>
      <template #header>
        <h3 class="v-modal-reg__title">Регистрация</h3>
      </template>
      <template #content>
        <form class="v-form-reg">
          <v-modal-input class="v-input-name" place-holder="Имя"/>
          <v-modal-input class="v-input-number" place-holder="Телефон"/>
        </form>
      </template>

      <template #description>
        Номер телефона нужен для входа в игру. Обещаем
        не присылать вам спам и не передавать ваш номер
        телефона третьим лицам.
      </template>

      <template #footer>
        <button-agree class="v-modal-reg__footer">
          <v-button @click="changeType('VModalCode')">Играть</v-button>
          <template #agree>
            <v-rules-agree type="modal">
              <span>и согласен на <a href="#!">обработку личных данных</a></span>
            </v-rules-agree>
          </template>
        </button-agree>
      </template>
    </v-modal-body>
  </div>
</template>
<script>
  import { mapActions} from 'vuex'

  import VModalInput from '../molecules/VModalInput'
  import VModalBody from '../molecules/VModalBody'
  import ButtonAgree from '../molecules/ButtonAgree'
  import VButton from '../atoms/VButton'
  import VRulesAgree from '../molecules/VRulesAgree'
  export default {
    name: 'VModalReg',
    components: {
      VModalInput,
      VModalBody,
      ButtonAgree,
      VButton,
      VRulesAgree
    },
    methods: {
      ...mapActions(['changeType']),
    },
  }
</script>
<style lang="scss">
  .v-modal-reg {
    max-width: 522px;
    width: 100%;
    margin: 0 auto;
    &__footer{
      margin-top: 66px;
    }
  }
  .v-form-reg {
    margin-top: 166px;
    margin-bottom: 45px;
  }
</style>