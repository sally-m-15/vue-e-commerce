<template>
    <div class="min-h-screen relative">
    <LoadingSpinner />
    <section class="flex flex-col md:flex-row container mx-auto  md:items-center w-full p-4 gap-20 lg:justify-center">
        <div class=" w-full md:w-96 lg-1/3 mt-8 self-center">
            <Carousel v-bind="carouselConfig">
                <Slide v-for="img in details.product?.images.slice(0, 2)" :key="img">
                    <img class="w-full" :src="img" alt="`${details.product?.title} image`"></img>
                </Slide>
                <template #addons>
                    <div class="pt-10">
                        <Pagination />
                    </div>
            </template>F
            </Carousel>
        </div>
        <div class="gap-2 md:w-2/3 flex flex-col w-full">
            <h2 class="text-3xl font-medium dark:text-white">{{ details.product?.title.split(' ').slice(0,2).join(' ') }}</h2>
            <p class="dark:text-white">{{ details.product?.description }}</p>
                <span class="flex justify-between mt-3 dark:text-white">
                <p>{{ details.product?.price }} EGp</p>
                <span>
                <i class="fa-solid fa-star text-amber-400 text-sm"></i>  
                <small>{{ details.product?.ratingsAverage }}</small>  
                </span>
            </span>
                <span class="flex justify-center mt-4 dark:text-white gap-20 mb-20 md:mb-0 ms-20 md:ms-0">
                <button  
                @click="addcart.postCartItem(details.product?.id)"
                class="bg-green-600 hover:bg-green-700 px-14 rounded-md block cursor-pointer py-1 w-full">Add</button>
                <i class="fa-solid fa-heart text-2xl"></i>
            </span>
        </div>
    </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { allProductsStore } from '../../api/products';
import { useRoute } from 'vue-router';


const route = useRoute();
const details = allProductsStore();
const addcart = useCartStore();

import { Carousel, Slide, Pagination } from 'vue3-carousel'
import LoadingSpinner from '../LoadingSpinner.vue';
import { useCartStore } from '@/api/cart';

onMounted(()=>{
    details.isLoading = true;
    details.getProductsDetails(route.params.id);
})

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
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