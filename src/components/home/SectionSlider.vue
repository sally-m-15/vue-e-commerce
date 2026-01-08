<template>
  <section
    class="flex-col items-center flex md:justify-center pt-36 md:flex-row "
  >
    <div class="w-60 h-full">
      <Carousel v-bind="carouselConfig" class="!h-full">
        <Slide class="!h-full">
          <img
            class="w-full"
            src="../../assets/img/41nN4nvKaAL._AC_SY200_.jpg"
            alt="41nN4nvKaAL"
            width="240" 
            height="200"
            fetchpriority="high"
          />
        </Slide>
        <Slide class="!h-full">
          <img
            class="w-full"
            loading="lazy"
            src="../../assets/img/61cSNgtEISL._AC_SY200_.jpg"
            alt="61cSNgtEISL"
            width="240"
            height="152"
          />
        </Slide>
        <template #addons>
          <div class="text-white pt-10">
            <Pagination />
          </div>
        </template>
      </Carousel>
    </div>
    <div class="flex items-center flex-col w-60">
      <div>
        <img
          src="../../assets/img/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg"
          alt="XCM_Manual"
          width="240"
      height="152"
      fetchpriority="high"
      decoding="async"
        />
      </div>
      <div>
        <img
          src="../../assets/img/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg"
          alt="Bags"
          width="240"
      height="152"
      fetchpriority="high"
      decoding="async"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";
const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 4000,
  transition: 800,
  pauseAutoplayOnHover: true,
};
</script>

<style scoped></style>
