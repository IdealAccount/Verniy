<template>
  <v-screen-5 class="v-screen-game" :rotate="rotate" :animate="animate">
    <div class="content">
      <div class="logo-mini">
        <img src="../../assets/img/logo-mini.png" alt="" />
      </div>
      <div class="container" v-if="type === 'scan'">
        <v-button @click="rotateRoulette" :is-disabled="disabled && animate"
          >Крутить колесо!</v-button
        >
        <!--<v-button>Крутить колесо!</v-button>-->
        <span class="link" @click="type = 'download'">Отсканировать чек</span>
      </div>
      <div class="container down-load" v-if="type === 'download'">
        <v-button>Загрузить фото чека</v-button>
        <v-button>Сделать фотографию</v-button>
        <v-button @click="$router.push({ path: '/scan/qrcode' })"
          >Ввести данные чека вручную</v-button
        >
      </div>
    </div>
  </v-screen-5>
</template>
<script>
import VScreen5 from "./VScreen5";
import VButton from "../atoms/VButton";

export default {
  components: {
    VButton,
    VScreen5
  },
  data() {
    return {
      animate: false,
      disabled: false,
      rotate: {},
      type: "scan"
    };
  },

  computed: {
    deg() {
      let deg = (360 / 1000) * this.delay;
      if (deg % 45 === 0) deg += 5;
      return Math.floor(deg);
    },
    delay() {
      return Math.floor(2000 + Math.random() * (3001 - 2000));
    }
  },
  methods: {
    rotateRoulette() {
      if (this.animate) return;
      this.disabled = true;
      this.animate = true;
      if (document.documentElement.clientWidth <= 768) {
        this.rotate = {
          transition: `transform ${this.delay}ms`,
          transform: `translate(-50%, -72%) rotate(${this.deg}deg)`
        };
      } else {
        this.rotate = {
          transition: `transform ${this.delay}ms`,
          transform: `translateY(-50%) rotate(${this.deg}deg)`
        };
      }
    }
  }
};
</script>
<style lang="scss">
@function calc-w($amount) {
  @return ($amount / 1920) * 100vmax;
}

.v-screen-game {
  .container {
    width: calc-w(710);
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /*justify-content: center;*/
    /*padding-bottom: calc-w(150);*/
    &.down-load {
      .v-button {
        font-size: calc-w(45);
      }
    }
  }
  .link {
    font-size: calc-w(50);
    font-weight: bold;
    color: #fff;
    &:not(:last-child) {
      margin-bottom: calc-w(50);
    }
    &:before {
      background: #fff;
    }
  }
  .v-balls {
    max-width: calc-w(662);
    top: 50%;
    transform: translateY(-50%);
    max-height: 1080px;
  }
  .ball-top {
    left: 0;
    top: 19px;
    max-width: calc-w(346);
  }
  .ball-bottom {
    bottom: -327px;
    right: 5px;
    max-width: calc-w(287);
  }
}

.logo-mini {
  /*margin-bottom: calc-w(200);*/
}

.v-control {
  position: absolute;
  z-index: 30;
  display: flex;
  align-items: center;
  height: 70px;
  right: 60px;
  top: 21px;
  div {
    cursor: pointer;
  }
  &__sound {
    margin-right: 25px;
    img {
      display: block;
    }
  }
}

.roulette-wrapper {
  position: relative;
  max-width: calc-w(601.5);
  width: 100%;
  flex-shrink: 0;
}

.roulette-pointer {
  position: absolute;
  right: calc-w(29);
  top: 50%;
  max-width: calc-w(138);
  width: 100%;
  transform: translate(100%, -50%) rotate(-90deg);
  img {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .v-screen-game {
    .container {
      align-items: center;
      width: 100%;
      margin: 0;
    }
  }
}
</style>
