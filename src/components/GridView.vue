<script setup lang="ts">
import { ref } from 'vue';

interface IMenu {
  link_to: string;
  bg_color: string;
  title: string;
  subtitle: string;
}
const menus = ref<IMenu[]>([
  {
    link_to: '/clipboard',
    bg_color: 'bg-orange-400',
    title: 'Clipboard',
    subtitle: 'Clipboard landing page',
  },
  {
    link_to: '/loop-studios',
    bg_color: 'bg-yellow-500',
    title: 'Loopstudios',
    subtitle: 'Loopstudios landing page',
  },
  {
    link_to: '/shortly',
    bg_color: 'bg-pink-700',
    title: 'Shortly',
    subtitle: 'Shortly landing page',
  },
  {
    link_to: '/testimonial-grid',
    bg_color: 'bg-amber-600',
    title: 'Testimonial Grid',
    subtitle: 'Testimonial Grid project',
  },
  {
    link_to: '/fylo',
    bg_color: 'bg-[rgb(213,165,70)]',
    title: 'Fylo',
    subtitle: 'Fylo landing page with theme changer',
  },
  {
    link_to: '/bookmark-manager',
    bg_color: 'bg-rose-500',
    title: 'Bookmark Manager',
    subtitle: 'Bookmark Manager landing page with tabs',
  },
]);
</script>

<template>
<div class="bg-purple-100 my-auto md:min-h-screen w-screen pl-40 pr-40 pt-10 font-poppins">
  <div class="flex items-center justify-center min-w-80 text-2xl md:text-4xl -ml-20 mb-10 text-purple-900 font-bold">
    Tailwind Website Projects
  </div>
  <div
      class="flex flex-col md:flex-row md:flex-wrap lg:max-w-6xl lg:mx-32 items-center justify-center md:justify-start"
  >
    <div v-for="menu in menus">
      <router-link :to="menu.link_to">
        <div
            class="relative items-center justify-center h-48 w-96 md:h-72 md:w-72 p-10 hover:opacity-70 duration-200"
            :class="menu.bg_color"
        >
          <div class="text-2xl text-bold text-center text-white capitalize">{{ menu.title }}</div>
          <div class="absolute px-2 left-4 bottom-8 md:bottom-6 text-lg text-gray-100">
            <div class="flex flex-row pl-10 pr-10">
              {{ menu.subtitle }}
              <div class="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div
        class="relative items-center justify-center h-48 w-96 md:h-72 md:w-72 p-10
          hover:opacity-70 duration-200 bg-[rgb(100,36,47)]"
    >
      <div class="text-2xl text-bold text-center text-white capitalize">About</div>
      <div class="absolute px-2 left-4 bottom-8 md:bottom-6 text-lg text-gray-100">
        <div class="flex flex-row pl-10 pr-10">
          <a href="https://gitlab.com/yokolet/tailwind-website-projects">GitLab Repo</a>
          <div class="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>
