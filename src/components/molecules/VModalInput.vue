<template>
  <div class="v-input-wrapper">
    <slot></slot>
    <input class="v-input"
           :placeholder="placeHolder"
           maxlength="20"
    >
    <span class="v-input-error" v-if="unValid">
      Обязательно для заполнения
    </span>
  </div>
</template>
<script>
  import VIcon from '../atoms/VIcon'

  export default {
    props: {
      unValid: Boolean,
      placeHolder: String,
    },
    components: { VIcon }
  }
</script>
<style lang="scss">
  .v-input-wrapper {
    position: relative;
    width: 100%;
  }

  .v-input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(32, 32, 32, .8);
    padding: 6px 8px 19px;
    color: #545454;
    font-size: 26px;
    letter-spacing: .1em;
    &::placeholder {
      color: rgba(0, 0, 0, .3);
    }
    &-icon {
      position: absolute;
      top: 0;
      right: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 50%;
      &.error {
        background: none;
        border-radius: 0;
      }
    }
    &-error {
      position: absolute;
      bottom: -2px;
      left: 0;
      font-size: 12px;
      color: #ff1f1f;
    }
  }
</style>