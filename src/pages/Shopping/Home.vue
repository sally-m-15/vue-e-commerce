<template>
  <main class="min-h-screen relative">
    <LoadingSpinner />
    <section>
      <SectionSlider />
      <HomeSliderMain />
      <SearchBar />
      <HomeProducts />
    </section>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import HomeProducts from "@/components/home/HomeProducts.vue";
import HomeSliderMain from "@/components/home/HomeSliderMain.vue";
import SearchBar from "@/components/home/SearchBar.vue";
import SectionSlider from "@/components/home/SectionSlider.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
</script>

<style scoped></style>
