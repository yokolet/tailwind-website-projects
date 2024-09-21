<script setup lang="ts">

import { ref, watch } from 'vue';

interface IItem {
  desktop: string;
  mobile: string;
  title: string;
}

const menus = ref<string[]>([
    'About', 'Careers', 'Events', 'Products', 'Support',
]);

const items = ref<IItem[]>([
  {
    desktop: '/src/assets/loopstudios/images/desktop/image-deep-earth.jpg',
    mobile: '/src/assets/loopstudios/images/mobile/image-deep-earth.jpg',
    title: 'Deep Earth',
  },
  {
    desktop: '/src/assets/loopstudios/images/desktop/image-night-arcade.jpg',
    mobile: '/src/assets/loopstudios/images/mobile/image-night-arcade.jpg',
    title: 'Night Arcade',
  },
  {
    desktop: '/src/assets/loopstudios/images/desktop/image-soccer-team.jpg',
    mobile: '/src/assets/loopstudios/images/mobile/image-soccer-team.jpg',
    title: 'Soccer Team VR',
  },
  {
    desktop: '/src/assets/loopstudios/images/desktop/image-grid.jpg',
    mobile: '/src/assets/loopstudios/images/mobile/image-grid.jpg',
    title: 'The Grid',
  },
  {
    desktop: '/src/assets/loopstudios/images/desktop/image-from-above.jpg',
    mobile: '/src/assets/loopstudios/images/mobile/image-from-above.jpg',
    title: 'From Up Above VR',
  },
  {
    desktop: '/src/assets/loopstudios/images/desktop/image-pocket-borealis.jpg',
    mobile: '/src/assets/loopstudios/images/mobile/image-pocket-borealis.jpg',
    title: 'Pocket Borealis',
  },
  {
    desktop: '/src/assets/loopstudios/images/desktop/image-curiosity.jpg',
    mobile: '/src/assets/loopstudios/images/mobile/image-curiosity.jpg',
    title: 'The Curiosity',
  },
  {
    desktop: '/src/assets/loopstudios/images/desktop/image-fisheye.jpg',
    mobile: '/src/assets/loopstudios/images/mobile/image-fisheye.jpg',
    title: 'Make It Fisheye',
  },
]);

const socialIcons = ref<string[]>([
    '/src/assets/loopstudios/images/icon-facebook.svg',
    '/src/assets/loopstudios/images/icon-twitter.svg',
    '/src/assets/loopstudios/images/icon-pinterest.svg',
    '/src/assets/loopstudios/images/icon-instagram.svg',
]);

const openMobileMenu = ref<boolean>(false);

watch(
    openMobileMenu,
    (menu, prevMenu) => {
      console.log('openMobileMenu', prevMenu, ' -> ', menu)
    }
);
</script>

<template>
  <div id="app">
    <!-- Hero Section -->
    <section id="hero">
      <div class="max-w-6xl mx-auto px-6 py-12">
        <!-- Menu/Logo Container -->
        <nav class="flex items-center justify-between font-bold text-white">
          <!-- Logo -->
          <img src="../assets/loopstudios/images/logo.svg" alt="">
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
    <!-- Feature Section -->
    <section id="feature">
      <!-- Feature Container -->
      <div class="relative flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
        <!-- Image -->
        <img src="../assets/loopstudios/images/desktop/image-interactive.jpg" alt="">
        <!-- Text Container -->
        <div class="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 class="max-w-lg mt-10 mb-6 font-josefin text-4xl text-center text-gray-900 uppercase md:text-5xl
          md:mt-0 md:text-left">
            The leader in interactive VR
          </h2>
          <p class="max-w-md text-center md:text-left">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
    <!-- Creations Section -->
    <section id="creations">
      <!-- Creations Container -->
      <div class="mx-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <!-- Creations Header -->
        <div class="flex justify-center mb-20 md:justify-between">
          <h2 class="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>
          <button class="hidden btn md:block">
            See All
          </button>
        </div>
        <!-- Items Container -->
        <div class="item-container">
          <!-- Item -->
          <div v-for="item in items.slice(0, 4) " class="group item">
            <!-- Desktop Image -->
            <img
                :src="item.desktop"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110" />
            <!-- Mobile Image -->
            <img
                :src="item.mobile"
                alt=""
                class="md:hidden w-full" />
            <!-- Item Gradient -->
            <div class="item-gradient"></div>
            <!-- Item Text -->
            <h5>{{ item.title }}</h5>
          </div>
        </div>
        <!-- Items Container 2 -->
        <div class="item-container mt-10">
          <!-- Item -->
          <div v-for="item in items.slice(4) " class="group item">
            <!-- Desktop Image -->
            <img
                :src="item.desktop"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110" />
            <!-- Mobile Image -->
            <img
                :src="item.mobile"
                alt=""
                class="md:hidden w-full" />
            <!-- Item Gradient -->
            <div class="item-gradient"></div>
            <!-- Item Text -->
            <h5>{{ item.title }}</h5>
          </div>
        </div>
        <!-- Bottom Button Container -->
        <div class="flex justify-center mt-10 md:hidden">
          <button class="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="bg-black">
      <!-- Container -->
      <div class="container max-w-6xl py-10 mx-auto">
        <!-- Footer Flex Container -->
        <div class="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <!-- Manu and Logo Container -->
          <div class="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <!-- Logo -->
            <div class="h-8">
              <img src="../assets/loopstudios/images/logo.svg" alt="" class="w-44 md:ml-3" />
            </div>
            <!-- Menu Container -->
            <div class="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              <div v-for="menu in menus" class="h-10 group">
                <a href="#">{{ menu }}</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>
          <!-- Social & Copy Container -->
          <div class="flex flex-col items-start justify-between space-y-4 text-gray-500">
            <!-- icons Container -->
            <div class="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              <!-- Icons -->
              <div v-for="icon in socialIcons" class="h-8 group">
                <a href="#">
                  <img :src="icon" alt="" class="h-6">
                </a>
              </div>
            </div>
            <!-- Copy -->
            <div class="font-bold">
              &copy; 2024 Loopstudios. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
h5 {
  @apply absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black
}

#app {
  @apply font-josefin
}

#hero {
  @apply bg-[url('../assets/loopstudios/images/desktop/image-hero.jpg')] bg-no-repeat bg-cover;
}

.btn {
  @apply px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black font-alata
  hover:bg-black hover:text-white
}

.item-container {
  @apply flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row
  md:space-y-0 md:space-x-8;
}

.item {
  @apply relative overflow-hidden md:w-1/4
}

.item-gradient {
  @apply absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900
  group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70
}

@media(max-width: 576px) {
  #hero {
    @apply bg-[url('../assets/loopstudios/images/mobile/image-hero.jpg')] bg-center;
  }
}
</style>
