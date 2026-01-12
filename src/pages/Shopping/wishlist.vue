<template>
    <section class="py-24 relative mx-auto container pt-20 px-8 xl:px-0">
         <div v-if="useWishList.isLoading" class="flex justify-center py-20">
       <vue-spinner-clip :loading="true" color="#16a34a" :size="50" />
    </div>
      <div v-else class="w-full px-4 md:px-12 mt-12 pt-6 bg-gray-100 dark:bg-gray-900">
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
              <div class="w-[160px] h-[200px]">
                <img
                  :src="item.imageCover"
                  loading="lazy"
                  :alt="item.title"
                  height="200"
                  width="160"
                  class="h-full w-full rounded-xl object-cover aspect-square"
                  decoding="async"
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
                <button  
                @click="useWishList.deleteWishList(item._id)"
                :disabled="useWishList.LoadingId === item._id"
                class=" text-red-500"
                :class="useWishList.LoadingId === item._id? 'cursor-wait' : 'cursor-pointer'"
                >
                   <vue-spinner-clip 
    v-if="useWishList.LoadingId === item._id"
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
            <button
              @click="addcart.postCartItem(item._id)"
              :disabled="addcart.LoadingId === item._id" 
              class="border border-green-600 hover:bg-green-600 hover:text-white  dark:text-white h-fit leading-none px-4 py-2 rounded-md disabled:opacity-50"
              :class="addcart.LoadingId === item._id ? 'cursor-wait' : 'cursor-pointer'"
            >
              <span v-if="addcart.LoadingId === item._id">adding...</span>
              <span v-else>add to cart</span>
        </button>
          </div>
        </div>
      </div>
    </section>
  <router-view />
</template>

<script setup lang="ts">
import { useCartStore } from "@/api/cart";
import { useWishlistStore } from "@/api/wishlist";
import { addIcons } from "oh-vue-icons";
import { FaTrash } from "oh-vue-icons/icons";
import { onMounted } from "vue";
import { VueSpinnerClip } from "vue3-spinners";

addIcons(FaTrash);

const useWishList = useWishlistStore();
const addcart = useCartStore();

onMounted(async () => {
  await useWishList.getWishList();
});
</script>

<style scoped>

</style>
