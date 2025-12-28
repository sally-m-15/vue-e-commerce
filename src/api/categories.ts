import { defineStore } from "pinia";
import { ref } from "vue";
import api, { handleApiError } from "./axiosClient";
import type { CategoriesResponse, Category } from "@/types/apiInterface";

export const allCategoriesStore = defineStore("categories", () => {
  const categories = ref<Category[]>([]);
  async function getAllCategories() {
    try {
      const res = await api.get<CategoriesResponse>("/categories");
      categories.value = res.data.data;
    } catch (err: any) {
      handleApiError(err);
    }finally{
    }
  }
  return { categories, getAllCategories };
});
