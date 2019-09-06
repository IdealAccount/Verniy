<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import VStepView from './views/VStepView'
  export default {
    components: { VStepView }
  }
</script>

<style lang="scss">
  @import "./assets/styles/main";
  body {
    font-size: 16px;
  }
</style>
