import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
var Root = "http://172.23.87.232:3000/api";
Vue.http.options.root = Root;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
