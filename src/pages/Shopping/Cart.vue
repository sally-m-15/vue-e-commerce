<template>
  <div class="min-h-screen relative">
    <LoadingSpinner />
    <section class="py-24 relative mx-auto container pt-20 px-8 xl:px-0">
      <div class="w-full px-4 md:px-12 mt-12 pt-6 bg-gray-100 dark:bg-gray-900">
        <div class="w-full py-6">
          <div
            class="font-normal text-xl leading-8 flex flex-col md:flex-row items-center w-full md:justify-between gap-5 md:gap-0"
          >
            <h2
              class="md:text-center text-black font-bold text-3xl dark:text-white"
            >
              Cart Shop
            </h2>
            <button
              v-if="userCart.cartItems.length > 0"
              @click="gotocheckout"
              class="md:text-center text-white px-3 bg-green-600 cursor-pointer hover:bg-green-700 rounded-lg p-2"
            >
              check out
            </button>
          </div>
          <div
            class="font-normal mt-12 md:mt-5 dark:text-white text-xl leading-8 text-black flex flex-col md:flex-row md:items-center w-full md:justify-between gap-2"
          >
            <p class="md:text-center">
              total price: {{ userCart.CartData?.totalCartPrice
              }}<span class="text-green-600 ps-1"></span>
            </p>
            <p class="md:text-center">
              total number of items:<span class="text-green-600 ps-1">{{
                userCart.numOfCartItems
              }}</span>
            </p>
          </div>
        </div>
        <div
          v-for="cart in userCart.cartItems"
          :key="cart._id"
          class="flex flex-col md:flex-row justify-between py-6 gap-5 md:gap-0 border-b border-gray-300 dark:border-gray-700"
        >
          <div
            class="flex items-center text-center md:text-start flex-col md:flex-row gap-5 max-xl:justify-center"
          >
            <div class="img-box">
              <img
                :src="cart.product.imageCover"
                loading="lazy"
                :alt="cart.product.title"
                class="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div class="pro-data w-80">
              <h6
                class="font-semibold text-xl dark:text-white leading-8 text-black"
              >
                {{ cart.product.title }}
              </h6>
              <p
                class="font-normal dark:text-gray-300 text-lg leading-8 text-gray-500 my-2"
              >
                <span class="text-green-600"> </span>{{ cart.price }} EGp
              </p>
              <i
                @click="userCart.deleteCartItems(cart.product._id)"
                class="fa-solid fa-trash cursor-pointer text-red-500"
              ></i>
            </div>
          </div>
          <div
            class="flex items-center flex-col min-[550px]:flex-row justify-end w-full"
          >
            <div class="flex items-center justify-center md:justify-end w-full">
              <button
                :disabled="userCart.isLoading"
                @click="
                  userCart.updateCartItems(cart.product._id, cart.count - 1)
                "
                class="group rounded-lg px-2 py-3 border cursor-pointer border-green-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
              >
                <svg
                  class="stroke-gray-900 dark:stroke-white transition-all duration-500 group-hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M16.5 11H5.5"
                    stroke=""
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16.5 11H5.5"
                    stroke=""
                    stroke-opacity="0.2"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16.5 11H5.5"
                    stroke=""
                    stroke-opacity="0.2"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <input
                type="text"
                class="outline-none text-gray-900 font-semibold text-lg w-full max-w-[50px] min-w-[50px] dark:text-white text-center bg-transparent"
                :value="cart.count"
                readonly
              />
              <button
                :disabled="userCart.isLoading"
                @click="
                  userCart.updateCartItems(cart.product._id, cart.count + 1)
                "
                class="group cursor-pointer rounded-lg px-2 py-3 border border-green-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
              >
                <svg
                  class="stroke-gray-900 transition-all dark:stroke-white duration-500 group-hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    stroke=""
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    stroke=""
                    stroke-opacity="0.2"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    stroke=""
                    stroke-opacity="0.2"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div v-if="userCart.cartItems.length > 0" class="text-center">
          <button
            @click="userCart.clearCart()"
            class="bg-green-600 cursor-pointer hover:bg-green-700 p-3 px-8 rounded-lg my-10 font-medium capitalize text-white"
          >
            clear your cart
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/api/cart";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const userCart = useCartStore();
onMounted(async () => {
  await userCart.getCartItems();
});
const router = useRouter();

function gotocheckout() {
  router.push({ name: "checkout" });
}
</script>

<style scoped>
.img-box {
  height: 200px;
  width: 160px;
  flex-shrink: 0;
}
</style>
