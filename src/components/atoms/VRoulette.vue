<template>
  <transition :name="`slide-${direction}`">
    <div class="roulette">
      <img src="../../assets/img/roulette-test.png">
    </div>
  </transition>
</template>
<script>
  export default {
    props: ['direction'],
  }
</script>
<style lang="scss">

</style>