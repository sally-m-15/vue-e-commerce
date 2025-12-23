import { defineStore } from "pinia";
import { ref } from "vue";
import api, { handleApiError } from "./axiosClient";

export const allCategoriesStore = defineStore("categories", () => {
  const categories = ref([]);
  async function getAllCategories() {
    try {
      const res = await api.get("/categories");
      categories.value = res.data.data;
    } catch (err: any) {
      handleApiError(err);
    }
  }
  return { categories, getAllCategories };
});
