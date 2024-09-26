<script setup lang="ts">
import { ref } from 'vue';
import iconBlacklist from '/src/assets/clipboard/images/icon-blacklist.svg';
import iconText from '/src/assets/clipboard/images/icon-text.svg';
import iconPreview from '/src/assets/clipboard/images/icon-preview.svg';

interface ISItem {
  title: string;
  description: string;
  image: string;
}

const sitems = ref<ISItem[]>([
  {
    title: 'Create Blacklists',
    description: 'Easily search your snippets by content, category, web address, application and more.',
    image: iconBlacklist,
  },
  {
    title: 'Plain Text Snippets',
    description: 'Remove unwanted formatting from copied text for a consistent look.',
    image: iconText,
  },
  {
    title: 'Sneak Preview',
    description: 'Quick preview of all snippets on your Clipboard for easy access.',
    image: iconPreview,
  },
]);
</script>

<template>
  <!-- Supercharge Section -->
  <section id="supercharge">
    <div class="clipboard-section-container my-20">
      <h3>Supercharge your workflow</h3>
      <p class="clipboard-section-paragraph mb-16">
        We've got the tools to boost your productivity.
      </p>
      <!-- Items Container -->
      <div class="flex flex-col items-center justify-between space-y-16 md:flex-row :md:space-y-0 md:space-x-12">
        <!-- Items -->
        <div v-for="sitem in sitems" class="flex flex-col items-center space-y-5">
          <img :src="sitem.image" alt="" class="mb-6">
          <h5>{{ sitem.title }}</h5>
          <p class="mx-w-md text-grayishBlue">
            {{ sitem.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
