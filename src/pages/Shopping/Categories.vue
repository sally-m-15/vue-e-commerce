<template>
    <div class="container mx-auto py-36">
        <div class="grid mx-5 xl:mx-0 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 pt-6">
            <div class=" border dark:border-white border-gray-400  shadow-green-600 shadow-md
            md:shadow-none md:hover:shadow-green-600 md:hover:shadow-md cursor-pointer"
            v-for="categories in allCategories.categories"
            @click="gotoSup(categories)"
            >
                <div class="w-full h-60">
                <img loading="lazy" width="200"
              height="250" class="w-full h-full" fetchpriority="high" :src="categories.image" :alt="categories._id">
                </div>
                <div class="text-black text-center dark:text-white">
                <h1 class="py-4">{{ categories.name }}</h1>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { allCategoriesStore } from '@/api/categories';
import { allProductsStore } from '@/api/products';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const allCategories = allCategoriesStore();
const productsStore =allProductsStore();
const router = useRouter();

onMounted(()=>{
    allCategories.getAllCategories();
})

function gotoSup(categoryItem: any) {
    productsStore.selectedSupCategory = categoryItem.name;
    router.push({name: 'subCategories', params: {id: categoryItem._id}})
}
</script>

<style scoped>

</style>