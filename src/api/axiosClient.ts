import { useAuthStore } from "@/composables/services/useAuthApi";
import axios from "axios";
import { toast } from "vue3-toastify";

const api = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1",
});

api.interceptors.request.use((config) => {
  const authStore = useAuthStore();

  const publicRoutes = ["/auth/signup", "/auth/signin"];
  const isPublic = publicRoutes.some((route) => config.url?.includes(route));

  if (!isPublic && authStore.token) {
    config.headers.token = authStore.token;
  } else {
    delete config.headers.token;
  }

  return config;
});

export function handleApiError(err: any) {
  toast(err.response?.data?.message || "Something went wrong");
}

export default api;
