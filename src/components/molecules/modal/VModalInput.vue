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
        <img class="v-input-img" src="../../../assets/img/phone.svg">
      </span>
      <input class="v-input"
             type="tel"
             placeholder="+7(  )"
      >
    </div>
    <span class="v-input-error" v-if="unValid">
      Обязательно для заполнения
    </span>
  </div>
</template>
<script>
  import VIcon from '../../atoms/VIcon'

  export default {
  //   directives('mask', {
  //   bind: function(el, binding) {
  //     let opts = {
  //       inputElement: el,
  //       placeholderChar: ' ',
  //       showMask: false,
  //       guide: false,
  //     };
  //     if (typeof binding.value === 'object') {
  //       opts = {
  //         inputElement: el,
  //         ...binding.value,
  //       };
  //     } else if (binding.value) {
  //       switch (binding.value) {
  //         case 'tel-ru':
  //           opts.mask = ['+', '7', ' ', '(', /[3489]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  //           opts.initPlaceholder = '+7 (   )';
  //           /*
  //           opts.pipe = (conformedValue, config) => {
  //             return conformedValue;
  //           };
  //           */
  //           el.addEventListener('paste', e => {
  //             let pastedData = e.clipboardData.getData('text/plain');
  //           });
  //           break;
  //
  //         default:
  //           throw new Error('Unknown mask: ', binding.value);
  //       }
  //     } else {
  //       return false;
  //     }
  //
  //     el._textMask = TextMask(opts);
  //     if (opts.initPlaceholder && !el.placeholder) {
  //       const placeholder = opts.initPlaceholder;//el._textMask.textMaskInputElement.state.previousPlaceholder;
  //       el.placeholder = placeholder;
  //       setTimeout(() => {
  //         if (!el.placeholder) {
  //           el.placeholder = placeholder;
  //         }
  //       }, 50);
  //
  //       el.addEventListener('blur', e => {
  //         el.placeholder = placeholder;
  //       });
  //       el.addEventListener('input', debounce(e => {
  //         if (!el.value) {
  //           el.placeholder = placeholder;
  //         }
  //       }, 50));
  //     }
  //   },
  // }),
    props: {
      unValid: Boolean,
      placeHolder: String,
      type: {
        type: String,
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