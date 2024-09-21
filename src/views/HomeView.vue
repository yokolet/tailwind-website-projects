<script setup lang="ts">

</script>

<template>
  <div class="container bg-gray-50 h-screen p-6 max-w-lg">
    <h1 class="text-3xl text-blue-800">Tailwind Website Projects</h1>
    <ul class="mt-6">
      <li class="text-lg border border-blue-200 p-2 my-4">
        <router-link
            to="/clipboard"
            class="text-blue-500 hover:text-blue-300">
          Clipboard
        </router-link>
      </li>
      <li class="text-lg border border-blue-200 p-2 my-4">
        <router-link
            to="/loop-studios"
            class="text-blue-500 hover:text-blue-300">
          Loopstudios
        </router-link>
      </li>
      <li class="text-lg border border-blue-200 p-2 my-4">
        <router-link
            to="/shortly"
            class="text-blue-500 hover:text-blue-300">
          Shortly
        </router-link>
      </li>
      <li class="text-lg border border-blue-200 p-2 my-4">
        <router-link
            to="/testimonial-grid"
            class="text-blue-500 hover:text-blue-300">
          Testimonial Grid
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
