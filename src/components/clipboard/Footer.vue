<script setup lang="ts">
import { ref } from 'vue';
import iconFacebook from '/src/assets/clipboard/images/icon-facebook.svg';
import iconTwitter from '/src/assets/clipboard/images/icon-twitter.svg';
import iconInstagram from '/src/assets/clipboard/images/icon-instagram.svg';

const footerMenus = ref<string[][]>([
  [
    'FAQs',
    'Contact Us',
  ],
  [
    'Privacy Policy',
    'Press Kit',
  ],
  [
    'Install Guide',
  ],
]);

const socialIcons = ref<string[]>([
  iconFacebook,
  iconTwitter,
  iconInstagram,
]);
</script>

<template>
  <footer class="bg-gray-50">
    <div class="clipboard-section-container">
      <div class="flex flex-col items-center justify-between md:flex-row">
        <!-- Logo Image -->
        <img src="/src/assets/clipboard/images/logo.svg" alt="" class="scale-50">
        <!-- Container for Menus and Social -->
        <div
            class="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0
              md:space-y-0 text-grayishBlue">
          <!-- Menus -->
          <div class="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
            <!-- Menu -->
            <div v-for="menus in footerMenus" class="flex flex-col space-4 text-center md:text-left">
              <div v-for="menuItem in menus">
                <a href="#" class="hover:text-strongCyan">{{ menuItem }}</a>
              </div>
            </div>
          </div>
          <!-- Social Icons -->
          <div class="flex justify-between w-32 py-1">
            <a v-for="socialIcon in socialIcons" href="#">
              <img :src="socialIcon" alt="" class="duration-200 ficon">
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ficon:hover {
  filter: invert(53%) sepia(68%) saturate(434%) hue-rotate(121deg) brightness(101%) contrast(94%);
}
</style>
