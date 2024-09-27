<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ menus: string[] }>()

const openMobileMenu = ref(false);
</script>

<template>
  <nav class="container relative mx-auto p-6">
    <!-- Flex Container for Nav Items -->
    <div class="flex items-center justify-between space-x-20 my-6">
      <!-- Logo -->
      <div class="z-30">
        <img
            src="/src/assets/bookmark/images/logo-bookmark.svg"
            alt=""
            id="logo" />
      </div>
      <!-- Menu Items -->
      <div class="hidden items-center space-x-10 uppercase text-grayishBlue2 md:flex">
        <a
            v-for="menu in menus"
            :href="`#${menu}`"
            class="tracking-widest hover:text-softRed"
        >{{ menu }}</a>
        <a
            href="#"
            class="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md
              hover:text-softRed hover:bg-white"
        >Login</a>
      </div>
      <!-- Hamburger Button -->
      <button
          id="menu-btn"
          class="z-30 block md:hidden focus:outline-none hamburger"
          :class="openMobileMenu ? 'open' : ''"
          @click="openMobileMenu = !openMobileMenu"
      >
        <span class="hamburger-top bg-black"></span>
        <span class="hamburger-middle bg-black"></span>
        <span class="hamburger-bottom bg-black"></span>
      </button>
    </div>
    <!-- Mobile Menu -->
    <div
        v-show="openMobileMenu"
        id="menu"
        class="fixed inset-0 z-20 flex flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4
          tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue2">
      <div class="w-full py-3 text-center">
        <a
            href="#features"
            class="block hover:text-softRed"
            @click="openMobileMenu = !openMobileMenu"
        >Features</a>
      </div>
      <div class="w-full py-3 text-center">
        <a
            href="#download"
            class="block hover:text-softRed"
            @click="openMobileMenu = !openMobileMenu"
        >Download</a>
      </div>
      <div class="w-full py-3 text-center">
        <a
            href="#faq"
            class="block hover:text-softRed"
            @click="openMobileMenu = !openMobileMenu"
        >FAQ</a>
      </div>
      <div class="w-full py-3 text-center">
        <a
            href="#"
            class="block hover:text-softRed"
            @click="openMobileMenu = !openMobileMenu"
        >Login</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.open .hamburger-top,
.open .hamburger-bottom {
  @apply bg-white;
}
</style>
