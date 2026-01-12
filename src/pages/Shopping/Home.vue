<template>
  <main class="min-h-screen relative">
    <section>
      <SectionSlider />
      <div class="min-h-[264px]">
        <HomeSliderMain />
      </div>
      <div class="min-h-[200px]">
        <SearchBar />
      </div>
      <div v-if="allProducts.isLoading" class="flex justify-center py-20 min-h-screen">
        <vue-spinner-clip :loading="true" :color="'#16a34a'" :size="50" />
      </div>
      
      <HomeProducts v-show="allProducts.products.length > 0" />  
    </section>
  </main>
</template>

<script setup lang="ts">
import { allProductsStore } from "@/api/products";
import { defineAsyncComponent } from "vue";
import { VueSpinnerClip } from "vue3-spinners";

const HomeProducts = defineAsyncComponent(()=> import("@components/home/HomeProducts.vue"));
const SearchBar = defineAsyncComponent(()=> import("@components/home/SearchBar.vue"));
const SectionSlider = defineAsyncComponent(()=> import('@components/home/SectionSlider.vue'));
const HomeSliderMain = defineAsyncComponent(()=> import("@components/home/HomeSliderMain.vue"));
const allProducts = allProductsStore();
</script>

<style scoped></style>
