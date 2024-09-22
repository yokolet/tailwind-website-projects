<script setup lang="ts">
import { useStorage } from '@vueuse/core';

const isDark = useStorage('fylo-dark-color-theme', true, sessionStorage);

</script>

<template>
  <div id="app" :class="isDark ? 'dark' : ''">

  </div>
</template>

<style scoped>
#app {
  @apply font-raleway;
}
</style>
