<script setup lang="ts">

import { ref } from 'vue';

const menus = ref<string[]>([
    'About', 'Careers', 'Events', 'Products', 'Support',
])
</script>

<template>
  <div class="container">
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
          <!-- @todo Hamburger Button -->

        </nav>
        <!-- @todo Mobile Menu -->
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
  </div>
</template>

<style scoped>
#hero {
  @apply bg-[url('../assets/loopstudios/images/desktop/image-hero.jpg')] bg-no-repeat bg-cover;
}

@media(max-width: 576px) {
  #hero {
    @apply bg-[url('../assets/loopstudios/images/mobile/image-hero.jpg')] bg-center;
  }
}
</style>
