<template>
  <div class="v-input-wrapper">
    <slot></slot>
    <input v-if="type === 'text'"
           class="v-input"
           :placeholder="placeHolder"
           maxlength="20"
    >
    <div class="v-input-tel" v-else-if="type === 'tel'">
      <span>
        <img class="v-input-img" src="../../assets/img/phone.svg">
      </span>
      <input class="v-input"
             type="tel"
             placeholder="+7(  )"
             pattern="+7([0-9]{3})-[0-9]{3}-[0-9]{4}"
      >
    </div>
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
      type: {
        type: Boolean,
        default: 'text',
      }
    },
    components: {VIcon}
  }
</script>
<style lang="scss">
  .v-input-wrapper {
    position: relative;
    width: 100%;
    border-bottom: 1px solid rgba(32, 32, 32, .8);
  }

  .v-input {
    width: 100%;
    background: none;
    border: none;
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
    &-tel {
      display: flex;
      .v-input {
        padding-left: 30px;
        &::placeholder {
          font-size: 26px;
          color: rgba(#000, .5);
          letter-spacing: .22em;
        }
      }
      span {
        display: flex;
        align-items: center;
        vertical-align: middle;
        padding-bottom: 19px;
        padding-top: 6px;
      }
    }
    &-img {
      vertical-align: middle;
      height: 100%;
      padding: 0px 30px 0 10px;
      border: 0 solid;
      border-right-width: 1px;
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