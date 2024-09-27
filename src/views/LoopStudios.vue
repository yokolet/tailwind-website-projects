<script setup lang="ts">

import { ref } from 'vue';
import HeroSection from '../components/loopstudios/HeroSection.vue';
import FeatureSection from '../components/loopstudios/FeatureSection.vue';
import CreationsSection from '../components/loopstudios/CreationsSection.vue';
import Footer from '../components/loopstudios/Footer.vue';

const menus = ref<string[]>([
    'About', 'Careers', 'Events', 'Products', 'Support',
]);

</script>

<template>
  <div class="loopstudios-container">
    <!-- Hero Section -->
    <HeroSection :menus="menus" />

    <!-- Feature Section -->
    <FeatureSection />

    <!-- Creations Section -->
    <CreationsSection />

    <!-- Footer -->
    <Footer :menus="menus"/>
  </div>
</template>

<style>
.loopstudios-container {
  @apply font-josefin
}
</style>
