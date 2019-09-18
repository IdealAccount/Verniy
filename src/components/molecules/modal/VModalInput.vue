<template>
  <div class="v-input-wrapper">
    <slot></slot>
    <input
      v-if="type === 'text'"
      class="v-input"
      :placeholder="placeHolder"
      maxlength="20"
      v-focus
    />
    <div class="v-input-tel" v-else-if="type === 'tel'">
      <span>
        <img class="v-input-img" src="../../../assets/img/phone.svg" />
      </span>
      <the-mask
        class="v-input"
        mask="!+7 (###) ###-##-##"
        value="+7 ("
        type="tel"
        placeholder="+7(  )"
      ></the-mask>
      <!--<input class="v-input" :mask="'+7(###)###-##-##'" type="tel" placeholder="+7(  )" />-->
    </div>
    <!--<span class="v-input-error" v-if="unValid">-->
    <!--Обязательно для заполнения-->
    <!--</span>-->
  </div>
</template>
<script>
import { TheMask } from "vue-the-mask";

export default {
  props: {
    unValid: Boolean,
    placeHolder: String,
    autofocus: Boolean,
    type: {
      type: String,
      default: "text"
    }
  },
  components: { TheMask }
};
</script>
<style lang="scss">
@function calc-w($amount) {
  @return ($amount / 1920) * 100vmax;
}
.v-input-wrapper {
  position: relative;
  width: 100%;
  border-bottom: 1px solid rgba(32, 32, 32, 0.8);
}
.v-input {
  width: 100%;
  background: none;
  border: none;
  padding: 6px 8px 19px;
  color: #545454;
  font-size: calc-w(26);
  letter-spacing: 0.1em;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
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
        color: rgba(#000, 0.5);
        letter-spacing: 0.22em;
      }
    }
    span {
      display: flex;
      align-items: center;
      vertical-align: middle;
      padding: 8px 30px 10px 10px;
      border-right: 1px solid rgba(0,0,0,.5);
      margin-bottom: 10px;
    }
  }
  &-img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  &-error {
    position: absolute;
    bottom: -2px;
    left: 0;
    font-size: 12px;
    color: #ff1f1f;
  }
}
@media (min-width: 769px) {
  .v-input {
    font-size: 24px;
    &::placeholder {
      font-size: 24px;
    }
  }
}
@media (max-width: 320px) {
  .v-input {
    padding-bottom: 7px;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
    }
  }
  .v-input-tel {
    align-items: center;
    span {
      border: none;
      padding: 0;
      margin-bottom: 0;
    }
    .v-input {
      padding-left: 15px;
      &::placeholder {
        font-size: 16px;
      }
      &-img {
        width: 14px;
        height: 14px;
      }
    }
  }

}
</style>
