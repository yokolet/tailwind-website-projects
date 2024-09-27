<script setup lang="ts">
import { ref } from 'vue';

interface IItem {
  title: string;
  description: string;
}

const items = ref<IItem[]>([
  {
    title: 'Quick Search',
    description: 'Easily search your snippets by content, category, web address, application and more.',
  },
  {
    title: 'iCloud Sync',
    description: 'Instantly saves and syncs snippets access all your devices.',
  },
  {
    title: 'Completely History',
    description: 'Retrieve any snippets from the first moment you started using the app.'
  }
]);
</script>

<template>
  <!-- Features Section-->
  <section id="features">
    <div class="clipboard-section-container my-20">
      <div class="relative flex flex-col md:flex-row md:space-x-32">
        <!-- Image -->
        <div class="md:w-1/2">
          <img src="/src/assets/clipboard/images/image-computer.png" alt="" class="md:absolute top-0 right-[50%]">
        </div>
        <!-- Items Container -->
        <div class="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
          <!-- Items -->
          <div v-for="item in items" :key="item.title">
            <h5>
              {{ item.title }}
            </h5>
            <p class="max-w-md text-grayishBlue">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
