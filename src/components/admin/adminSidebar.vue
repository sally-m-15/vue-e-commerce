<template>
    <aside>
        <div class=" bg-gray-900 w-50 rounded-xl h-[460px]">
            <nav>
                <ul class="py-12 px-6">
                    <li class="pt-4" v-for="admin in adminNavLinks" :key="admin.name">
                        <router-link :to="admin.routeName">{{ admin.name }}</router-link></li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script setup>
import { adminNavLinks } from "@/data/adminNavLinks.ts"
</script>

<style lang="scss" scoped>

</style>