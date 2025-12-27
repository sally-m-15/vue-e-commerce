<template>
  <div class="min-h-screen relative">
    <LoadingSpinner />
    <section class="py-24 relative mx-auto container pt-20 px-8 xl:px-0">
      <div class="w-full px-4 md:px-12 mt-12 pt-6 bg-gray-100 dark:bg-gray-900">
        <h2
          class="md:text-center text-black font-bold text-3xl pb-6 dark:text-white"
        >
          My wish List
        </h2>
        <div
          v-for="item in useWishList.wishList"
          :key="item._id"
          class="w-full px-4 md:px-12 mt-12 pt-6 bg-gray-100 dark:bg-gray-900"
        >
          <div
            class="flex flex-col md:flex-row justify-between items-center py-6 gap-5 md:gap-0 border-b border-gray-300 dark:border-gray-700"
          >
            <div
              class="flex items-center text-center md:text-start flex-col md:flex-row gap-5 max-xl:justify-center"
            >
              <div class="img-box">
                <img
                  :src="item.imageCover"
                  loading="lazy"
                  :alt="item.title"
                  class="h-full w-full rounded-xl object-cover"
                />
              </div>
              <div class="pro-data w-80">
                <h6
                  class="font-semibold text-xl dark:text-white leading-8 text-black"
                ></h6>
                <p
                  class="font-normal dark:text-gray-300 text-lg leading-8 text-gray-500 my-2"
                >
                  <span class="text-green-600">{{ item.price }} EGp</span>
                </p>
                <v-icon
                  name="fa-trash"
                  @click="useWishList.deleteWishList(item._id)"
                  class="cursor-pointer text-red-500"
                />
              </div>
            </div>
            <button
              @click="addcart.postCartItem(item._id)"
              class="border border-green-600 hover:bg-green-600 hover:text-white cursor-pointer dark:text-white h-fit leading-none px-4 py-2 rounded-md"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  <router-view />
</template>

<script setup lang="ts">
import { useCartStore } from "@/api/cart";
import { useWishlistStore } from "@/api/wishlist";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { onMounted } from "vue";

const useWishList = useWishlistStore();
const addcart = useCartStore();

onMounted(async () => {
  await useWishList.getWishList();
});
</script>

<style scoped>
.img-box {
  height: 200px;
  width: 160px;
  flex-shrink: 0;
}
</style>
