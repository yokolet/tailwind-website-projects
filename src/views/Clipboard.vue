<script setup lang="ts">
import HeroSection from '../components/clipboard/HeroSection.vue';
import SnippetSection from '../components/clipboard/SnippetSection.vue';
import FeatureSection from '../components/clipboard/FeatureSection.vue';
import AccessSection from '../components/clipboard/AccessSection.vue';
import SuperchargeSection from '../components/clipboard/SuperchargeSection.vue';
import ReferencesSection from '../components/clipboard/ReferencesSection.vue';
import BottomSection from '../components/clipboard/BottomSection.vue';
import Footer from '../components/clipboard/Footer.vue';

</script>

<template>
  <div class="clipboard-container">
    <!-- Hero Section -->
    <HeroSection />
    <!-- Snippet Section -->
    <SnippetSection />
    <!-- Features Section-->
    <FeatureSection />
    <!-- Access Anywhere Section -->
    <AccessSection />
    <!-- Supercharge Section -->
    <SuperchargeSection />
    <!-- References Section -->
    <ReferencesSection />
    <!-- Bottom CTA Section -->
    <BottomSection />
    <Footer />
  </div>
</template>

<style>
.clipboard-container h3 {
  @apply mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl;
}

.clipboard-container h5 {
  @apply mb-2 text-2xl font-bold text-darkGrayishBlue;
}

.clipboard-section-container {
  @apply max-w-6xl mx-auto text-center px-10;
}

.clipboard-section-paragraph {
  @apply max-w-3xl mx-auto text-xl leading-9 text-center text-grayishBlue;
}

.clipboard-button-container {
  @apply flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4;
}

.clipboard-container {
  @apply font-baijam bg-[url('/src/assets/clipboard/images/bg-header-desktop.png')] bg-no-repeat bg-contain;
}

@media (max-width: 576px) {
  .clipboard-container {
    @apply bg-[url('/src/assets/clipboard/images/bg-header-mobile.png')];
  }
}

</style>
