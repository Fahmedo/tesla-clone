import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Homeview.vue";
import ModelView from "../views/ModelView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/model/:id",
      name: "model",
      component: ModelView,
    },
  ],
});

export default router;
