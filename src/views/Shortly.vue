<script setup lang="ts">
import NavBar from '../components/shortly/NavBar.vue';
import HeroSection from '../components/shortly/HeroSection.vue';
import ShortenSection from '../components/shortly/ShortenSection.vue';
import StatsSection from '../components/shortly/StatsSection.vue';
import FeaturesSection from '../components/shortly/FeaturesSection.vue';
import CTASection from '../components/shortly/CTASection.vue';
import Footer from '../components/shortly/Footer.vue';
</script>

<template>
  <div class="shortly-container">
    <!-- Nav Container -->
    <NavBar />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Shorten Section -->
    <ShortenSection />

    <!-- Stats Section -->
    <StatsSection />

    <!-- Feature Boxes Section -->
    <FeaturesSection />

    <!-- CTA Section -->
    <CTASection />

    <Footer />
  </div>
</template>

<style>
.shortly-container {
  @apply font-poppins
}
</style>
