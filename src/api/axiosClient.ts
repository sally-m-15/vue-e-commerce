import { useAuthStore } from "@/composables/services/useAuthApi";
import axios from "axios";
import { toast } from "vue3-toastify";

const api = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1",
});

const optimizeImageUrl = (url: string) => {
  if (url && url.includes('routemisr.com')) {
    return `https://wsrv.nl/?url=${url}&w=450&output=webp&q=80`;
  }
  return url;
};

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

api.interceptors.response.use((response) => {
  const data = response.data?.data;

  if (data) {
    if (Array.isArray(data)) {
      data.forEach((item: any) => {
        if (item.imageCover) item.imageCover = optimizeImageUrl(item.imageCover);
        if (item.image) item.image = optimizeImageUrl(item.image);
        if (item.images) item.images = item.images.map(optimizeImageUrl);
      });
    } 
    else {
      if (data.imageCover) data.imageCover = optimizeImageUrl(data.imageCover);
      if (data.images) data.images = data.images.map(optimizeImageUrl);
    }
  }
  return response;
});

export function handleApiError(err: any) {
  toast(err.response?.data?.message || "Something went wrong");
}

export default api;
