<template>
  <div class="md:px-12 py-10 flex flex-col items-center md:items-start">
    <div v-for="item in cartCheckout.cartItems" :key="item._id">
      <div class="flex flex-col md:flex-row md:gap-0">
        <div
          class="flex items-center text-center md:text-start flex-col gap-5 md:flex-row max-xl:justify-center"
        >
          <div class="img-box">
            <img
              :src="item.product?.imageCover"
              loading="lazy"
              alt="item.title"
              class="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div class="">
            <h6
              class="font-semibold text-sm dark:text-white leading-8 text-black line-clamp-1"
            >
              {{ item.product?.title }}
            </h6>
            <h6 class="text-sm dark:text-white">{{ item.count }} x</h6>
            <p
              class="font-normal dark:text-gray-300 text-lg leading-8 text-gray-500 my-2"
            >
              <span class="text-green-600 text-sm"> {{ item.price }} EGp</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col lg:items-center mt-10 lg:w-full items-center md:items-start"
    >
      <Form>
        <Field
          name="code"
          type="text"
          placeholder=" Discount code"
          class="ps-3 lg:w-96 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </Form>
      <div
        class="mt-5 md:mt-10 text-sm text-gray-500 font-medium flex flex-col gap-4 lg:w-96"
      >
        <span class="flex justify-between">
          <h6>Subtotal</h6>
          <h6>{{ cartCheckout.CartData?.totalCartPrice }}</h6>
        </span>
        <span class="flex justify-between">
          <h6>Shipping</h6>
          <h6>5 EGp</h6>
        </span>
        <span class="flex justify-between">
          <h6>Discount</h6>
          <h6>- 10 EGp</h6>
        </span>
        <span class="flex justify-between">
          <h6 class="text-black dark:text-white">Total</h6>
          <h6 class="text-green-600">{{ total }} EGp</h6>
        </span>
      </div>
    </div>
    <button
      @click="goToProducts"
      class="text-white mt-20 text-xs sm:px-10 cursor-pointer bg-green-600 rounded-md py-2 px-4 xl:text-xl xl:px-20 block mx-auto hover:bg-green-700"
    >
      Continue Shopping
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/api/cart";
import { useNavigation } from "@/composables/services/action";
import { Field, Form } from "vee-validate";
import { computed } from "vue";

const { goToProducts } = useNavigation();

const cartCheckout = useCartStore();

const total = computed(() => {
  const subtatal = cartCheckout.CartData?.totalCartPrice ?? 0;
  const shipping = 5;
  const discount = 10;
  return subtatal + shipping - discount;
});
</script>

<style scoped>
.img-box {
  height: 80px;
  width: 80px;
  flex-shrink: 0;
}
</style>
