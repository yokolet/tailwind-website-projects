<script setup lang="ts">
import { ref } from 'vue';
import iconFacebook from '/src/assets/loopstudios/images/icon-facebook.svg';
import iconTwitter from '/src/assets/loopstudios/images/icon-twitter.svg';
import iconPinterest from '/src/assets/loopstudios/images/icon-pinterest.svg';
import iconInstagram from '/src/assets/loopstudios/images/icon-instagram.svg';

defineProps<{ menus: string[]  }>()

const socialIcons = ref<string[]>([
  iconFacebook,
  iconTwitter,
  iconPinterest,
  iconInstagram,
]);
</script>

<template>
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
            <img src="/src/assets/loopstudios/images/logo.svg" alt="" class="w-44 md:ml-3" />
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
</template>

<style scoped>

</style>
