<template>
  <div class="v-scroller-wrapper">
    <div class="v-scroller" ref="scroller">
      <slot></slot>
    </div>
    <div class="v-scrollbar">
      <span class="v-scrollbar__slider"></span>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['height'],
    data() {
      return {

      }
    },
    mounted() {
      console.log(this.height)
    },
  }
</script>
<style lang="scss">
  .v-scroller-wrapper {
    width: 100%;
    overflow: hidden;
  }
  .v-scroller {
    width: calc(100% + 16px);
    overflow-y: scroll;
  }
  .v-scrollbar {
    position: absolute;
    top: 0;
    right: 20px;
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