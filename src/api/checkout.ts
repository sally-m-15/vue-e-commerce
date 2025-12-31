import { defineStore } from "pinia";
import api, { handleApiError } from "./axiosClient";
import { useCartStore } from "./cart";
import type { ICheckoutForm } from "@/types/userInterface";
import { computed } from "vue";

export const useCheckoutStor = defineStore("checkout", () => {
  const userCart = useCartStore();
  const cartId = computed(() => userCart.CartData?._id);
  async function cashOrder(value: ICheckoutForm) {
    try {
      if (!cartId.value) return;
      const res = await api.post(`/orders/${cartId.value}`, {
        shippingAddress: {
          details: value.details, 
          city: value.city,
          phone: value.phone,
        },
      });
    } catch (err) {
      handleApiError(err);
  }}

  async function onlinCheckout(value: ICheckoutForm) {
    try {
      const siteUrl = window.location.origin;
      if (!cartId.value) return;
      const res = await api.post(
        `/orders/checkout-session/${cartId.value}?url=${siteUrl}`,
        {
          shippingAddress: {
            details: value.details,
            city: value.city,
            phone: value.phone,
            address: value.address,
            country: value.country,
          },
        }
      );
      location.href = res.data.session.url;
    } catch (err) {
      handleApiError(err);
  }}
  return { cashOrder, onlinCheckout };
});
