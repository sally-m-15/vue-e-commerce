<template>
  <div class="container mx-auto py-20 w-full p-4">
    <Form>
      <Field
        v-model="searchProduct.searchTerm"
        name="search"
        type="text"
        placeholder="Search…"
        class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </Form>
  </div>
</template>

<script setup lang="ts">
import { allProductsStore } from "@/api/products";
import { Form, Field } from "vee-validate";

const searchProduct = allProductsStore();
</script>

<style scoped></style>
