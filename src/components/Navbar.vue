<template>
  <header class="dark:bg-gray-900 bg-gray-100 fixed top-0 start-0 z-10 w-full">
    <nav
      class="container mx-auto py-5 w-full dark:bg-gray-900 bg-gray-100"
      :class="!menu ? 'lg:flex md:justify-between lg:items-center' : ''"
    >
      <div class="flex justify-between px-5">
        <router-link
          exact-active-class="''"
          :to="{ name: 'sign-in' }"
          class="flex items-center"
          @click="menu = false"
        >
          <v-icon
          name="fa-shopping-cart"
          scale="2"
            class=" dark:text-gray-50 text-green-600"
          />
          <strong class="text-2xl font-medium dark:text-gray-50">fresh cart</strong>
        </router-link>
        <button
          @click="toggleMenu"
          aria-label="Toggle navigation menu"
          class="lg:hidden flex border rounded-lg focus:border-gray-600 focus:border-4 border-gray-300 text-center p-2 px-3"
        >
          <v-icon
          name="fa-bars"
          scale="1.3"
          class=" cursor-pointer text-gray-500"/>
        </button>
      </div>
      <ul
        v-if="userData.isloggedIn"
        class="gap-4 dark:text-gray-400 text-gray-700"
        :class="menu ? 'text-center flex flex-col' : 'hidden lg:flex'"
      >
        <li
        v-for="link in navLinks"
        :key="link.routeName"
        >
          <router-link
            :to="{ name: link.routeName }"
            @click="menu = false"
            class="hover:dark:text-gray-50 hover:text-gray-950"
            >{{ link.name }}</router-link
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
            @click="menu = false"
            :to="{ name: 'sign-up' }"
            class="hover:dark:text-gray-50 hover:text-gray-950"
          >
            register
          </router-link>
        </li>
        <li v-if="userData.isloggedIn">
          <router-link
            :exact-active-class="''"
            :to="{ name: 'cart' }"
            class="hover:dark:text-gray-50 hover:text-gray-950 relative"
            @click="menu = false"
          >
            <v-icon
            scale="1.6"
            name="fa-shopping-cart"
              class="fa-cart-shopping text-2xl cursor-pointer dark:text-gray-50 text-gray-950"
            />
            <span
                class="w-6 h-6 rounded-lg flex justify-center items-center bottom-4 start-5 bg-green-600 absolute text-sm font-stretch-normal text-white"
                >{{ cartStore.numOfCartItems }}</span
              >
          </router-link>
        </li>
        <li v-if="!userData.isloggedIn">
          <router-link
            :to="{ name: 'sign-in' }"
            class="hover:dark:text-gray-50 hover:text-gray-950"
            @click="menu = false"
          >
            log in
          </router-link>
        </li>
        <li v-if="userData.isloggedIn">
          <button
            @click="handelLogOut"
            class="hover:dark:text-gray-50 hover:text-gray-950 cursor-pointer"
          >
            log out
          </button>
        </li>
        <li>
          <button @click="darkMode" class="cursor-pointer">
            <v-icon 
            name="fa-sun"
            v-if="dark" class=" text-amber-300"/>
            <v-icon 
            name="fa-moon"
            v-else class=" text-black"/>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { darkMode, dark } from "@/composables/useDarkMode";
import { useAuthStore } from "@/composables/services/useAuthApi";
import { useCartStore } from "@/api/cart";
import { navLinks } from "@/data/navLinks";

const menu = ref<boolean>(false);
const userData = useAuthStore();
const cartStore = useCartStore();

function toggleMenu() {
  menu.value = !menu.value;
}

function handelLogOut (){
  userData.logOut();
  menu.value = false;
}

function handleScroll() {
  if (menu.value) {
    menu.value = false;
  }
}

onMounted(()=>{
  window.addEventListener('scroll', handleScroll)
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
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
