<template>
  <main class="flex gap-2 bg-gray-100 dark:bg-gray-800">
      <AdminSidebar />
      <div class="flex-1 w-[80%]  bg-gray-100 dark:bg-gray-800">
         <AdminNavbar />
        <router-view />
      </div>
  </main>
</template>

<script setup lang="ts">
import AdminNavbar from "@/components/admin/AdminNavbar.vue";
import AdminSidebar from "@/components/admin/adminSidebar.vue";
</script>

<style scoped>
</style>