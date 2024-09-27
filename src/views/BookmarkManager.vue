<script setup lang="ts">
import { ref } from 'vue';
import NavBar from '../components/bookmark/NavBar.vue';
import HeroSection from '../components/bookmark/HeroSection.vue';
import FeaturesSection from '../components/bookmark/FeaturesSection.vue';
import FeatureTabsSection from '../components/bookmark/FeatureTabsSection.vue';
import DownloadSection from '../components/bookmark/DownloadSection.vue';
import DownloadBoxesSection from '../components/bookmark/DownloadBoxesSection.vue';
import FAQSection from '../components/bookmark/FAQSection.vue';
import FAQAccordionSection from '../components/bookmark/FAQAccordionSection.vue';
import NewsletterSection from '../components/bookmark/NewsletterSection.vue';
import Footer from '../components/bookmark/Footer.vue';

const menus = ref<string[]>([
    'features', "download", 'faq'
]);
</script>

<template>
  <div class="bookmark-container">
    <NavBar :menus="menus" />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Heading -->
    <FeaturesSection />

    <!-- Features Tabs -->
    <FeatureTabsSection />

    <!-- Download Heading -->
    <DownloadSection />

    <!-- Download Boxes -->
    <DownloadBoxesSection />

    <! -- FAQ Heading -->
    <FAQSection />

    <!-- FAQ Accordion -->
    <FAQAccordionSection />

    <!-- News Letter Section -->
    <NewsletterSection />

    <!-- Footer -->
    <Footer :menus="menus" />
  </div>
</template>

<style>
.bookmark-container {
  @apply font-rubik overflow-x-hidden;
}
</style>
