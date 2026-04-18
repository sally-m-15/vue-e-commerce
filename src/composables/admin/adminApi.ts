import api, { handleApiError } from "@/api/axiosClient";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAdminApiStore = defineStore('adminApi',() => {
    const salesitems = ref<number>(0);
    const target = ref<number>(60);
    const allOrders = ref<any[]>([]);
    const totaleRevenue = ref<number>(0);
    const revenueTarget = ref<number>(300000);
    const inEscrow = ref<number>(0);
    const monthlySales = ref<number[]>(new Array(12).fill(0));
    const topProducts = ref<any[]>([]);
    const selectedDate = ref<Date[]>([new Date(), new Date()]);


    const todaysSales = computed(()=> {
        return Math.min(Math.round((salesitems.value / target.value) * 100), 100);
    });

    const revenueProgress = computed(() => {
        return Math.min(Math.round((totaleRevenue.value / revenueTarget.value) * 100), 100);
    });

async function fetchSalesData(startDate?: string, endDate?: string) {
    try {
        let url = `/orders`;
        if (startDate && endDate) {
            url += `?startDate=${startDate}&endDate=${endDate}`;
        }
        const res = await api.get(url);
        const orders = res.data.data || [];
        
        allOrders.value = orders;
        salesitems.value = orders.length;

        
        totaleRevenue.value = orders.reduce((acc: number, item: any) => acc + (item.totalOrderPrice || 0), 0);

        
        inEscrow.value = orders.reduce((acc: number, item: any) => {
            if (item.isPaid && !item.isDelivered) {
                return acc + item.totalOrderPrice;
            }
            return acc;
        }, 0);

        const salesByMonth = new Array(12).fill(0);
        orders.forEach((order: any) => {
            const month = new Date(order.createdAt).getMonth();
            salesByMonth[month] += order.totalOrderPrice;
        });
        monthlySales.value = salesByMonth;

        const productCount: Record<string, number> = {};
        orders.forEach((order: any) => {
            order.cartItems?.forEach((item: any) => {
                const title = item.product.title.split(' ').slice(0, 2).join(' ');
                productCount[title] = (productCount[title] || 0) + item.count;
            });
        });

        topProducts.value = Object.entries(productCount)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);

    } catch (err) {
        handleApiError(err);
    }
}
    return { salesitems, target, allOrders, todaysSales,revenueProgress,selectedDate,totaleRevenue, revenueTarget ,inEscrow ,monthlySales,topProducts,fetchSalesData }
});