<template>
  <div class="v-scroller-wrapper">
    <div class="v-scroller">
      <slot></slot>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
  .v-scroller-wrapper {
    width: 100%;
    overflow: hidden;
  }
  .v-scroller {
    /*width: calc(100% + 16px);*/
    overflow-y: auto;

  }
  ::-webkit-scrollbar {
    width: 6px;
    &-track {
      width: 12px;
      background: #E7E7E7;
      border-radius: 5px;
    }
    &-thumb {
      border-radius: 5px;
      width: 12px;
      background: #FF711A;
    }
  }
  .v-scrollbar {
    display: flex;
    justify-content: center;
    padding: 5px 0;
    height: 100%;
    width: 12px;
    background: #e7e7e7;
    border-radius: 5px;
    &__slider {
      margin: 0 auto;
      width: 6px;
      background: #ff711a;
      border-radius: inherit;
    }
  }
</style>