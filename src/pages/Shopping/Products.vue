<template>
  <div class="min-h-screen relative pt-28">
    <LoadingSpinner />
    <section>
      <SearchBar />
      <HomeProducts />
    </section>
  </div>
  <router-view />
</template>

<script setup lang="ts">
import HomeProducts from "@/components/home/HomeProducts.vue";
import SearchBar from "@/components/home/SearchBar.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
</script>

<style scoped></style>
