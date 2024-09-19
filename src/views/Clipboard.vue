<script setup lang="ts">
import { ref } from 'vue';

interface IItem {
  title: string;
  description: string;
}

interface ISItem extends IItem {
  image: string;
}

const items = ref<IItem[]>([
  {
    title: 'Quick Search',
    description: 'Easily search your snippets by content, category, web address, application and more.',
  },
  {
    title: 'iCloud Sync',
    description: 'Instantly saves and syncs snippets access all your devices.',
  },
  {
    title: 'Completely History',
    description: 'Retrieve any snippets from the first moment you started using the app.'
  }
]);

const sitems = ref<ISItem[]>([
  {
    title: 'Create Blacklists',
    description: 'Easily search your snippets by content, category, web address, application and more.',
    image: '/src/assets/clipboard/images/icon-blacklist.svg',
  },
  {
    title: 'Plain Text Snippets',
    description: 'Remove unwanted formatting from copied text for a consistent look.',
    image: '/src/assets/clipboard/images/icon-text.svg',
  },
  {
    title: 'Sneak Preview',
    description: 'Quick preview of all snippets on your Clipboard for easy access.',
    image: '/src/assets/clipboard/images/icon-preview.svg',
  },
])
</script>

<template>
  <div class="clipboard-container">
    <!-- Hero Section -->
    <section id="hero">
      <div class="section-container mb-40 px-10 pt-16">
        <svg width="125" height="125" class="mx-auto my-16" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#26BBA4" stroke-width="10" fill="none" fill-rule="evenodd">
            <circle cx="62.5" cy="62.5" r="57.5"/>
            <path d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
                  stroke-linecap="round"/>
          </g>
        </svg>
        <h3>
          A history of everything you copy
        </h3>
        <p class="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        <!-- Button container -->
        <div class="button-container">
          <a href="#" class="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
            Download for iOS
          </a>
          <a href="#" class="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
            Download for Mac
          </a>
        </div>
      </div>
    </section>

    <!-- Snippet Section -->
    <section id="snippets">
      <div class="section-container my-20 px-10">
        <h3>
          Keep track of your snippets
        </h3>
        <p class="section-paragraph mb-24">
          Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets
          immediately on all your devices. Our Mac and iOS apps help you organize everything.
        </p>
      </div>
    </section>
    <section id="features">
      <div class="section-container my-20">
        <div class="relative flex flex-col md:flex-row md:space-x-32">
          <!-- Image -->
          <div class="md:w-1/2">
            <img src="../assets/clipboard/images/image-computer.png" alt="" class="md:absolute top-0 right-[50%]">
          </div>
          <!-- Items Container -->
          <div class="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
            <!-- Items -->
            <div v-for="item in items" :key="item.title">
              <h5>
                {{ item.title }}
              </h5>
              <p class="max-w-md text-grayishBlue">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Access Anywhere Section -->
    <section id="access">
      <div class="section-container my-20">
        <h3>Access Clipboard Anywhere</h3>
        <p class="section-paragraph mb-24">
          Whether you're on the go, or at your computer,
          you can access all your Clipboard snippets in a few simple clicks.
        </p>
        <img src="../assets/clipboard/images/image-devices.png" alt="" class="mx-auto">
      </div>
    </section>

    <!-- Supercharge Section -->
    <section id="supercharge">
      <div class="section-container my-20">
        <h3>Supercharge your workflow</h3>
        <p class="section-paragraph mb-16">
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
  </div>
</template>

<style scoped>
h3 {
  @apply mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl;
}

h5 {
  @apply mb-2 text-2xl font-bold text-darkGrayishBlue;
}

.section-container {
  @apply max-w-6xl mx-auto text-center px-10;
}

.section-paragraph {
  @apply max-w-3xl mx-auto text-xl leading-9 text-center text-grayishBlue;
}

.button-container {
  @apply flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4;
}

.clipboard-container {
  @apply bg-[url('../assets/clipboard/images/bg-header-desktop.png')] bg-no-repeat bg-contain;
}

@media (max-width: 576px) {
  .clipboard-container {
    @apply bg-[url('../assets/clipboard/images/bg-header-mobile.png')];
  }
}

</style>
