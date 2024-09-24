<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  tabindex: Number,
  question: String,
  answer: String,
});

const isOpen = ref<boolean>(false);
</script>

<template>
  <div
      class="py-1 border-b outline-none group"
      :tabindex="tabindex"
  >
    <!-- Tab Flex Container -->
    <div
        @click="isOpen = !isOpen"
        class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
    >
      <!-- Tab Title -->
      <div class="transition duration-500 ease group-hover:text-red-500">
        {{ question }}
      </div>
      <!-- Arrow -->
      <div
          class="transition duration-500 ease group-focus:text-red-500"
          :class="isOpen ? '-rotate-180' : 'rotate-0'"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12">
          <path
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              d="M1 1l8 8 8-8"
          />
        </svg>
      </div>
    </div>
    <!-- Tab Inner Content -->
    <div
        v-show="isOpen"
        class="overflow-hidden duration-500 ease group-focus:max-h-screen"
    >
      <p class="py-2 text-justify text-gray-400">
        {{ answer }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
