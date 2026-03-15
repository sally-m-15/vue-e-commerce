import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./guards";
import { useAuthStore } from "@/composables/services/useAuthApi";
import { adminRoutes } from "./adminRouter";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:
  [...routes, ...adminRoutes]
});

router.beforeEach((to, from) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.isloggedIn) {
    return { name: "sign-in" };
  }

  if ((to.name === "sign-in" || to.name === "sign-up") && auth.isloggedIn) {
    return { name: "home" };
  }
});

export default router;