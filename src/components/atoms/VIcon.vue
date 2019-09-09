<template>
  <div class="v-icon">
    <img :src="src">
  </div>
</template>
<script>
  import img from '../../assets/img/error.svg'
  export default {
    props: ['icon'],
    data() {
      return {
        src: '../../assets/img/error.png'
      }
    }
  }
</script>
<style lang="scss">
  .v-icon {
    width: 30px;
    height: 30px;
  }
</style>