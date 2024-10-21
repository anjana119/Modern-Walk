import Vue from "vue";
import Router from "vue-router";

const MainContainer = () => import("@/container/MainContainer");

const dashBoard = () => import("@/views/pages/DashBoard");
const mensclothing = () => import("@/views/pages/mensclothing");
const womensclothing = () => import("@/views/pages/womensclothing");

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkActiveClass: "",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      redirect: "/dash-board",
      component: MainContainer,
      children: [
        {
          path: "/dash-board",
          name: "dashBoard",
          component: dashBoard
        },
        {
          path: "/mens-clothing",
          name: "mensclothing",
          component: mensclothing
        },
        {
          path: "/womens-clothing",
          name: "womensclothing",
          component: womensclothing
        }
      ]
    },
    {
      path: "/",
      redirect: "/404",
      name: "Pages",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: []
    }
  ]
});

export default router;
