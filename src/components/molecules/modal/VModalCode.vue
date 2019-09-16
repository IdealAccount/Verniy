<template>
  <v-modal class="modal-code">
    <h3 class="modal-code__title">Код подтверждения</h3>
    <form class="form-code" :class="{notValid: notFull}" @blur="validate" tabindex="0">
      <!--<v-input-code v-for="n in 4" :key="n"></v-input-code>-->
      <!--           :class="{valid: isValid, 'no-valid': noValid}"
-->
      <div v-for="n in 4"
           class="v-input-code-wrap"
           :codeNum="codeNum"
           :key="n"
      >
        <input
          class="v-input-code"
          type="text"
          maxlength="1"
          ref="input"
          v-model="codeNum[n]"
        >
      </div>
    </form>
    <p>Запросить код подтверждения повторно через {{timer}}</p>
    <div class="v-modal-footer">
      <v-button @click="$router.push('game')" :is-disabled="disabled">Готово!</v-button>
    </div>
  </v-modal>
</template>
<script>
  import {mapActions} from 'vuex'
  import VModal from './VModal'
  import VButton from '../../atoms/VButton'
  import VInputCode from '../../atoms/VInputCode'

  export default {
    name: 'VModalCode',
    components: {VModal, VButton, VInputCode},
    data() {
      return {
        timer: 20,
        codeNum: [],
        notFull: null,
      }
    },
    updated() {
      // console.log(this.code)
    },
    mounted() {
      console.log(this.notFull)
    },
    computed: {
      code() {
        return this.codeNum.join('')
      },
      disabled() {
        return +this.code === 1234 ? false : true
      }
    },
    watch: {
      codeNum() {
        this.autoFocus();
      }
    },
    methods: {
      ...mapActions(['changeType']),
      autoFocus() {
        let inputs = this.$refs.input;
        let length = inputs.length;
        inputs.forEach((item, i,arr) => {
          // item.value = item.value.replace(/[^0-9]/, "");

          // if (!item.value) {
          //   return item.focus();
          // }
          if (item.value) {
            if (i !== length - 1) {
              arr[i + 1].focus();
            }
            item.parentElement.classList.add('filled')
          } else {
            item.parentElement.classList.remove('filled')
          }
        })
        for (let i = 0; i < length; i++) {
          if (!inputs[i].value) {
            inputs[i].focus();
            break;
          }
        }
        // inputs.some((item, i) => {
        //   if (!item.value) {
        //     item.focus();
        //   }
        // })
      },
      validate() {
        this.codeNum.length < 4 ? this.notFull = true : this.notFull = false
        console.log(this.notFull)
      }
    }
  }
</script>
<style lang="scss">
  .modal-code {
    max-width: 500px;
    width: 100%;
    .v-button {
      margin-top: 142px;
    }
  }

  .form-code {
    display: flex;
    margin-top: 133px;
    margin-bottom: 35px;
  }
  .v-input-code-wrap {
    position: relative;
    width: 95px;
    height: 84px;
    &:not(:last-child) {
      margin-right: 40px;
    }
    &:before {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      display: block;
      width: 100%;
      height: 6px;
      background: #777;
    }
    &.filled:before {
      background: #ffb600;
    }
    &.no-valid:before {
      background: #ff0000;
    }
  }
  .v-input-code {
    width: 100%;
    height: 100%;
    font-size: 60px;
    color: #000;
    background: none;
    border: none;
    text-align: center;
  }
</style>