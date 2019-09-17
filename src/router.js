import Vue from "vue";
import Router from "vue-router";
import VFirstPage from './components/organisms/VFirstPage'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: VFirstPage
    },
    {
      path: "/start",
      name: "start",
      component: () => import("./components/organisms/VFirstPage.vue")
    },
    {
      path: "/registration",
      name: "registration",
      component: () => import("./components/molecules/modal/VModalReg.vue")
    },
    {
      path: "/code",
      name: "code",
      component: () => import("./components/molecules/modal/VModalCode.vue")
    },
    {
      path: '/scan/:id',
      component: () => import("./components/organisms/VScreenScan.vue")
    },
    {
      path: "/qrcode",
      name: "qrcode",
      component: () => import("./components/organisms/VScreenScan.vue")
    },
    {
      path: "/game",
      name: "game",
      component: () => import("./components/organisms/VScreenGame.vue")
    },
    {
      path: "/screen5",
      name: "screen5",
      component: () => import("./components/organisms/VScreen5.vue")
    },
    {
      path: "/rules",
      name: "rules",
      component: () => import("./components/molecules/modal/VModalRules.vue")
    }
  ]
});
