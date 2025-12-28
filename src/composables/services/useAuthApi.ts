import { useRouter } from "vue-router";
import { hashData } from "./useAuthData";
import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { IUserData } from "@/types/userInterface";
import api, { handleApiError } from "@/api/axiosClient";
import { useCartStore } from "@/api/cart";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const status = ref<string>("");
  const token = ref<string>("");
  const isLoading = ref<boolean>(false);
  const user = ref<IUserData | undefined>(undefined);

  const isloggedIn = computed(() => {
    return !!token.value;
  });

  async function registerUserValue(values: any) {
    status.value = "";
    isLoading.value = true;
    try {
      const res = await api.post("/auth/signup", values);
      const phoneToHash = await hashData(values.phone);
      const passwordToHash = await hashData(values.password);
      localStorage.setItem("phone", phoneToHash);
      localStorage.setItem("password", passwordToHash);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      user.value = res.data.user;
       token.value = res.data.token;
      router.push({ name: "home" });
    } catch (error: any) {
      if (error.response?.status === 409) {
        status.value =
          error.response?.data?.message || "This email is already registered.";
      }
    } finally {
      isLoading.value = false;
    }
  }

  async function loginUserValue(values: any) {
    status.value = "";
    isLoading.value = true;

    try {
      const res = await api.post("/auth/signin", values);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      token.value = res.data.token;
      user.value = res.data.user;
    } catch (err: any) {
      if (err.response?.status === 401) {
        status.value =
          "This email is not registered. Please check and try again.";
      }else{
        handleApiError(err)
      }
    } finally {
      isLoading.value = false;
    }
  }

  function getDataFromLocalStorage() {
    if (localStorage.getItem("token")) {
      token.value = localStorage.getItem("token")!;
    }
    if (localStorage.getItem("user")) {
      user.value = JSON.parse(localStorage.getItem("user")!);
    }
  }

  function logOut() {
    const cartStore = useCartStore();
    token.value = "";
    user.value = undefined;
    cartStore.resetCart();
    delete api.defaults.headers.token;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push({ name: "sign-in" });
  }

  return {
    status,
    token,
    isLoading,
    isloggedIn,
    user,
    registerUserValue,
    loginUserValue,
    getDataFromLocalStorage,
    logOut,
  };
});
