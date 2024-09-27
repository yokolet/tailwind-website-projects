<script setup lang="ts">
import { ref } from 'vue';
import illustrationFeaturesTab1 from '/src/assets/bookmark/images/illustration-features-tab-1.svg';
import illustrationFeaturesTab2 from '/src/assets/bookmark/images/illustration-features-tab-2.svg';
import illustrationFeaturesTab3 from '/src/assets/bookmark/images/illustration-features-tab-3.svg';

interface ITab {
  id: number;
  title: string;
}

interface IPanel {
  id: number;
  image: string;
  title: string;
  description: string;
}

const currentTab = ref<number>(0);

const tabs = ref<ITab[]>([
  {
    id: 0,
    title: 'Simple Bookmarking',
  },
  {
    id: 1,
    title: 'Speedy Searching',
  },
  {
    id: 2,
    title: 'Easy Sharing',
  },
]);

const panels = ref<IPanel[]>([
  {
    id: 0,
    image: illustrationFeaturesTab1,
    title: 'Bookmark in one click',
    description: 'Organize your bookmarks however you like. Our simple ' +
        'drag-and-drop interface gives you complete control over how you ' +
        'manage your favourite sites.',
  },
  {
    id: 1,
    image: illustrationFeaturesTab2,
    title: 'Intelligent search',
    description: 'Our powerful search feature will help you find saved sites in no ' +
        'time at all. No need to trawl through all of your bookmarks.',
  },
  {
    id: 2,
    image: illustrationFeaturesTab3,
    title: 'Share your bookmarks',
    description: 'Easily share your bookmarks and collections with others. Create ' +
        'a shareable a link that you can send at the click of a button.',
  },
]);
</script>

<template>
  <!-- Features Tabs -->
  <section id="tabs">
    <!-- Tabs/Panels Container -->
    <div class="container relative mx-auto my-6 mb-32 mt-12 px-6">
      <div class="bg-tabs"></div>
      <!-- Tabs Flex Container -->
      <div class="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
        <!-- Tabs-->
        <div
            v-for="(tab, index) in tabs"
            @click="currentTab = index"
            class="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed
              md:w-1/3 cursor-pointer tab"
        >
          <div
              class="py-5"
              :class="currentTab === index ? 'border-b-4 border-softRed' : ''"
          >
            {{ tab.title }}
          </div>
        </div>
      </div>
      <!-- Tab Panels -->
      <div id="panels" class="container mx-auto">
        <!-- Panels -->
        <div
            v-for="(panel, index) in panels"
            v-show="currentTab === index"
            class="flex flex-col py-5 md:flex-row md:space-x-7 panel"
        >
          <!-- Panel Image -->
          <div class="flex justify-center md:w-1/2">
            <img :src="panel.image" alt="" class="relative z-10">
          </div>
          <!-- Panel Content -->
          <div class="flex flex-col space-y-8 md:w-1/2">
            <h3
                :class="index == 0 ? 'mt-32' : 'mt-14'"
                class="text-3xl font-semibold text-center md:mt-0 md:text-left"
            >
              {{ panel.title }}
            </h3>
            <p class="max-w-md text-center text-grayishBlue2 md:text-left">
              {{ panel.description }}
            </p>
            <div class="mx-auto md:mx-0">
              <a
                  href="#"
                  class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex
                    bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
              >More Info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen(lg) {
  .bg-tabs {
    right: 60%;
    @apply absolute h-[300px] w-[2000px] rounded-r-full top-60 bg-softBlue;
  }
}
</style>
