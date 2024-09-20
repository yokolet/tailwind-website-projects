<script setup lang="ts">

import { ref } from 'vue';

const menus = ref<string[]>([
    'About', 'Careers', 'Events', 'Products', 'Support',
])
</script>

<template>
  <!-- Hero Section -->
  <section id="hero">
    <div class="container max-w-6xl mx-auto px-6 py-12">
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
      <div class="max-w-lg mt-32 mb-32 p-4 font-josefin font-light text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
        Impressive Experiences That Deliber
      </div>
    </div>
  </section>
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
