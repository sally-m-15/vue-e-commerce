<template>
    <section class="pt-28">
            <div class="min-h-[200px]">
        <SearchBar />
      </div>
      <div v-if="allProducts.isLoading" class="flex justify-center py-20 min-h-screen">
        <vue-spinner-clip :loading="true" :color="'#16a34a'" :size="50" />
      </div>
      
      <HomeProducts v-show="allProducts.products.length > 0" /> 
    </section>
  <router-view />
</template>

<script setup lang="ts">
import { allProductsStore } from "@/api/products";
import { defineAsyncComponent } from "vue";

const HomeProducts = defineAsyncComponent(()=> import("@components/home/HomeProducts.vue"));
const SearchBar = defineAsyncComponent(()=> import("@components/home/SearchBar.vue"));

const allProducts = allProductsStore();

</script>

<style scoped></style>
