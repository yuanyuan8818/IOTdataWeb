import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

// 避免重复点击路径报错bug
const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: resolve => require(["@/views/Home.vue"], resolve)
    }
  ]
});
