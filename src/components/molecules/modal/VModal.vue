<template>
  <div class="v-modal">
    <span class="v-modal-close" @click="$router.go(-1)">
      <svg
        width="43"
        height="44"
        viewBox="0 0 43 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4649 12.8389C10.172 12.546 10.2512 11.992 10.6417 11.6015C11.0322 11.211 11.5862 11.1318 11.8791 11.4247L32.0317 31.5773C32.3245 31.8701 32.2454 32.4242 31.8549 32.8147C31.4644 33.2052 30.9103 33.2844 30.6174 32.9915L10.4649 12.8389Z"
          fill="#FF711A"
        />
        <path
          d="M11.879 32.9912C11.5861 33.284 11.0321 33.2049 10.6415 32.8144C10.251 32.4239 10.1719 31.8698 10.4647 31.5769L30.6173 11.4244C30.9102 11.1315 31.4642 11.2107 31.8547 11.6012C32.2453 11.9917 32.3244 12.5457 32.0315 12.8386L11.879 32.9912Z"
          fill="#FF711A"
        />
      </svg>
    </span>
    <div class="v-modal__body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "VModal",
  methods: {
    ...mapActions(["routerPush"])
  }
};
</script>
<style lang="scss">
@function calc-w($amount) {
  @return ($amount / 1920) * 100vmax;
}
.v-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 899px;
  width: 100%;
  /*min-width: 899px;*/
  /*min-height: 650px;*/
  padding-top: 57px;
  padding-bottom: 62px;
  background: rgba(#fff, 0.85);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &-close {
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    cursor: pointer;
  }
  h3 {
    font-size: calc-w(36);
    text-align: center;
    color: #545454;
  }
  &__body {
    max-width: 522px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: auto;
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
@media (min-width: 768px) and (max-width: 1200px) {
  .v-modal {
    min-width: 0;
    min-height: 0;
    max-width: 660px !important;
    width: 100%;
    h3 {
      font-size: 36px;
    }
    &.modal-reg {
      .v-modal__body {
        max-width: 460px;
      }
      p {
        width: 80%;
        font-size: 16px;
        color: #7d7d7d;
      }
    }

    p {
      font-size: 16px;
    }
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .v-modal {
    padding: calc-w(40);
    max-width: 87.5vw;
    transform: translateX(-50%);
    top: 80px;
    h3 {
      font-size: 16px;
    }
    .v-input {
      font-size: 16px;
      &::placeholder {
        font-size: 16px;
      }
    }
    .v-modal__body {
      max-width: 400px;
    }
    /*.v-button {*/
    /*width: 140px;*/
    /*height: 40px;*/
    /*font-size: 16px;*/
    /*padding: 0;*/
    /*}*/
  }
}
</style>
