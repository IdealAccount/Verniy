<template>
  <div :class="['v-rules-agree', type]">
    <input
      class="checkbox-input"
      :id="type"
      type="checkbox"
      hidden
      :checked="isChecked"
      @change="updateInput"
    />
    <label class="checkbox-label" :for="type">
      <span
        >Я ознакомлен с
        <a class="link" href="#!" @click.prevent="$router.push('rules')"
          >правилами</a
        ></span
      >
      <br />
      <slot></slot>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    type: String,
    isChecked: {
      default: null
    }
  },
  data() {
    return {
      // isChecked: false,
    };
  },
  methods: {
    updateInput(e) {
      let isChecked = e.target.checked;

      this.$emit("change", isChecked);
    }
  }
};
</script>
<style lang="scss">
  @function calc-w($amount) {
    @return ($amount / 1920) * 100vmax;
  }
.v-rules-agree {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  &.modal {
    margin-top: 27px;
    .checkbox-input:checked ~ .checkbox-label:before {
      background: url("../../assets/img/checked-modal.svg") no-repeat center / 60%,
        #fff3e9;
    }
    .checkbox-label {
      margin-left: 24px;
      font-size: 14px;
      color: #7d7d7d;
      line-height: 16px;
      &:before {
        width: 24px;
        height: 24px;
        border-color: #f37032;
        border-radius: 4px;
        box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.1);
      }
      .link {
        color: #7d7d7d;
        &:before {
          background: #7d7d7d;
        }
      }
    }
  }
  &.game {
    .checkbox-input:checked ~ .checkbox-label:before {
      background: url("../../assets/img/checked-game.svg") no-repeat center / 60%,
        #fff3e9;
    }
    .checkbox-label {
      margin-left: calc-w(28);
      font-size: calc-w(26);
      color: #fff3e9;
      line-height: calc-w(30);
      &:before {
        width: calc-w(50);
        height: calc-w(50);
        border-color: #eaaa00;
        border-radius: 6px;
      }
      .link {
        color: #fff3e9;
        &:before {
          background: #fff3e9;
        }
      }
    }
  }
}

.checkbox {
  &-label {
    display: block;
    cursor: pointer;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-100%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff3e9;
      border: 2px solid;
      cursor: pointer;
    }
  }
}
.link {
  position: relative;
  display: inline-block;
  &:before {
    position: absolute;
    content: "";
    display: block;
    bottom: -2px;
    height: 2px;
    width: 100%;
  }
}
.animate-shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
  @media (min-width: 320px) and (max-width: 767px) {
    .v-rules-agree.modal {
      .checkbox-label {
        font-size: 10px;
        line-height: 11px;
        margin-left: 18px;
      }
    }
  }
</style>
