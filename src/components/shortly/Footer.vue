<script setup lang="ts">
import { ref } from 'vue';
import iconFacebook from '/src/assets/shortly/images/icon-facebook.svg';
import iconTwitter from '/src/assets/shortly/images/icon-twitter.svg';
import iconPinterest from '/src/assets/shortly/images/icon-pinterest.svg';
import iconInstagram from '/src/assets/shortly/images/icon-instagram.svg';

interface IFooter {
  [key: string]: string[];
}

const footerMenus = ref<IFooter>({
  'features': [
    'link shortening', 'branded links', 'analytics',
  ],
  'resources': [
    'blog', 'developer', 'support',
  ],
  'company': [
    'about', 'our team', 'careers', 'contact',
  ]
});

const footerOrder = ref<string[]>(['features', 'resources', 'company']);

const socialIcons = ref<string[]>([
  iconFacebook,
  iconTwitter,
  iconPinterest,
  iconInstagram,
]);
</script>

<template>
  <footer class="py-16 bg-veryDarkViolet">
    <div class="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
      <!-- Logo -->
      <img src="/src/assets/shortly/images/logo.svg" alt="">
      <!-- Menu Container -->
      <div class="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
        <!-- Menus -->
        <div
            v-for="footer in footerOrder"
            class="flex flex-col items-center w-full md:items-start">
          <div class="mb-5 font-bold text-white capitalize">{{ footer }}</div>
          <div class="flex flex-col items-center space-y-3 md:items-start">
            <a
                v-for="menu in footerMenus[footer]"
                href="#"
                class="capitalize text-grayishViolet hover:text-cyan">{{ menu }}</a>
          </div>
        </div>
      </div>
      <!-- Social Container -->
      <div class="flex space-x-6">
        <a v-for="socialIcon in socialIcons"
           href="#">
          <img :src="socialIcon" alt="" class="ficon">
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ficon:hover {
  filter: invert(79%) sepia(61%) saturate(464%) hue-rotate(130deg) brightness(89%) contrast(85%);
}
</style>
