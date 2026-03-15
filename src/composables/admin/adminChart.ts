import { ref } from "vue";


export const adminChart = ref<any>([
{
    title:"Todays Sales", totalSales: '20,4K EGp', itemsSummary: 'we have sold 150 items', id: '1', series: [80]
},
{
 title:"Todays Revenue", totalSales: '10,5K EGp', itemsSummary: 'available for Payout', id: '2', series: [60]
},
{
 title:"In Escrow", totalSales: '9,8K EGp', itemsSummary: 'available for Payout', id: '3', series: [50]
}
])