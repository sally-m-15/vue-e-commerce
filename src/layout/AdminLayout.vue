<template>
   <Navbar />
  <Dashboard />
  <main class="mt-20">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Dashboard from "@/pages/Admin/Dashboard.vue";
</script>

<style scoped></style>