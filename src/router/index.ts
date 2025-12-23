import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./guards";
import { useAuthStore } from "@/composables/services/useAuthApi";

const router = createRouter({
   history: createWebHashHistory(),
  routes,
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
