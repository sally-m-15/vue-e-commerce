<template>
    <div>
        <apexchart 
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


const series = computed(() => [{
    name: 'Top Sellers',
    data: adminStore.topProducts.map(p => p.count)
}]);

const chartOptions = computed<any>(() => ({
    chart: {
        type: 'bar',
        background: '#101828',
        toolbar: { show: false },
    },
    theme: {
        mode: dark.value ? 'dark' : 'light'
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '30%',
            borderRadius: 4
        }
    },
colors: ['#3b82f6'],
dataLabels: {
        enabled: true,
        textAnchor: 'start',
        formatter: function (val: number) {
            return val + "%"
        },
    },
    xaxis: {
        categories: adminStore.topProducts.map(p => p.name), 
        labels: {
            style: {
                colors: dark.value ? '#9ca3af' : '#4b5563'
            }
        }
    },

    yaxis: {
        labels: {
            align: 'left',
            minWidth: 100,
            maxWidth: 150,
            padding: 0,
            offsetX: -15,
            style: {
                colors: dark.value ? '#9ca3af' : '#4b5563',
                fontSize: '12px'
            }
        }
    },

    grid: {
        borderColor: dark.value ? '#1f2937' : '#e5e7eb',
        xaxis: {
            lines: { show: true }
        }
    },

    tooltip: {
        theme: dark.value ? 'dark' : 'light'
    },
    legend: {
        show: false
    }
}));

onMounted(async() => {
    await adminStore.fetchSalesData();
})
</script>

<style scoped>

</style>