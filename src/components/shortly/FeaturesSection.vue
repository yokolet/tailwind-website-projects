<script setup lang="ts">
import { ref } from 'vue';
import iconBrandRecognition from '/src/assets/shortly/images/icon-brand-recognition.svg';
import iconDetailedRecords from '/src/assets/shortly/images/icon-detailed-records.svg';
import iconFullyCustomizable from '/src/assets/shortly/images/icon-fully-customizable.svg';

interface IStat {
  image: string;
  title: string;
  description: string;
}

const statistics = ref<IStat[]>([
  {
    image: iconBrandRecognition,
    title: 'Brand Recognition',
    description: "Boost your brand recognition with each click. Generic links don't mean a thing. Brand links " +
        "help instil confidence in your content",
  },
  {
    image: iconDetailedRecords,
    title: 'Detailed Records',
    description: "Gain insights into who is clicking your links. Knowing when and where people engage with your " +
        "content helps inform better decisions.",
  },
  {
    image: iconFullyCustomizable,
    title: 'Fully Customizable',
    description: "Improve brand awareness and content discoverability through customizable links, " +
        "supercharging audience engagement.",
  },
]);
</script>

<template>
  <!-- Feature Boxes Section -->
  <section id="features" class="pb-32 bg-gray-100">
    <div class="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
      <!-- Horizontal Line -->
      <div class="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
      <!-- Vertical Line -->
      <div class="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>
      <!-- Boxes -->
      <div
          v-for="(stat, index) in statistics"
          class="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3"
          :class="[index > 0 ? 'mt-24' : '', index > 0 ? `md:mt-${+index * 8}` : '']"
      >
        <!-- Image Positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image Container For Background & Center -->
          <div class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
            <img :src="stat.image" alt="">
          </div>
        </div>
        <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
          {{ stat.title }}
        </h5>
        <p class="text-center text-gray-400 md:text-left">
          {{ stat.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
