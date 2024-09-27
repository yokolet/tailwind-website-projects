<script setup lang="ts">
import { ref } from 'vue';

const openMobileMenu = ref<boolean>(false);

const topMenus = ref<string[]>([
  'features', 'pricing', 'resources'
])
</script>

<template>
  <!-- Nav Container -->
  <nav class="relative container mx-auto p-6">
    <!-- Flex Container For All Items -->
    <div class="flex items-center justify-between">
      <!-- Flex Container For Logo/Menu -->
      <div class="flex items-center space-x-20">
        <!-- Logo -->
        <img src="/src/assets/shortly/images/logo.svg" alt="">
        <!-- Left Menu -->
        <div class="hidden space-x-8 font-bold md:flex">
          <a
              v-for="menu in topMenus"
              href="#"
              class="text-grayishViolet hover:text-veryDarkViolet capitalize"
          >
            {{ menu }}
          </a>
        </div>
      </div>
      <!-- Right Buttons Menu -->
      <div class="hidden items-center space-x-6 font-bold text-grayishViolet md:flex">
        <div class="hover:text-veryDarkViolet">Login</div>
        <a href="#" class="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
          Sign up
        </a>
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
          <span class="hamburger-top bg-[#9c9aa6]"></span>
          <span class="hamburger-middle bg-[#9c9aa6]"></span>
          <span class="hamburger-bottom bg-[#9c9aa6]"></span>
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div
        v-show="openMobileMenu"
        id="menu"
        class="absolute flex p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100">
      <div class="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
        <a
            v-for="menu in topMenus"
            href="#"
            class="w-full text-center">{{ menu }}</a>
        <a href="#" class="w-full p-6 border-t border-gray-400 text-center">Login</a>
        <a href="#" class="w-full py-3 text-center rounded-full bg-cyan rounded-full">Sign Up</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
