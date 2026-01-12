<template>
  <section
    class="px-5 overflow-x-auto dark:bg-gray-950 whitespace-nowrap min-h-screen text-center text-gray-500 gap-4"
  >
    <h2 class="dark:text-white text-black text-6xl my-12 font-normal">404</h2>
    <span class="font-bold">file not found</span>
    <p class="py-3 ps-12 lg:ps-0">
      The site configured at this address does not contain the requested file.
    </p>
    <p class="flex flex-col text-center">
      If this is your site, make sure that the filename case matches the URL as
      well as any <span>file permissions.</span>
    </p>
    <p class="py-3">
      For root URLs (like <small class="font-mono">http://example.com/</small>)
      you must provide an <small>index.html</small> file.
    </p>
    <p>
      <a
        href="https://github.com/sally-m-15"
        class="hover:underline text-blue-500 text-sm"
        target="_blank"
        >Read the full documentation</a
      >
      for more information about using
      <span class="font-bold">GitHub Pages.</span>
    </p>
    <p class="py-3">
      <a href="https://www.githubstatus.com" class="hover:underline"
        >GitHub Status</a
      >
      <span class="px-3">ـــــ</span>
      <a href="https://x.com/githubstatus" class="hover:underline"
        >@githubstatus</a
      >
    </p>
    <router-link :to="{ name: 'file-notfound' }"
      ><v-icon name="fa-github" scale="2" class=" text-gray-300"></v-icon
    ></router-link>
  </section>
</template>

<script setup lang="ts">
import { addIcons } from 'oh-vue-icons';
import { FaGithub } from 'oh-vue-icons/icons';

  addIcons(FaGithub);
</script>

<style scoped>
span {
  font-family: "Encode Sans SC", sans-serif;
}
</style>
