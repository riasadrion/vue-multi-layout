import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./pages/Login.vue"),
      meta: {
        layout: "Auth"
      }
    },
    {
      path: "/home",
      component: () => import("./pages/Home.vue")
    }
  ]
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
