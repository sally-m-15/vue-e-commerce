<template>
  <section class="container mx-auto w-full p-4 pb-20">
    <div
      class="grid mx-5 xl:mx-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6"
    >
      <div
        v-for="product in allProducts.filteredProducts"
        @click="goToProductDetails(product.id)"
        :key="product.id"
        class="show-button cursor-pointer rounded-md
        shadow-green-600 shadow-md
         md:shadow-none
        md:hover:shadow-green-600 md:hover:shadow-md py-5 px-3 transition-all duration-300 ease-in-out"
      >
        <div>
          <div class="w-full h-64 overflow-hidden rounded-md bg-gray-100">
            <img 
              loading="lazy" 
              :src="product.imageCover" 
              :alt="product.title"
              width="200"
              height="250"
              class="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" 
            />
          </div>
          <p class="mt-2 text-green-700 text-sm dark:text-green-500">
            {{ product.category.name }}
          </p>
          <h5 class="mt-4 text-md font-medium dark:text-white line-clamp-1">
            {{ product.title }}
          </h5>
          <span class="flex justify-between mt-3 dark:text-white">
            <p>{{ product.price }} EGp</p>
            <span>
              <v-icon 
              name="fa-star"
              class=" text-amber-400"/>
              <small>{{ product.ratingsAverage }}</small>
            </span>
          </span>
          <span class="flex justify-center mt-4 dark:text-white">
            <button
              @click.stop="postCart.postCartItem(product.id)"
              class="bg-green-600 hover:bg-green-700 px-10 md:px-14  rounded-xl block cursor-pointer py-1"
            >
              Add
            </button>
            <v-icon
            name="fa-heart"
            scale="1.3"
              @click.stop="userWishList.postWishList(product.id)"
              class="text-2xl"
              :class="
                userWishList.likedProducts.has(product.id) ? 'text-red-700' : ''
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
  button {
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
