<script setup lang="ts">
import { ref } from 'vue';
import desktopDeepEarth from '/src/assets/loopstudios/images/desktop/image-deep-earth.jpg';
import mobileDeepEarth from '/src/assets/loopstudios/images/mobile/image-deep-earth.jpg';
import desktopNightArcade from '/src/assets/loopstudios/images/desktop/image-night-arcade.jpg';
import mobileNightArcade from '/src/assets/loopstudios/images/mobile/image-night-arcade.jpg';
import desktopSoccerTeam from '/src/assets/loopstudios/images/desktop/image-soccer-team.jpg';
import mobileSoccerTeam from '/src/assets/loopstudios/images/mobile/image-soccer-team.jpg';
import desktopGrid from '/src/assets/loopstudios/images/desktop/image-grid.jpg';
import mobileGrid from '/src/assets/loopstudios/images/mobile/image-grid.jpg';
import desktopFromAbove from '/src/assets/loopstudios/images/desktop/image-from-above.jpg';
import mobileFromAbove from '/src/assets/loopstudios/images/mobile/image-from-above.jpg';
import desktopPocketBorealis from '/src/assets/loopstudios/images/desktop/image-pocket-borealis.jpg';
import mobilePocketBorealis from '/src/assets/loopstudios/images/mobile/image-pocket-borealis.jpg';
import desktopCuriosity from '/src/assets/loopstudios/images/desktop/image-curiosity.jpg';
import mobileCuriosity from '/src/assets/loopstudios/images/mobile/image-curiosity.jpg';
import desktopFisheye from '/src/assets/loopstudios/images/desktop/image-fisheye.jpg';
import mobileFisheye from '/src/assets/loopstudios/images/mobile/image-fisheye.jpg';

interface IItem {
  desktop: string;
  mobile: string;
  title: string;
}

const items = ref<IItem[]>([
  {
    desktop: desktopDeepEarth,
    mobile: mobileDeepEarth,
    title: 'Deep Earth',
  },
  {
    desktop: desktopNightArcade,
    mobile: mobileNightArcade,
    title: 'Night Arcade',
  },
  {
    desktop: desktopSoccerTeam,
    mobile: mobileSoccerTeam,
    title: 'Soccer Team VR',
  },
  {
    desktop: desktopGrid,
    mobile: mobileGrid,
    title: 'The Grid',
  },
  {
    desktop: desktopFromAbove,
    mobile: mobileFromAbove,
    title: 'From Up Above VR',
  },
  {
    desktop: desktopPocketBorealis,
    mobile: mobilePocketBorealis,
    title: 'Pocket Borealis',
  },
  {
    desktop: desktopCuriosity,
    mobile: mobileCuriosity,
    title: 'The Curiosity',
  },
  {
    desktop: desktopFisheye,
    mobile: mobileFisheye,
    title: 'Make It Fisheye',
  },
]);
</script>

<template>
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
</template>

<style scoped>
h5 {
  @apply absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black
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
</style>
