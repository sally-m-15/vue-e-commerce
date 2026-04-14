import api, { handleApiError } from "@/api/axiosClient";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAdminApiStore = defineStore('adminApi',() => {
    const salesitems = ref<number>(0);
    const target = ref<number>(60);
    const allOrders = ref<any[]>([]);
    const totaleRevenue = ref<number>(0);
    const revenueTarget = ref<number>(350000);
    const inEscrow = ref<number>(0);

    const todaysSales = computed(()=> {
        return Math.min(Math.round((salesitems.value / target.value) * 100), 100);
    });

    const revenueProgress = computed(() => {
        return Math.min(Math.round((totaleRevenue.value / revenueTarget.value) * 100), 100);
    });

    async function fetchSalesData() {
    try {
        const res = await api.get('/orders');
        allOrders.value = res.data.data;
        salesitems.value = allOrders.value.length;

        totaleRevenue.value = allOrders.value.reduce((acc, order) => {
            return acc + (order.totalOrderPrice || 0);
        }, 0);

        inEscrow.value = allOrders.value.reduce((acc, order)=> {
            if (order.isPaid && !order.isDelivered) { 
        return acc + order.totalOrderPrice;
    }
            return acc;
        }, 0);

        console.log("Total Revenue Calculated:", totaleRevenue.value, );

    } catch (err) {
        handleApiError(err);
    }
}
    return { salesitems, target, allOrders, todaysSales,revenueProgress,totaleRevenue, revenueTarget ,inEscrow ,fetchSalesData }
});