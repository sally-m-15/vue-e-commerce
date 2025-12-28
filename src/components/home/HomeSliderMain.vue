<template>
  <section class="mt-20">
    <Carousel v-bind="carouselConfig">
      <Slide
        v-for="category in useCategories.categories"
        :key="category.id"
        class="flex-col"
      >
        <div class="h-52 w-full">
          <img
            class="h-full w-full  object-cover"
            :loading="index < 7 ? 'eager' : 'lazy'"
            :src="category.image"
            :alt="category.name"
            width="150" 
            height="208"
          />
        </div>
        <h3 class="dark:text-white font-bold">{{ category.name }}</h3>
      </Slide>
      <template #addons>
        <Navigation />
        <div class="pt-8 text-white">
          <Pagination />
        </div>
      </template>
    </Carousel>
  </section>
</template>

<script setup>
import { allCategoriesStore } from "@/api/categories";
import { onMounted } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const useCategories = allCategoriesStore();

const carouselConfig = {
  wrapAround: true,
  autoplay: 3000,
  transition: 800,
  pauseAutoplayOnHover: true,
  breakpoints: {
    480: {
      itemsToShow: 3,
    },
    767: {
      itemsToShow: 5,
    },
    1024: {
      itemsToShow: 7,
    },
  },
};
onMounted(() => {
  useCategories.getAllCategories();
});

</script>

<style>
html.dark .carousel__pagination-button {
  background-color: gray;
}
html.dark .carousel__pagination-button--active {
  background-color: white;
}
</style>
