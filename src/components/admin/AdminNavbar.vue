<template>
  <div class="mx-8 mt-12 flex justify-between items-center">
    <h1 class="dark:text-gray-200 text-black text-2xl font-bold capitalize">
      {{ route.name }}
    </h1>
    <div class="w-72">
      <VueDatePicker 
        v-model="date"
        range 
        :dark="dark" 
        :format="format"
        auto-apply
        placeholder="Select Date Range"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css';
import { useRoute } from "vue-router";
import { onMounted, watch} from "vue";
  import { VueDatePicker } from "@vuepic/vue-datepicker"
import { dark } from '@/composables/useDarkMode';
import { useAdminApiStore } from '@/composables/admin/adminApi';

const route = useRoute();
const adminStore = useAdminApiStore();
const date = adminStore.selectedDate;

onMounted(() => {
  adminStore.selectedDate = [new Date(), new Date()];
});

const format = (dates: Date[]) => {
  if (dates[0] && dates[1]) {
    const start = dates[0].toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric'});
    const end = dates[1].toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric'})
    return `${start} - ${end}`;
  }
  return '';
}
watch(() => adminStore.selectedDate, (newDate) => {
  if (newDate && newDate.length === 2 && newDate[0] && newDate[1]) {
    
    const start = newDate[0]!.toISOString().split('T')[0];
    const end = newDate[1]!.toISOString().split('T')[0];

    adminStore.fetchSalesData(start, end);
  }
}, { deep: true });
</script>

<style scoped>
.dp__theme_dark {
   --dp-background-color: #101828 !important; 
   --dp-border-color: #1f2937;              
   --dp-menu-border-color: #1f2937;
}

.dp__input {
    background-color: #101828 !important;
    border: 1px solid #1f2937 !important;
}
</style>