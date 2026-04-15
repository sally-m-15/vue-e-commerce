<template>
   <Navbar />
  <main class="container pt-14 mt-12 bg-gray-800 flex gap-6 mx-auto">
      <AdminSidebar />
      <div class="flex-1 w-[80%]  bg-gray-800 pt-5 rounded-xl border border-gray-500">
        <router-view />
      </div>
  </main>
</template>

<script setup lang="ts">
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import Navbar from "@/components/user/Navbar.vue";
</script>

<style scoped>
</style>