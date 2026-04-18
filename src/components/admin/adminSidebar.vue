<template>

    <aside>
        <div class=" bg-white dark:bg-gray-900 h-screen px-6 w-50">
            <nav class="h-full">
                <div class="flex justify-between items-end">
        <router-link
          :to="{ name: 'home'}"
          class="pt-6"
        >
          <v-icon
          name="fa-shopping-cart"
          scale="1.5"
            class=" dark:text-gray-50 text-green-800"
          />
          <strong class="text-xl font-medium dark:text-gray-50">fresh cart</strong>
        </router-link>
         <button @click="darkMode" class="cursor-pointer">
            <v-icon 
            name="fa-sun"
            v-if="dark" class=" text-amber-300"/>
            <v-icon 
            name="fa-moon"
            v-else class=" text-black"/>
          </button>
                </div>
                <div class="flex flex-col justify-between h-[80%]">
                 <ul class="pt-6">
                    <li v-for="admin in adminNavLinks" class="pt-4" :key="admin.name">
                        <router-link 
                        :to="admin.routeName" class=" dark:text-gray-300 flex items-center gap-4">
                <v-icon
          :name="admin.icon"
          scale="1.2"
            class=" dark:text-gray-300 text-green-800"
          />
            {{ admin.name }}</router-link></li>
                </ul>
                <div class="flex flex-col gap-4">
                    <router-link 
                        :to="{ name: 'settings'}"
                        class="flex items-center gap-4  rounded-lg dark:text-gray-300"
                    >
                        <v-icon name="fa-cog" scale="1.1" />
                        <span class="font-medium">Settings</span>
                    </router-link>
                    <button
                    @click="handleAdminLogOut"
                    class="flex items-center gap-4 cursor-pointer  rounded-lg dark:text-gray-300"
                    >
                        <v-icon 
                        name="fa-sign-out-alt" scale="1.1"
                        />
                        <span class="font-medium">Log Out</span>
                    </button>
                </div>
                </div>
            </nav>
        </div>
    </aside>
</template>

<script setup>
import { useAuthStore } from "@/composables/services/useAuthApi";
import { dark, darkMode } from "@/composables/useDarkMode";
import { adminNavLinks } from "@/data/adminNavLinks.ts"
import { useRouter } from "vue-router";

const userData = useAuthStore();
const router = useRouter();

function handleAdminLogOut (){
  userData.logOut();
  router.push({ name: 'sign-in' });
}
</script>

<style scoped>
.router-link-exact-active {
  transition: all 0.2s ease-in;
  background-color: #016630;
  border-radius: 10px;
  color: white !important;
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