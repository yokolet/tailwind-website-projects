<script setup lang="ts">
import { ref } from 'vue';
import logoChrome from '/src/assets/bookmark/images/logo-chrome.svg';
import logoFirefox from '/src/assets/bookmark/images/logo-firefox.svg';
import logoOpera from '/src/assets/bookmark/images/logo-opera.svg';

interface IDownload {
  margin: string;
  image: string;
  message: string;
  version: string;
}

const downloads = ref<IDownload[]>([
  {
    margin: '',
    image: logoChrome,
    message: 'Add to Chrome',
    version: 'Minimum Version 62',
  },
  {
    margin: 'md:mt-8',
    image: logoFirefox,
    message: 'Add to Firefox',
    version: 'Minimum Version 55',
  },
  {
    margin: 'md:mt-16',
    image: logoOpera,
    message: 'Add to Opera',
    version: 'Minimum Version 46',
  },
]);
</script>

<template>
  <!-- Download Boxes -->
  <section id="download-boxes" class="py-32">
    <!-- Boxes Container -->
    <div
        class="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0
          md:space-x-7 md:flex-row"
    >
      <!-- Boxes -->
      <div
          v-for="download in downloads"
          class="w-full md:w-1/3"
      >
        <div
            class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg"
            :class="download.margin"
        >
          <!-- Image -->
          <div class="flex justify-center">
            <img :src="download.image" alt="">
          </div>
          <!-- Text -->
          <h5 class="pt-6 text-xl font-bold">{{ download.message }}</h5>
          <p class="text-gray-400">{{ download.version }}</p>
          <!-- Dots -->
          <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
            <a
                href="#"
                class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue
                  hover:text-softBlue hover:bg-white border-softBlue"
            >
              Add & Install Extension
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
