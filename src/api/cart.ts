import { defineStore } from "pinia";
import api, { handleApiError } from "./axiosClient";
import { toast } from "vue3-toastify";
import { ref } from "vue";
import type { CartData, CartItem, CartResponse } from "@/types/apiInterface";

export const useCartStore = defineStore("cart", () => {
  const isLoading = ref<boolean>(false);
  const cartItems = ref<CartItem[]>([]);
  const CartData = ref<CartData | null>(null);
  const numOfCartItems = ref<number>(0);

  function resetCart() {
    cartItems.value = [];
    CartData.value = null;
    numOfCartItems.value = 0;
    isLoading.value = false;
  }

  async function postCartItem(productId: string) {
    if (isLoading.value) return;
    isLoading.value = true;
    try {
      const res = await api.post<CartResponse>("/cart", { productId });
      toast(res.data.message, {
        theme: "colored",
        type: "success",
        dangerouslyHTMLString: true,
      });
      await getCartItems();
    } catch (err: any) {
      handleApiError(err);
    } finally {
      isLoading.value = false;
    }
  }

  async function getCartItems() {
    isLoading.value = true;
    try {
      const res = await api.get<CartResponse>("/cart");
      cartItems.value = res.data.data.products;
      CartData.value = res.data.data;
      numOfCartItems.value = res.data.numOfCartItems;
    } catch (err: any) {
      handleApiError(err);
    } finally {
      isLoading.value = false;
    }
  }

  async function deleteCartItems(productId: string) {
    if (isLoading.value) return;
    isLoading.value = true;
    try {
      const res = await api.delete<CartResponse>(`/cart/${productId}`);
      await getCartItems();
    } catch (err: any) {
      handleApiError(err);
    } finally {
      isLoading.value = false;
    }
  }

  async function updateCartItems(productId: string, count: number) {
    if (isLoading.value) return;
    if (count < 1) return;
    isLoading.value = true;
    try {
      const res = await api.put<CartItem>(`/cart/${productId}`, { count });
      await getCartItems();
    } catch (err: any) {
      handleApiError(err);
    } finally {
      isLoading.value = false;
    }
  }

  async function clearCart() {
    if (isLoading.value) return;
    isLoading.value = true;
    try {
      await api.delete("/cart");
      await getCartItems();
    } catch (err: any) {
      handleApiError(err);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    cartItems,
    CartData,
    isLoading,
    numOfCartItems,
    postCartItem,
    resetCart,
    getCartItems,
    deleteCartItems,
    updateCartItems,
    clearCart,
  };
});
