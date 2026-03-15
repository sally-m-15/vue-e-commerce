<template>
   <Navbar />
  <main class="container m-auto pt-14 mt-12 flex h-screen gap-6">
      <AdminSidebar />
      <div class="w-3/4 border bg-gray-800 pt-5 rounded-xl">
        <router-view />
      </div>
  </main>
</template>

<script setup lang="ts">
import AdminSidebar from "@/components/admin/adminSidebar.vue";
import Navbar from "@/components/user/Navbar.vue";
</script>

<style scoped></style>