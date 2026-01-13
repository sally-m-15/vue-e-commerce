<template>

    <section class="flex flex-col md:flex-row container mx-auto pt-28  md:items-center w-full p-4 gap-20 lg:justify-center px-20 md:px-0">
        <div class=" w-full md:w-96 lg-1/3 mt-8 self-center mb-10">
            <Carousel v-bind="carouselConfig">
                <Slide v-for="img in details.product?.images" :key="img" class="aspect-[2160/2500]">
                    <img class="w-full object-cover aspect-[2160/2500]" fetchpriority="high" decoding="async"
                    :src="img" height="2500" width="2160" :alt="`${details.product?.title}`"></img>
                </Slide>
                <template #addons>
                    <div class="pt-10">
                        <Pagination />
                    </div>
            </template>
            </Carousel>
        </div>
        <div class="gap-2 md:w-2/3 flex flex-col w-full">
        <span class="flex justify-between dark:text-white">
            <h2 class="text-3xl font-medium dark:text-white">{{ details.product?.title.split(' ').slice(0,2).join(' ') }}</h2>
            <button @click="addcart.goToCart" class="relative" v-if="details.product && addcart.getProductCount(details.product?.id) > 0" >
            <v-icon
            scale="1.5"
            name="fa-shopping-cart"
            class="fa-cart-shopping text-2xl cursor-pointer dark:text-gray-50 text-gray-950"
            />
            <span
                class="w-6 h-6 rounded-lg flex justify-center items-center bottom-4 start-2 bg-green-600 absolute text-sm font-stretch-normal text-white"
                >{{ addcart.getProductCount(details.product?.id) }}</span>
            </button>
        </span>
            <p class="dark:text-white pt-5">{{ details.product?.description }}</p>
                <span class="flex justify-between mt-3 dark:text-white">
                <p>{{ details.product?.price }} EGp</p>
                <span>
                <v-icon
                name="fa-star"
                class=" text-amber-400 text-sm"/>  
                <small>{{ details.product?.ratingsAverage }}</small>  
                </span>
                </span>
                <span class="flex justify-center mt-4 dark:text-white gap-20 mb-20 md:mb-0 ms-20 md:ms-0">
                <button  
                @click="addcart.postCartItem(details.product?.id)"
                :disabled="addcart.LoadingId === details.product?.id"
                class="bg-green-600 hover:bg-green-700 px-14 rounded-md block cursor-pointer py-1 w-full"
                :class="addcart.LoadingId === details.product?.id? 'cursor-wait' : 'cursor-pointer'"
                >
                <span v-if="addcart.LoadingId === details.product?.id">adding...</span>
                <span v-else>add</span>
            </button>
                <v-icon 
                name="fa-heart"
                @click.stop="userWishList.postWishList(details.product?.id)"
                :class="[userWishList.likedProducts.has(details.product?.id) ? 'text-red-700' : '',
                    userWishList.LoadingId === details.product?.id? 'cursor-wait' : 'cursor-pointer'
                ]
                "
                scale="1.3"
                />
            </span>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { allProductsStore } from '../../api/products';
import { useRoute } from 'vue-router';
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { useCartStore } from '@/api/cart';
import { useWishlistStore } from '@/api/wishlist';

const route = useRoute();
const details = allProductsStore();
const addcart = useCartStore();



const userWishList = useWishlistStore();

onMounted(()=>{
    details.isLoading = true;
    details.getProductsDetails(route.params.id);
})

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
    autoplay: 3000,
  transition: 800,
  pauseAutoplayOnHover: true,
}

</script>

<style>
 html.dark .carousel__pagination-button {
  background-color: gray;
}
html.dark .carousel__pagination-button--active{
  background-color: white;
}
</style>