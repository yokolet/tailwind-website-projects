<script setup lang="ts">
import Header from '../components/fylo/Header.vue';
import HeroSection from '../components/fylo/HeroSection.vue';
import FeaturesSection from '../components/fylo/FeaturesSection.vue';
import ProductiveSection from '../components/fylo/ProductiveSection.vue';
import TestimonialSection from '../components/fylo/TestimonialSection.vue';
import EarlyAccessSection from '../components/fylo/EarlyAccessSection.vue';
import Footer from '../components/fylo/Footer.vue';
</script>

<template>
  <div class="fylo-container">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Section -->
    <FeaturesSection />

    <!-- Productive Section -->
    <ProductiveSection />

    <!-- Testimonials Section -->
    <TestimonialSection />

    <!-- Early Access Section -->
    <EarlyAccessSection />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style>
.fylo-container {
  @apply min-h-screen w-screen font-opensans dark:bg-darkBlue dark:text-white;
}
</style>
