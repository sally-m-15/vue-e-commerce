<template>
  <section
    class="flex-col items-center flex md:justify-center pt-24 md:flex-row"
  >
    <div class="w-60 h-full">
      <Carousel v-bind="carouselConfig" class="!h-full">
        <Slide class="!h-full">
          <img
            class="w-full"
            src="../../assets/img/41nN4nvKaAL._AC_SY200_.jpg"
            alt="41nN4nvKaAL"
          />
        </Slide>
        <Slide class="!h-full">
          <img
            class="w-full"
            src="../../assets/img/61cSNgtEISL._AC_SY200_.jpg"
            alt="61cSNgtEISL"
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
        />
      </div>
      <div>
        <img
          src="../../assets/img/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg"
          alt="Bags"
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
};
</script>

<style scoped></style>
