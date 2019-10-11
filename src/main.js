import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import echarts from "echarts";
import "./plugins/element.js";
import "@/assets/scss/app.scss";
import "./mock/mock.js";

Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
