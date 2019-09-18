<template>
  <div class="v-screen-1">
    <div class="logo-label">
      <img src="../../assets/img/logo-label.png" alt="" />
    </div>
    <transition name="fade-left">
      <div class="container" v-if="visible">
        <div class="logo">
          <img src="../../assets/img/logo.png" />
        </div>
        <div class="controls">
          <div class="row">
            <div class="btn-wrap">
              <v-button @click="btnPlay" :class="{ disabled: !rules.checked }"
                >Играть</v-button
              >
            </div>
            <div class="btn-wrap">
              <v-button>Мои призы</v-button>
            </div>
          </div>
          <v-rules-agree
            type="game"
            @change="rules.checked = !rules.checked"
            :class="rules.class"
            >и подтверждаю, что мне 18 лет</v-rules-agree
          >
        </div>
      </div>
    </transition>
    <transition name="fade-right">
      <v-roulette v-if="visible"></v-roulette>
    </transition>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import VRoulette from "../molecules/game/VRoulette";
import VButton from "../atoms/VButton";
import VRulesAgree from "../molecules/VRulesAgree";

export default {
  name: "FirstPage",
  components: { VButton, VRulesAgree, VRoulette },
  data() {
    return {
      visible: true,
      rules: {
        checked: false,
        class: null
      }
    };
  },
  methods: {
    ...mapActions(["routerPush"]),
    btnPlay(e) {
      if (!this.rules.checked) {
        this.rules.class = "animate-shake";
        setTimeout(() => {
          this.rules.class = null;
        }, 800);
        return;
      }
      this.visible = false;
      setTimeout(() => this.$router.push("registration"), 1800);
    }
  }
};
</script>
<style lang="scss">
@function calc-w($amount) {
  @return ($amount / 1920) * 100vmax;
}
.v-screen-1 {
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  .v-roulette {
    right: calc-w(-601.5);
  }
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    padding-top: calc-w(230);
    width: 60vw;
    margin: 0 auto;
  }
  .controls {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    .row {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
  .btn-wrap {
    width: 41%;
  }
  .v-button {
    width: 90%;
  }
  .v-rules-agree {
    margin-top: calc-w(55);
  }
}
.logo-label {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.logo {
  margin-bottom: calc-w(50);
}
.fade-left-enter-active,
.fade-left-leave-active,
.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 1.6s ease-in-out;
}
.fade-left-enter,
.fade-left-leave-to {
  opacity: 0;
  transform: translateX(-200%);
}
.fade-right-enter,
.fade-right-leave-to {
  opacity: 0;
  transform: translate(50%, -50%) rotate(45deg);
}
@media (max-width: 768px) {
  .v-screen-1 {
    align-items: flex-start;
    .container {
      max-width: 660px;
      width: 100%;
      padding-top: calc-w(550);
    }
    .controls {
      .row {
        flex-direction: column;
        align-items: center;
      }
    }
    .btn-wrap {
      max-width: 280px;
      width: 100%;
      &:first-of-type {
        margin-bottom: 50px;
      }
    }
    .v-button {
      width: 100%;
      height: 70px;
      font-size: 30px;
      padding: 0;
    }
    .v-rules-agree {
      margin-top: calc-w(63);
      .checkbox-label {
        font-size: 26px;
        line-height: 30px;
        &:before {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
@media (max-width: 320px) {
  .v-screen-1 {
    .container {
      padding: 165px 20px 20px 20px;
    }
    .logo {
      margin-bottom: 50px;
    }
    .controls {
      width: 100%;
    }
    .btn-wrap {
      width: 100%;
      &:first-of-type {
        margin-bottom: 30px;
      }
    }
    .v-button {
      width: 260px;
      height: 50px;
      font-size: 20px;
    }
    .v-rules-agree {
      margin-top: 27px;
      .checkbox-label {
        font-size: 12px;
        line-height: 14px;
        &:before {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}


</style>
