import Vue from "vue";
import Router from "vue-router";
// import VStepView from './views/VView'
import VModalReg from './components/organisms/VModalReg'
import VFirstPage from './components/organisms/VFirstPage'
import Screen6 from './components/organisms/Screen6'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Screen6
    },
    {
      path: "/registration",
      name: "registration",
      component: () => import("./components/organisms/VModalReg.vue")
    },
    {
      path: "/code",
      name: "code",
      component: () => import("./components/organisms/VModalCode.vue")
    },
    {
      path: "/qrcode",
      name: "qrcode",
      component: () => import("./components/organisms/VModalQr.vue")
    },
    {
      path: "/game",
      name: "game",
      component: () => import("./components/organisms/VGame.vue")
    },
    {
      path: "/screen6",
      name: "screen6",
      component: () => import("./components/organisms/Screen6.vue")
    }
  ]
});
