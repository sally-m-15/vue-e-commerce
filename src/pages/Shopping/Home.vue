<template>
  <main class="min-h-screen relative">
    <section>
      <SectionSlider />
      <HomeSliderMain />
      <SearchBar />
      
      <div v-if="allProducts.isLoading" class="flex justify-center py-20">
        <vue-spinner-clip :loading="true" :color="'#16a34a'" :size="50" />
      </div>
      
      <HomeProducts v-show="allProducts.products.length > 0" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { allProductsStore } from "@/api/products";
import HomeProducts from "@/components/home/HomeProducts.vue";
import HomeSliderMain from "@/components/home/HomeSliderMain.vue";
import SearchBar from "@/components/home/SearchBar.vue";
import SectionSlider from "@/components/home/SectionSlider.vue";
import { VueSpinnerClip } from "vue3-spinners";
const allProducts = allProductsStore();
</script>

<style scoped></style>
