import Vue from "vue";
import Router from "vue-router";
import VStepView from './views/VStepView'

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
      path: "/about",
      name: "about",
      // component: () => import("./views/About.vue")
    }
  ]
});
