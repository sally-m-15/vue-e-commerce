<template>
    <main class="mx-8">
        <h1>Dashboard</h1>
        <div class="pt-5 flex gap-6 w-6xl"
        >
            <div  v-for="chart in adminChart"
        :key="chart.id" class=" bg-gray-900 flex items-center gap-14 px-3 py-3">
                <div class="ps-1">
                    <h2 class="text-gray-200">{{ chart.title }}</h2>
                    <h2 class="font-bold text-2xl py-2">{{ chart.totalSales }}</h2>
                    <p class="text-xs font-normal text-gray-200"> {{ chart.itemsSummary }}</p>
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
import { defineAsyncComponent, ref } from 'vue'
import {adminChart} from '@/composables/admin/adminChart'
const apexchart = defineAsyncComponent(() => import('vue3-apexcharts'))

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
const updatedOptions = JSON.parse(JSON.stringify(chartOptions.value));
    updatedOptions.plotOptions.radialBar.dataLabels.value.color = statusColor;
    updatedOptions.colors = [statusColor];

    return updatedOptions;
    };
</script>

<style scoped>

</style>