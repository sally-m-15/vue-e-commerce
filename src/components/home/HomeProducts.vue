<template>
  <section class="container mx-auto w-full p-4 pb-20">
    <div
      class="grid mx-5 xl:mx-0 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 pt-6"
    >
      <div
        v-for="product in allProducts.filteredProducts"
        @click="goToProductDetails(product.id)"
        :key="product.id"
        :class="postCart.LoadingId ? 'cursor-wait' : 'cursor-pointer'"
        class="show-button cursor-pointer rounded-md
        shadow-green-600 shadow-md
          md:shadow-none
        md:hover:shadow-green-600 md:hover:shadow-md py-5 px-3 transition-all duration-300 ease-in-out"
      >
        <div>
          <div class="w-full h-64 overflow-hidden rounded-md bg-gray-100 aspect-[412/466]">
            <img 
              loading="lazy" 
              :src="product.imageCover" 
              :alt="product.title"
              decoding="async"
              width="412"
              height="466"
              class="w-full h-full aspect-[412/466] object-cover mix-blend-multiply dark:mix-blend-normal" 
            />
          </div>
          <p class="mt-2 text-green-700 text-sm dark:text-green-500">
            {{ product.category.name }}
          </p>
          <span class="flex justify-between dark:text-white mt-4 ">
            <h5 class="text-md font-medium dark:text-white line-clamp-1">
              {{ product.title }}
            </h5>
            <button @click.stop="postCart.goToCart()" class="relative" v-if="postCart.getProductCount(product.id) > 0" >
            <v-icon
            scale="1.5"
            name="fa-shopping-cart"
            class="fa-cart-shopping text-2xl cursor-pointer dark:text-gray-50 text-gray-950"
            />
            <span
                class="w-6 h-6 rounded-lg flex justify-center items-center bottom-4 start-2 bg-green-600 absolute text-sm font-stretch-normal text-white"
                >{{ postCart.getProductCount(product.id) }}</span>
            </button>
          </span>
          <span class="flex justify-between mt-3 dark:text-white">
            <p>{{ product.price }} EGp</p>
            <span>
              <v-icon 
              name="fa-star"
              class=" text-amber-400"/>
              <small>{{ product.ratingsAverage }}</small>
            </span>
          </span>
          <span class="flex justify-center mt-4 gap-1 dark:text-white">
            <button
            :disabled="postCart.LoadingId === product.id"
              @click.stop="postCart.postCartItem(product.id)"
              class="bg-green-600 hover:bg-green-700  rounded-xl block py-1"
              :class="postCart.LoadingId === product.id ? 'translate-y-0 loading-active px-4 md:px-10 opacity-100 cursor-wait' : 'cursor-pointer px-8 md:px-14'"
            >
            <span v-if="postCart.LoadingId === product.id">adding...</span>
            <span v-else>add</span>
            </button>
            <v-icon
            name="fa-heart"
            scale="1.3"
              @click.stop="userWishList.postWishList(product.id)"
              class="text-2xl"
              :class="[userWishList.likedProducts.has(product.id) ? 'text-red-700' : '', userWishList.LoadingId === product.id? 'cursor-wait' : 'cursor-pointer']
              "
            />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from "@/api/cart";
import { allProductsStore } from "@/api/products";
import { useWishlistStore } from "@/api/wishlist";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const allProducts = allProductsStore();
const router = useRouter();
const postCart = useCartStore();
const userWishList = useWishlistStore();

function goToProductDetails(id: string) {
  router.push({ name: "productDetails", params: { id } });
}

onMounted(() => {
  allProducts.getProductsData();
});

</script>

<style scoped>
@media (min-width: 768px) {
  button:not(.loading-active) {
    transition: all 0.5s ease-in-out;
    opacity: 0;
    transform: translateY(100%);
  }

  .show-button:hover button {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 767px) {
  button {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
