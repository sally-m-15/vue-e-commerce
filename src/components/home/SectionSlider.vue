<template>
  <section
    class="flex justify-center"
  >
  <div class="flex-col w-full items-center max-w-md h-full md:items-stretch justify-center flex pt-36 md:flex-row"
>
    <div class="w-1/2 h-full">
      <Carousel v-bind="carouselConfig" class="h-full">
        <Slide class="aspect-[412/600]">
          <img
            class="w-full h-full aspect-[412/600]"
            src="/src/assets/img/41nN4nvKaAL._AC_SY200_.webp"
            alt="41nN4nvKaAL"
            width="412" 
            height="600"
            fetchpriority="high"
            decoding="async"
          />
        </Slide>
        <Slide class="aspect-[412/600]">
          <img
            class="w-full h-full aspect-[412/600] object-cover"
            loading="lazy"
            src="/src/assets/img/61cSNgtEISL._AC_SY200_.webp"
            alt="61cSNgtEISL"
            width="412"
            height="600"
            decoding="async"
          />
        </Slide>
        <template #addons>
          <div class="text-white pt-8">
            <Pagination />
          </div>
        </template>
      </Carousel>
    </div>
    <div class="flex flex-col w-1/2 bg-amber-700">
      <div class=" w-full h-1/2 aspect-[412/300]">
        <img
          src="../../assets/img/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.webp"
          alt="XCM_Manual"
          width="412"
      height="300"
      fetchpriority="high"
      decoding="async"
      class="w-full h-full aspect-[412/300] object-cover"
        />
      </div>
      <div class="w-full h-1/2 aspect-[412/300] ">
        <img
          src="/src/assets/img/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.webp"
          alt="Bags"
          width="412"
      height="300"
      fetchpriority="high"
      decoding="async"
      class="w-full h-full aspect-[412/300] object-cover"
        />
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";
const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 3000,
  transition: 800,
  pauseAutoplayOnHover: true,
};
</script>

<style scoped></style>
