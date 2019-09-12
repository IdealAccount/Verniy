<!--<template>-->
  <!--<div class="screen-6">-->
    <!--<div class="v-control">-->
      <!--<div class="v-control__sound" @click="soundOn = !soundOn">-->
        <!--<img src="../../assets/img/sound_on.svg" v-if="soundOn">-->
        <!--<img src="../../assets/img/sound_off.svg" v-if="!soundOn">-->
      <!--</div>-->
      <!--<div class="v-control__window">-->
        <!--<img src="../../assets/img/window.svg">-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="roulette-wrapper">-->
      <!--<v-roulette :style="animate ? rotate : ''"></v-roulette>-->
      <!--<span class="roulette-pointer">-->
        <!--<img src="../../assets/img/pointer.svg" alt="">-->
      <!--</span>-->
    <!--</div>-->
    <!--<div class="content">-->
      <!--<div class="logo-mini">-->
        <!--<img src="../../assets/img/logo-mini.png" alt="">-->
      <!--</div>-->
      <!--<div class="container" v-if="type === 'scan'">-->
        <!--<v-button @click="rotateRoulette" :is-disabled="disabled && animate">Крутить колесо!</v-button>-->
        <!--&lt;!&ndash;<v-button>Крутить колесо!</v-button>&ndash;&gt;-->
        <!--<span class="link" @click="type = 'download'">Отсканировать чек</span>-->
      <!--</div>-->
      <!--<div class="container down-load" v-if="type === 'download'">-->
        <!--<v-button>Загрузить фото чека</v-button>-->
        <!--<v-button>Сделать фотографию</v-button>-->
        <!--<v-button @click="$router.push('qrcode')">Ввести данные чека вручную</v-button>-->
      <!--</div>-->
    <!--</div>-->
    <!--<v-balls></v-balls>-->
  <!--</div>-->
<!--</template>-->