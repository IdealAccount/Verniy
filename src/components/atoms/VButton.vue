<template>
  <button
    :class="['v-button',{disabled: isDisabled}]"
    :disabled="isDisabled"
    @click.prevent="$emit('click')"
  >
    <slot>Играть</slot>
  </button>
</template>
<script>
  export default {
    props: { isDisabled: Boolean }
  }
</script>
<style lang="scss">
  @function calc-w($amount) {
    @return ($amount / 1920) * 100vmax
  }
  .v-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 280px;
    width: calc-w(310);
    height: 70px;
    margin: 0 auto;
    background: #ffb600;
    border-radius: 12px 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, .3);

    color: #fff;
    font-size: calc-w(30);
    font-weight: bold;

    transition: .2s ease-in;
    &:hover {
      background: #777;
    }
    &:active {
      box-shadow: none;
    }
    &.disabled {
      box-shadow: none;
    }
  }
</style>