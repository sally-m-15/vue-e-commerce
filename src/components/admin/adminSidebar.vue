<template>
    <aside>
        <div class=" bg-gray-900 h-screen w-50 rounded-xl border border-gray-500">
            <nav>
                <ul class="py-2 px-6">
                    <li class="pt-4" v-for="admin in adminNavLinks" :key="admin.name">
                        <router-link :to="admin.routeName" class=" dark:text-white">{{ admin.name }}</router-link></li>
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