<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div id="website">
    <button
        @click="toggleDark()"
        class="border border-gray-800 dark:border-gray-200 m-4 p-2 rounded-xl">
      Toggle Mode to {{ isDark ? 'Light' : 'Dark' }}
    </button>
    <div class="text-3xl dark:text-yellow-600 text-pink-600 m-4">Tailwind CSS</div>
  </div>
</template>

<style scoped>
#website {
  @apply h-screen w-screen font-opensans dark:bg-darkBlue dark:text-white;
}
</style>
