<template>
  <div class="btn-agree-container">
    <div class="v-button-wrap">
      <slot></slot>
    </div>
    <div class="v-agree-wrap">
      <slot name="agree"></slot>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="scss">
  .btn-agree-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .v-button-wrap {
    display: flex;
    justify-content: space-between;
  }
</style>