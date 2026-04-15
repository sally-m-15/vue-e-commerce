<template>
    <div>
        <apexchart 
        :key="dark ? 'dark-mode' : 'light-mode'"
      type="bar" 
      height="300" 
      :options="chartOptions" 
      :series="series"
    ></apexchart>
    </div>
</template>

<script setup lang="ts">
import { useAdminApiStore } from '@/composables/admin/adminApi';
import { dark } from '@/composables/useDarkMode';
import { computed, defineAsyncComponent, onMounted } from 'vue';
const apexchart = defineAsyncComponent(() => import('vue3-apexcharts'));
const adminStore = useAdminApiStore();

  onMounted(async () => {
      await adminStore.fetchSalesData();
    });

const series = computed<any>(() => {
    const manualData = [100000, 70000, 80000];
    const dynamicData = adminStore.monthlySales.slice(3);

    return [{
        name: 'Revenue',
        data: [...manualData, ...dynamicData]
    }];
});

const chartOptions = computed<any>(() => ({
    chart: {
        type: 'bar',
        toolbar: { show: false },
        background: dark.value ? '#101828' : '#ffffff',
    }, 
    theme: {
        mode: dark.value ? 'dark' : 'light' 
    },
    
    colors: [function({value}:{value: number}) {
        if (value < 100000) {
            return '#ef4444';
        } else {
             return '#3b82f6';
        }
    }],
    plotOptions: {
        bar: {
            columnWidth: '55%',
            distributed: false,
            borderRadius: 6
        }
    },

    dataLabels: {
        enabled: false
    },

    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
            style: {
                colors: dark.value ? '#9ca3af' : '#4b5563'
            }
        }
    },
    grid: {
        borderColor: dark.value ? '#e5e7eb' : '#1f2937',
        strokeDashArray: 4
    },
    tooltip: {
        theme: dark.value ? 'dark' : 'light'
    }
}));
</script>

<style scoped>

</style>