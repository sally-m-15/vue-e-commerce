<template>
    <section class="py-24 relative mx-auto container pt-20 px-8 xl:px-0">
      <div v-if="userCart.isLoading" class="flex justify-center py-20">
       <vue-spinner-clip :loading="true" color="#16a34a" :size="50" />
    </div>
      <div v-else class="w-full px-4 md:px-12 mt-12 pt-6 bg-gray-100 dark:bg-gray-900">
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
            <div class="w-[160px] h-[200px] shrink-0">
              <img
                :src="cart.product.imageCover"
                loading="lazy"
                :alt="cart.product.title"
                height="200"
              width="160"
              decoding="async"
                class="h-full w-full  rounded-xl object-cover aspect-[160/200]"
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
              <button
              :disabled="userCart.LoadingId === cart.product._id"
              @click="userCart.deleteCartItems(cart.product._id)"
              class=" text-red-500"
              :class="userCart.LoadingId === cart.product._id? 'cursor-wait' : 'cursor-pointer'"
              >
               <vue-spinner-clip 
    v-if="userCart.LoadingId === cart.product._id"
    :loading="true" 
    color="#ef4444" 
    size="20" 
  />
                <v-icon v-else
                name="fa-trash"
              />
              </button>
            </div>
          </div>
          <div
            class="flex items-center flex-col min-[550px]:flex-row justify-end w-full"
          >
            <div class="flex items-center justify-center md:justify-end w-full">
              <button
                :disabled="userCart.updatingMinusId === cart.product._id"
                @click="
                  userCart.updateCartItems(cart.product._id, cart.count - 1, 'Minus')
                "
                class="group rounded-lg px-2 py-3 border  flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 "
                :class="userCart.updatingMinusId === cart.product._id ? 'bg-red-400 border-red-500 cursor-wait' : 'cursor-pointer border-green-600 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50'"
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
                :disabled="userCart.updatingPlusId === cart.product._id"
                @click="
                  userCart.updateCartItems(cart.product._id, cart.count + 1, 'plus')
                "
                class="group rounded-lg px-2 py-3 border border-green-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500"
                :class="userCart.updatingPlusId === cart.product._id ? 'bg-green-600 border-green-600 cursor-wait' : 'cursor-pointer border-green-600 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50'"
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
        <div v-if="userCart.cartItems.length > 0" class="text-center flex flex-col sm:flex-row py-10 justify-center gap-6">
          <button
          @click="goToProducts"
            class="bg-green-600 cursor-pointer hover:bg-green-700 p-3 px-8 rounded-lg font-medium capitalize text-white"
          >
            Continue Shopping
          </button>
          <button
          :disabled="userCart.isClearing" 
            @click="userCart.clearCart()"
            class="border dark:border-gray-500 text-gray-500 p-3 px-8 rounded-lg font-medium capitalize dark:text-white"
            :class="userCart.isClearing ? 'cursor-wait' : 'cursor-pointer'"
          >
          <span v-if="userCart.isClearing">Clearing...</span>
          <span v-else>
            clear your cart
          </span>
          </button>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { useCartStore } from "@/api/cart";
import { useNavigation } from "@/composables/services/action";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { VueSpinnerClip } from "vue3-spinners";

const userCart = useCartStore();

const router = useRouter();

const { goToProducts } = useNavigation();

function gotocheckout() {
  router.push({ name: "checkout" });
}
onMounted(async () => {
  await userCart.getCartItems();
});
</script>

<style scoped>

</style>
