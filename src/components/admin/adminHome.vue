<template>
    <main class="mx-8">
        <h1>Dashboard</h1>
        <div class="pt-5 flex gap-6 w-full"
        >
        <div  v-for="chart in updateChart"
        :key="chart.id" class=" bg-gray-900  w-full flex items-center justify-between px-3 py-3">
                <div class="ps-1">
                    <h2 class="text-gray-200">{{ chart.title }}</h2>
                    <h2 class="font-bold text-2xl py-2"> <span> {{ chart.totalSales }} </span></h2>
                </div>
    <div>
    <apexchart
    width="25%"
    height="100px"
    :options="getChartData(chart.series)"
    :series="chart.series"
    ></apexchart>
    </div>  
    </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'
import {adminChart} from '@/composables/admin/adminChart'
import { useAdminApiStore } from '@/composables/admin/adminApi';

const todaySales = useAdminApiStore();

const apexchart = defineAsyncComponent(() => import('vue3-apexcharts'));

const updateChart = computed(() => {
    return adminChart.value.map((chart: any) => {
        if (chart.title === 'Todays Sales') {
            return { ...chart, totalSales: todaySales.salesitems + ' items',

                 series: [todaySales.todaysSales],
             };
        }else if (chart.title === 'Todays Revenue') {
            return { ...chart, totalSales: todaySales.totaleRevenue.toLocaleString() + ' EGP',
                series: [todaySales.revenueProgress]
             };
        } else if (chart.title === "In Escrow") {
            return {
                ...chart, 
                totalSales: todaySales.inEscrow.toLocaleString() + ' EGP',
                series: [Math.min(Math.round((todaySales.inEscrow / todaySales.revenueTarget) * 100), 100)]
            }
        }
        return chart;
    })
})

const chartOptions = ref<any>({
    chart: {
        type: 'radialBar',
        sparkline: { enabled: true } 
    },
    
    plotOptions: {
        radialBar: {
            hollow: {
            size: '45%',
            background: '#101828',
            }, 
            
            dataLabels: {
                name: { show: false },
                value: {
                    offsetY: 4,
                    fontSize: '8px',
                    color: '#169BFF'
                }
            },
            track: {
                
                margin: 0,
                strokeWidth: '100%' 
            }
        }
    },
    colors: ['#0050F0']
});

const getChartData = (seriesValue: number[]) => {
    const value = seriesValue[0] ?? 0;
    const statusColor = value > 50 ? '#0050f0' : '#EF4444';

if (!chartOptions.value) return {};

const updatedOptions = JSON.parse(JSON.stringify(chartOptions.value));
    updatedOptions.plotOptions.radialBar.dataLabels.value.color = statusColor;
    updatedOptions.colors = [statusColor];

    return updatedOptions;
    };

    onMounted(() => {
        todaySales.fetchSalesData();
    })
</script>

<style scoped>

</style>