<script setup lang="ts">

</script>

<template>
  <div id="app">
    <!-- Nav Container -->
    <nav class="relative container mx-auto p-6">
      <!-- Flex Container For All Items -->
      <div class="flex items-center justify-between">
        <!-- Flex Container For Logo/Menu -->
        <div class="flex items-center space-x-20">
          <!-- Logo -->
          <img src="../assets/shortly/images/logo.svg" alt="">
          <!-- Left Menu -->
          <div class="hidden space-x-8 font-bold lg:flex">
            <a href="#" class="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </a>
            <a href="#" class="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a href="#" class="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </a>
          </div>
        </div>
        <!-- Right Buttons Menu -->
        <div class="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <div class="hover:text-veryDarkViolet">Login</div>
          <a href="#" class="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
            Sign up
          </a>
        </div>
        <!-- @todo Hamburger Button -->
      </div>
      <!-- @todo Mobile Menu -->
    </nav>
  </div>
</template>

<style scoped>
#app {
  @apply font-poppins
}
</style>
