<script setup lang="ts">
import { ref } from 'vue';
import iconAccessAnywhere from '/src/assets/fylo/images/icon-access-anywhere.svg';
import iconSecurity from '/src/assets/fylo/images/icon-security.svg';
import iconCollaboratione from '/src/assets/fylo/images/icon-collaboration.svg';
import iconAnyFile from '/src/assets/fylo/images/icon-any-file.svg';

interface IItem {
  image: string;
  title: string;
  description: string;
}

const items = ref<IItem[]>([
  {
    image: iconAccessAnywhere,
    title: 'Access your file from anywhere',
    description: 'The ability to use a smartphone, tablet, or computer to access your account means your files ' +
        'follow you everywhere.',
  },
  {
    image: iconSecurity,
    title: 'Security you can trust',
    description: '2-factor authentication and user-controlled encryption are just a couple of the security ' +
        'features we allow to help secure your files',
  },
  {
    image: iconCollaboratione,
    title: 'Access your file from anywhere',
    description: 'The ability to use a smartphone, tablet, or computer to access your account means your files ' +
        'follow you everywhere.',
  },
  {
    image: iconAnyFile,
    title: 'Security you can trust',
    description: '2-factor authentication and user-controlled encryption are just a couple of the security ' +
        'features we allow to help secure your files',
  },
]);
</script>

<template>
  <!-- Features Section -->
  <section id="features" class="pt-12 bg-gray-50 dark:bg-darkBlue1">
    <!-- Features Container -->
    <div class="container mx-auto px-6 pb-32">
      <!-- First Row -->
      <div class="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
        <!-- Items -->
        <div
            v-for="item in items.slice(0, 2)"
            class="flex flex-col items-center space-y-2 md:w-1/2">
          <div class="flex items-center justify-center h-24 mb-6">
            <img :src="item.image" alt="">
          </div>
          <h3 class="text-xl font-bold">{{ item.title }}</h3>
          <p class="max-w-md">
            {{ item.description }}
          </p>
        </div>
      </div>
      <!-- Second Row -->
      <div class="flex flex-col space-y-24 text-center mt-28 md:flex-row md:space-y-0">
        <!-- Items -->
        <div
            v-for="item in items.slice(2)"
            class="flex flex-col items-center space-y-2 md:w-1/2">
          <div class="flex items-center justify-center h-24 mb-6">
            <img :src="item.image" alt="">
          </div>
          <h3 class="text-xl font-bold">{{ item.title }}</h3>
          <p class="max-w-md">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
