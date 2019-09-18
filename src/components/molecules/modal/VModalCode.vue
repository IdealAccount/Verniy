<template>
  <v-modal class="modal-code">
    <h3 class="modal-code__title">Код подтверждения</h3>
    <form
      class="form-code"
      :class="{ notValid: notFull }"
      @blur="validate"
      tabindex="0"
    >
      <!--<v-input-code v-for="n in 4" :key="n"></v-input-code>-->
      <!--           :class="{valid: isValid, 'no-valid': noValid}"
-->
      <div v-for="n in 4" class="v-input-code-wrap" :codeNum="codeNum" :key="n">
        <input
          class="v-input-code"
          type="text"
          maxlength="1"
          ref="input"
          v-model="codeNum[n]"
        />
      </div>
    </form>
    <p>Запросить код подтверждения повторно через {{ timer }}</p>
    <v-button @click="$router.push('game')" :is-disabled="disabled"
      >Готово!</v-button
    >
  </v-modal>
</template>
<script>
import { mapActions } from "vuex";
import VModal from "./VModal";
import VButton from "../../atoms/VButton";

export default {
  name: "VModalCode",
  components: { VModal, VButton },
  data() {
    return {
      timer: 20,
      codeNum: [],
      notFull: null
    };
  },
  computed: {
    code() {
      return this.codeNum.join("");
    },
    disabled() {
      return this.code.length < 4 ? true : false;
    }
  },
  watch: {
    codeNum() {
      this.autoFocus();
    }
  },
  methods: {
    ...mapActions(["changeType"]),
    autoFocus() {
      let inputs = this.$refs.input;
      let length = inputs.length;
      inputs.forEach((item, i, arr) => {
        // item.value = item.value.replace(/[^0-9]/, "");

        // if (!item.value) {
        //   return item.focus();
        // }
        if (item.value) {
          if (i !== length - 1) {
            arr[i + 1].focus();
          }
          item.parentElement.classList.add("filled");
        } else {
          item.parentElement.classList.remove("filled");
        }
      });
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
      this.codeNum.length < 4 ? (this.notFull = true) : (this.notFull = false);
    }
  }
};
</script>
<style lang="scss">
@function calc-w($amount) {
  @return ($amount / 1920) * 100vmax;
}
.modal-code {
  width: 100%;
  max-height: 650px;
  height: 100%;
  .v-button {
    margin-top: 142px;
  }
}

.form-code {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 133px;
  margin-bottom: 35px;
}
.v-input-code-wrap {
  position: relative;
  width: 95px;
  height: 84px;
  &:before {
    content: "";
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
@media (min-width: 769px) {
  .modal-code {
    .form-code {
      margin-top: 106px;
    }
    .v-button {
      margin-top: 109px;
    }
  }
}
@media (max-width: 540px) {
  .modal-code {
    height: auto;
    max-height: 100%;
    p {
      font-size: 14px;
      width: 80%;
    }
    .v-button {
      margin-top: 15px;
    }
  }
  .form-code {
    margin-top: 38px;
  }
  .v-input-code-wrap {
    width: calc-w(95);
    height: calc-w(84);
  }
  .v-input-code {
    font-size: calc-w(60);
  }
}
</style>
