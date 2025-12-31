import { defineStore } from "pinia";
import api, { handleApiError } from "./axiosClient";
import { toast } from "vue3-toastify";
import { ref } from "vue";
import type {
  GetWishlistResponse,
  WishlistProduct,
  WishlistResponse,
} from "@/types/apiInterface";

export const useWishlistStore = defineStore("wishlist", () => {
  const isLoading = ref<boolean>(false);
  const  LoadingId = ref<string | null > (null)
  const likedProducts = ref<Set<string>>(new Set());
  const wishList = ref<WishlistProduct[]>([]);

  async function postWishList(productId: string) {
    LoadingId.value = productId;
    try {
      const res = await api.post<WishlistResponse>("/wishlist", { productId });
      toast(res.data.message, {
        theme: "colored",
        type: "success",
        dangerouslyHTMLString: true,
      });
      likedProducts.value.add(productId);
      await getWishList();
    } catch (err: any) {
      handleApiError(err);
    } finally {
      LoadingId.value = null;
    }
  }

  async function getWishList() {
    if (wishList.value.length === 0) {
       isLoading.value = true;
    }
    try {
      const res = await api.get<GetWishlistResponse>("/wishlist");
      wishList.value = res.data.data;
      likedProducts.value = new Set(res.data.data.map(item => item._id));
    } catch (err: any) {
      handleApiError(err);
    } finally {
      isLoading.value = false;
    }
  }

  async function deleteWishList(productId: string) {
    LoadingId.value = productId;
    try {
      await api.delete<WishlistResponse>(`/wishlist/${productId}`);
      await getWishList();
    } catch (err: any) {
      handleApiError(err);
    } finally {
      LoadingId.value = null;
    }
  }

  return {
    likedProducts,
    isLoading,
    LoadingId,
    wishList,
    postWishList,
    getWishList,
    deleteWishList,
  };
});
