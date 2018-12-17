import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
let Root = "http://ecard.twtstudio.wang/api";
Vue.http.options.root = Root;

Vue.store = Vue.prototype.store = {
  reqConfig: { credentials: true }

};

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
