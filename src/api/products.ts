import type { Product, ProductsResponse } from "@/types/apiInterface";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import api, { handleApiError } from "./axiosClient";

export const allProductsStore = defineStore("api", () => {
  const isLoading = ref<boolean>(false);
  const searchTerm = ref("");
  const products = ref<Product[]>([]);
  const product = ref<Product | null>(null);
  const selectedSupCategory = ref<string>();
  const selectedMainCategoryId = ref<string>();


  async function getProductsData() {
    isLoading.value = true;
    try {
      const res = await api.get<ProductsResponse>("/products");
      products.value = res.data.data;
    } catch (err: any) {
      handleApiError(err);
    } finally {
      isLoading.value = false;
    }
  };

  const filteredProducts = computed(() => {
    return products.value.filter((ele) => {
      const matchesSearch = ele.title.toLowerCase().includes(searchTerm.value.toLowerCase());

      const matchesMainCategory = selectedMainCategoryId.value 
  ? ele.category._id === selectedMainCategoryId.value 
  : true;

     const matchesCategory = (selectedSupCategory.value === 'all' || !selectedSupCategory.value)
      ? true 
      : ele.category.name === selectedSupCategory.value;
      return matchesSearch && matchesCategory && matchesMainCategory;
    });
  });

  function clearProducts() {
    products.value = [];
    product.value = null;
  }

  async function getProductsDetails(id: string) {
    isLoading.value = true;
    try {
      const response = await api.get(`/products/${id}`);
      product.value = response.data.data;
    } catch (err: any) {
      handleApiError(err);
    } finally {
      isLoading.value = false;
    }
  }
function resetFilters() {
  selectedMainCategoryId.value = "";
  selectedSupCategory.value = "all";
}

  return {
    products,
    searchTerm,
    filteredProducts,
    product,
    isLoading,
    selectedSupCategory,
    selectedMainCategoryId,
    clearProducts,
    getProductsData,
    getProductsDetails,
    resetFilters
  };
});
