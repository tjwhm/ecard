import Vue from "vue";
import Router from "vue-router";
import VueResource from "vue-resource";
import Home from "./views/Home.vue";
import Detail from "./views/Detail.vue";
import Starter from "./views/Starter.vue";
import Merchant from "./views/Merchant.vue";
import BusinessStat from "./views/BusinessStat.vue";
import Admin from "./views/Admin.vue";
Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: "/",
      name: "starter",
      component: Starter
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail
    },
    {
      path: "/merchant",
      name: "merchant",
      component: Merchant
    },
    {
      path: "/business-stat",
      name: "businessStat",
      component: BusinessStat
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
