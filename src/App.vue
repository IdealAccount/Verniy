<template>
  <div id="app">
    <v-view></v-view>
  </div>
</template>
<script>
  import VView from './views/VView'
  export default {
    components: { VView }
  }
</script>

<style lang="scss">
  @import "./assets/styles/main";
  body {
    font-size: 16px;
  }
</style>
