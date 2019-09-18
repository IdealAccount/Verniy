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
  }
  .link {
    font-size: calc-w(50);
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: calc-w(50);
    }
    &:before {
      background: #fff;
    }
  }
}


  @media (min-width: 320px) and (max-width: 768px) {
    .v-screen-game {
      .container {
        align-items: center;
        width: 100%;
        margin: 0;
      }
    }
  }
  @media (max-width: 460px) {
    .v-screen-game {
      .link {
        font-size: 16px;
      }
    }
  }
</style>
