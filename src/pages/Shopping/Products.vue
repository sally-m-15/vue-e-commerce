<template>
    <section class="pt-28">
      <SearchBar />
      <HomeProducts />
    </section>
  <router-view />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const HomeProducts = defineAsyncComponent(()=> import("@components/home/HomeProducts.vue"));
const SearchBar = defineAsyncComponent(()=> import("@components/home/SearchBar.vue"))
</script>

<style scoped></style>
