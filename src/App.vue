<script setup lang="ts">
import { useDarkMode } from "./composables/useDarkMode";

useDarkMode();
</script>
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <router-view />
  </div>
</template>
<style scoped></style>
