<template>
  <div>
    <div class="min-h-screen flex items-center justify-center">
      <div
        class="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-10 text-center max-w-md w-full"
      >
        <div class="flex justify-center mb-6">
          <div
            class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center"
          >
            <v-icon name="fa-check"  class=" text-green-600 text-4xl"/>
          </div>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Order Placed Successfully 🎉
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          Thank you for your purchase! Your order has been placed successfully
          and is being processed.
        </p>
        <div class="flex flex-col gap-4">
          <button
            class="bg-green-600 cursor-pointer hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Track Your Order
          </button>
          <button
            @click="goToProducts"
            class="border cursor-pointer border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-lg font-semibold transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavigation } from "@/composables/services/action";

const { goToProducts } = useNavigation();
</script>

<style scoped></style>
