<template>
    <div class="container mx-auto py-36 relative">
        <div class="grid mx-5 xl:mx-0 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 pt-6">
            <div class=" border rounded-lg dark:border-white border-gray-400  shadow-green-600 shadow-md
            md:shadow-none md:hover:shadow-green-600 md:hover:shadow-md cursor-pointer"
            v-for="brand in brandsStore.brands"
            :key="brand._id"
            @click="brandsStore.gitSpecificBrand(brand._id)"
            >
                <div class="w-full h-60 aspect-[450/328]">
                <img loading="lazy" width="450"
                height="328" class="w-full h-full rounded-t-lg aspect-[450/328]" decoding="async" fetchpriority="high" :src="brand.image" :alt="brand.name">
                </div>
                <div class="text-black text-center dark:text-white">
                <h3 class="py-4">{{ brand.name }}</h3>
            </div>
            </div>
        </div>
    </div>
    <div v-if="brandsStore.specificBrand" 
    class="bg-gray-900/50 dark:bg-gray-800/70 w-full text-center fixed inset-0 flex justify-center">
        <div class="max-w-96 mx-5 md:mx-0 bg-white dark:bg-gray-800 mt-40 h-64 rounded-lg">
         <div 
         class="flex justify-end">
               <v-icon
               @click="closeOverlay"
             name="fa-times"
             class="me-3 mt-3 cursor-pointer dark:text-gray-500"
            scale="1.3"
            />
         </div>
            <div class=" border-y flex mt-2 dark:border-gray-950">
                <div class="w-1/2 mt-8 flex flex-col items-start ps-10 gap-5 ">
                    <h3 class="text-4xl font-bold text-green-700">{{ brandsStore.specificBrand?.name }}</h3>
                    <small class="font-medium dark:text-white">{{ brandsStore.specificBrand?.slug }}</small>
                </div>
                <div class="w-1/2 aspect-[450/318]">
                    <img class="w-full aspect-[450/318]" loading="lazy" height="318" width="450" decoding="async" :src="brandsStore.specificBrand?.image" :alt="brandsStore.specificBrand?.name">
                </div>
            </div>
<div class="flex justify-end px-3">
    <button
    @click="closeOverlay"
    class="bg-gray-500 text-white rounded-lg p-1 px-3 mt-2 cursor-pointer">
        Close
    </button>
</div>        
</div>
    </div>
</template>
<script setup lang="ts">
import { allBrandsStore } from '@/api/brands';
import { onMounted } from 'vue';

const brandsStore = allBrandsStore();

function closeOverlay() {
    brandsStore.specificBrand = null;
}

onMounted(()=>{
    brandsStore.getAllBrands();
})
</script>

<style scoped>

</style>