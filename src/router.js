import Vue from "vue";
import Router from "vue-router";
import VStepView from './views/VView'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "v-step-view",
      component: VStepView
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
      name: "code",
      component: () => import("./components/organisms/VModalQr.vue")
    }
  ]
});
