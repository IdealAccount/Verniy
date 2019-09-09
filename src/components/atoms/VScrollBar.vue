<template>

</template>
<script>
  export default {
    props: ['scrollHeight'],
    data() {
      return {

      }
    },
    mounted() {
      console.log(this.height)
    },
    computed: {
      height() {
        return 700 / document.querySelector('.v-scroller').children[0].offsetHeight * 100;
      }
    }
  }
</script>
<style lang="scss">

</style>