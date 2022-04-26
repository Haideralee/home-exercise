import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/home"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/user"),
    },
    {
      path: "/summary",
      name: "summary",
      // beforeEnter: authGuard,
      component: () => import("../views/summary"),
    },
    {
      path: "/error",
      name: "error",
      component: () => import("../views/error"),
    },
  ],
});
