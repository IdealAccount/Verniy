<template>
  <div class="v-icon">
    <img :src="'../../assets/img/check.svg'">
  </div>
</template>
<script>
  export default {
    props: {
      icon: {
        type: String,
        default: 'check'
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