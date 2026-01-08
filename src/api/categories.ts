import { defineStore } from "pinia";
import { ref } from "vue";
import api, { handleApiError } from "./axiosClient";
import type { CategoriesResponse, Category, singleCategoryResponse, SubCategory } from "@/types/apiInterface";

export const allCategoriesStore = defineStore("categories", () => {
  const supcategories = ref<SubCategory[]>([]);
  const categories = ref<Category[]>([]);
  async function getAllCategories() {
    try {
      const res = await api.get<CategoriesResponse>("/categories");
      categories.value = res.data.data;
    } catch (err: any) {
      handleApiError(err);
    }finally{
    }
  };

  async function getSpecificCategory(id: string) {
    try {
      const res = await api.get<singleCategoryResponse>(`/categories/${id}/subcategories`)
      
      supcategories.value = res.data.data;
      console.log(supcategories);
    }catch(err) {
      handleApiError(err);
    }
  }
  return { categories, supcategories, getAllCategories, getSpecificCategory };
});
