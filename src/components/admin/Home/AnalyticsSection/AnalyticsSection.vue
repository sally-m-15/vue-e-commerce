<template>
    <div class="flex gap-6 mt-6">
        <div class="w-2xl">
            <RevenueAnalytics />
        </div>
        <div class="w-xs">
            <TopSellers />
        </div>
    </div>
</template>

<script setup lang="ts">
import RevenueAnalytics from './RevenueAnalytics.vue';
import TopSellers from './TopSellers.vue';

</script>

<style scoped>

</style>