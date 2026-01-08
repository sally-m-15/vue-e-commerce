<template>
    <div class="container mx-auto py-36 flex flex-col md:flex-row gap-10 px-10"
    v-if="category.supcategories.length > 0"
    >
        <div class="border flex flex-col dark:border-gray-300 md:w-1/5 self-start py-4"
        >
        <h2
            class="dark:text-white py-4 px-4"
            @click="productStore.selectedSupCategory = 'all'"
            :class="productStore.selectedSupCategory === 'all'? 'bg-gray-600 md:w-full' : 'cursor-pointer'"
            >
            <v-icon name="fa-th-large" />
            all
        </h2>
            <div
            v-for="sup in category.supcategories"
            >  
            <h2 class="dark:text-white py-4 px-4"
            :class="productStore.selectedSupCategory === sup.name ? 'bg-gray-600' : 'cursor-pointer'"
            >
                <v-icon 
                :name="getIcon(sup.name)"
                />
                {{ sup.name }}</h2>
            </div>
        </div>
        <div class="border md:w-full p-5 dark:border-gray-300 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        <div class="text-white" 
        @click="goToProductDetails(products.id)"
        v-if="productStore.filteredProducts.length > 0"
        v-for="products in productStore.filteredProducts"
        :key="products.id"
        >
            <div class=" shadow-green-600 shadow-md
            md:shadow-none md:hover:shadow-green-600 md:hover:shadow-md cursor-pointer">
            <div>
                <img class="h-full w-full" loading="lazy"  :src="products.imageCover" :alt="products.title">
            </div>
                <h3 class="text-black dark:text-white mt-2 line-clamp-1 ps-2">{{ products.title }}</h3>
                <p class="text-green-500 ps-2 pb-2">{{ products.price }} EGP</p>
            </div>
            </div>
            
            <div 
            class=" col-span-full flex flex-col justify-center items-center"
            v-else
            >
            <v-icon
            scale="2"
            name="fa-box-open"
            class="text-amber-800 md:self-center"
            />
                <h2 class="dark:text-white text-2xl">No products found</h2>
            </div>
        </div>
    </div>
    <div class="container mx-auto flex flex-col pt-36  items-center"
    v-else
    >
        <v-icon
        scale="2"
        name="fa-box-open"
        class="text-amber-800 self-center"
        />
    <h2 class="dark:text-white text-2xl">No products found</h2>
    </div>
</template>

<script setup lang="ts">
import { allCategoriesStore } from '@/api/categories';
import { onMounted, onUnmounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { allCategoryIcons } from '@/icons/categoryIcons';
import { allProductsStore } from '@/api/products';

const route = useRoute();
const category = allCategoriesStore();
const productStore = allProductsStore();
const router = useRouter();

onMounted(async()=>{
    const id = route.params.id as string;
    if (id) {
        productStore.selectedMainCategoryId = id;
      await  category.getSpecificCategory(id);
    }
   await productStore.getProductsData();

  if (category.supcategories.length > 0) {
      productStore.selectedSupCategory = 'all';
    }
});

const getIcon = (name: string) => {
  const icon = allCategoryIcons[name];
  if (!icon) return "fa-circle";
  return icon.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

function goToProductDetails(id: string) {
  router.push({ name: "productDetails", params: { id } });
}
onUnmounted(()=>{
    productStore.resetFilters();
})
</script>

<style lang="scss" scoped>

</style>