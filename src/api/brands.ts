import { defineStore } from "pinia";
import api, { handleApiError } from "./axiosClient";
import { ref } from "vue";
import type { Brand } from "@/types/apiInterface";



 export const allBrandsStore = defineStore('brands', ()=>{
const brands = ref<Brand[]>([]);
const specificBrand = ref<Brand | null>(null);

    async function getAllBrands (){
        try {
            const res = await api.get('/brands');
            brands.value = res.data.data;
        }catch(err){
        handleApiError(err);
    }
    }

    async function gitSpecificBrand(prandId : string) {
        
        try {
            const res = await api.get(`/brands/${prandId}`);
            console.log('res.data', res.data);
            specificBrand.value = res.data.data;
        }catch(err){
            handleApiError(err);
        }
    }
    return {brands, specificBrand, getAllBrands, gitSpecificBrand}
})