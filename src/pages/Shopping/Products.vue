<template>
    <section class="pt-28">
      <SearchBar />
      <HomeProducts />
    </section>
  <router-view />
</template>

<script setup lang="ts">
import HomeProducts from "@/components/home/HomeProducts.vue";
import SearchBar from "@/components/home/SearchBar.vue";
</script>

<style scoped></style>
