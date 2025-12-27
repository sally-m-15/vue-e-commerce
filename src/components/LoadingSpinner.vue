<template>
  <div
    v-if="show"
    class="z-50 flex fixed pt-28 justify-center inset-0 bg-gray-400 items-center dark:bg-gray-800 opacity-60"
  >
    <vue-spinner-clip :loading="true" :color="'#4D5156'" :size="60" />
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/api/cart";
import { allProductsStore } from "@/api/products";
import { useWishlistStore } from "@/api/wishlist";
import { useAuthStore } from "@/composables/services/useAuthApi";
import { computed, watch } from "vue";
import { VueSpinnerClip } from "vue3-spinners";

const loadingAuth = useAuthStore();
const loadingApi = allProductsStore();
const loadingCart = useCartStore();
const loadingWishList = useWishlistStore();

const show = computed(
  () =>
    loadingApi.isLoading ||
    loadingAuth.isLoading ||
    loadingCart.isLoading ||
    loadingWishList.isLoading
);

watch(show, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
</script>

<style scoped></style>
