<script setup lang="ts">
import { ref, watch } from 'vue';

defineProps<{ menus: string[]  }>()

const openMobileMenu = ref<boolean>(false);

watch(
    openMobileMenu,
    (menu, prevMenu) => {
      console.log('openMobileMenu', prevMenu, ' -> ', menu)
    }
);
</script>

<template>
  <!-- Hero Section -->
  <section id="hero">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <!-- Menu/Logo Container -->
      <nav class="flex items-center justify-between font-bold text-white">
        <!-- Logo -->
        <img src="/src/assets/loopstudios/images/logo.svg" alt="">
        <!-- Menu -->
        <div class="hidden h-10 font-alata md:flex md:space-x-8">
          <div v-for="menu in menus" class="group">
            <a href="#">{{ menu }}</a>
            <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
        </div>
        <!-- Hamburger Button -->
        <div class="md:hidden">
          <button
              id="menu-btn"
              type="button"
              class="z-40 block hamburger md:hidden focus:outline-none"
              :class="openMobileMenu ? 'open' : ''"
              @click="openMobileMenu = !openMobileMenu"
          >
            <span class="hamburger-top bg-white"></span>
            <span class="hamburger-middle bg-white"></span>
            <span class="hamburger-bottom bg-white"></span>
          </button>
        </div>
      </nav>
      <!-- Mobile Menu -->
      <div
          id="menu"
          v-show="openMobileMenu"
          class="absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12
            space-y-3 text-lg text-white uppercase bg-black md:hidden">
        <a v-for="menu in menus" href="#" class="hover:text-pink-500">{{ menu }}</a>
      </div>
      <div class="max-w-lg mt-32 mb-32 p-4 font-josefin text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
        Impressive Experiences That Deliver
      </div>
    </div>
  </section>
</template>

<style scoped>
#hero {
  @apply bg-[url('/src/assets/loopstudios/images/desktop/image-hero.jpg')] bg-no-repeat bg-cover;
}

@media(max-width: 576px) {
  #hero {
    @apply bg-[url('/src/assets/loopstudios/images/mobile/image-hero.jpg')] bg-center;
  }
}
</style>
