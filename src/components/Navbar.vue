<template>
  <section class="dark:bg-gray-900 bg-gray-100 fixed z-10 w-full">
    <nav
      class="container mx-auto py-5 w-full dark:bg-gray-900 bg-gray-100"
      :class="!menu ? 'lg:flex md:justify-between lg:items-center' : ''"
    >
      <div class="flex justify-between px-5">
        <router-link
          exact-active-class="''"
          :to="{ name: 'sign-in' }"
          class="flex items-center"
        >
          <i
            class="fa-solid fa-cart-shopping text-3xl dark:text-gray-50 text-green-600"
          ></i>
          <h1 class="text-2xl font-medium dark:text-gray-50">fresh cart</h1>
        </router-link>
        <button
          @click="toggleMenu"
          class="lg:hidden flex border rounded-lg focus:border-gray-600 focus:border-4 border-gray-300 text-center p-2 px-3"
        >
          <i class="fa-solid fa-bars text-2xl cursor-pointer text-gray-500"></i>
        </button>
      </div>
      <ul
        v-show="userData.isloggedIn"
        class="gap-4 dark:text-gray-400 text-gray-700"
        :class="menu ? 'text-center flex flex-col' : 'hidden lg:flex'"
      >
        <li>
          <router-link
            :to="{ name: 'home' }"
            class="hover:dark:text-gray-50 hover:text-gray-950"
            >home</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'cart' }"
            class="hover:dark:text-gray-50 hover:text-gray-950"
            >cart</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'wishList' }"
            class="hover:dark:text-gray-50 hover:text-gray-950"
            >wish list</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'products' }"
            class="hover:dark:text-gray-50 hover:text-gray-950"
            >products</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'categories' }"
            class="hover:dark:text-gray-50 hover:text-gray-950"
            >categories</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'brands' }"
            class="hover:dark:text-gray-50 hover:text-gray-950"
            >brands</router-link
          >
        </li>
      </ul>
      <ul
        class="gap-4 dark:text-gray-400 text-gray-700 mt-5 lg:mt-0"
        :class="
          menu ? 'text-center flex flex-col' : 'hidden lg:flex lg:items-center'
        "
      >
        <li v-if="!userData.isloggedIn">
          <router-link
            :to="{ name: 'sign-up' }"
            class="hover:dark:text-gray-50 hover:text-gray-950"
          >
            register
          </router-link>
        </li>
        <li v-show="userData.isloggedIn">
          <router-link
            :exact-active-class="''"
            :to="{ name: 'cart' }"
            class="hover:dark:text-gray-50 hover:text-gray-950"
          >
            <i
              class="fa-solid relative fa-cart-shopping text-2xl cursor-pointer dark:text-gray-50 text-gray-950"
            >
              <span
                class="w-6 h-6 rounded-lg flex justify-center items-center bottom-4 start-5 bg-green-600 absolute text-sm font-stretch-normal"
                >{{ nomOfcart.numOfCartItems }}</span
              ></i
            >
          </router-link>
        </li>
        <li v-if="!userData.isloggedIn">
          <router-link
            :to="{ name: 'sign-in' }"
            class="hover:dark:text-gray-50 hover:text-gray-950"
          >
            log in
          </router-link>
        </li>
        <li v-show="userData.isloggedIn">
          <button
            @click="userData.logOut"
            class="hover:dark:text-gray-50 hover:text-gray-950 cursor-pointer"
          >
            log out
          </button>
        </li>
        <li>
          <button @click="darkMode" class="cursor-pointer">
            <i v-if="dark" class="fa-solid fa-sun text-amber-300"></i>
            <i v-else class="fa-solid fa-moon text-black"></i>
          </button>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { darkMode, dark } from "@/composables/useDarkMode";
import { useAuthStore } from "@/composables/services/useAuthApi";
import { useCartStore } from "@/api/cart";

const menu = ref<boolean>(false);
const userData = useAuthStore();
const nomOfcart = useCartStore();

function toggleMenu() {
  menu.value = !menu.value;
}
</script>

<style>
.router-link-exact-active {
  transition: all 0.2s ease-in;
  background-color: #00a63e;
  border-radius: 10px;
  padding: 0 10px 3px;
  color: black;
}

html.dark .router-link-exact-active {
  text-shadow: 0 0 10px rgb(255, 255, 255);
  color: white;
  background-color: transparent;
  padding: 0;
}
</style>
