<template>
  <div class="v-modal-registration">
    <form class="v-form-reg">
      <v-modal-input class="v-input-name" place-holder="Имя"/>
      <v-modal-input class="v-input-number" place-holder="Телефон"/>
    </form>
    <p class="v-modal-description">
      Номер телефона нужен для входа в игру. Обещаем
      не присылать вам спам и не передавать ваш номер
      телефона третьим лицам.
    </p>
    <template #footer>
      <v-button>Играть</v-button>
    </template>
  </div>
</template>
<script>
  import VModalInput from '../molecules/VModalInput'
  import VButton from '../atoms/VButton'

  export default {
    name: 'VModalRegistration',
    components: {VModalInput, VButton}
  }
</script>
<style lang="scss">
  .v-modal-registration {
    max-width: 522px;
    width: 100%;
    margin: 40px auto 0;
  }

  .v-modal-description {
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    font-size: 16px;
    color: #7d7d7d;
  }

  .v-form-reg {
    margin-bottom: 45px;
  }
</style>