<script setup lang="ts">
import { onMounted } from "vue";
import { useDarkMode } from "./composables/useDarkMode";
import { useAuthStore } from "./composables/services/useAuthApi";

const authStore = useAuthStore();
onMounted(() => {
  authStore.getDataFromLocalStorage();
});
useDarkMode();
</script>
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <router-view class="pt-24" />
  </div>
</template>
<style scoped></style>
