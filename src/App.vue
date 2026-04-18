<script setup lang="ts">
import { onMounted } from "vue";
import { useDarkMode } from "./composables/useDarkMode";
import { useAuthStore } from "./composables/services/useAuthApi";
import { useRoute } from "vue-router";


const authStore = useAuthStore();
const route = useRoute();
onMounted(() => {
  authStore.getDataFromLocalStorage();
});
useDarkMode();
</script>
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-800">
    <router-view :class="!route.path.startsWith('/admin') ? 'pt-24' : 'pt-0'" />
  </div>
</template>
<style scoped></style>
