<script setup lang="ts">

</script>

<template>
  <!-- Footer -->
  <footer class="bg-darkBlue2 text-white">
    <div class="container mx-auto pt-12 px-5 pb-10">
      <!-- Flex Container for All Items -->
      <div class="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
        <!-- Email & Phone -->
        <div class="mt-10 space-y-6">
          <div class="flex items-center space-x-3 md:-mt-10">
            <div class="w-6">
              <img src="/src/assets/fylo/images/icon-phone.svg" alt="" class="scale-10">
            </div>
            <div>+1-543-123-4567</div>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-6">
              <img src="/src/assets/fylo/images/icon-email.svg" alt="" class="scale-10">
            </div>
            <div>example@fylo.com</div>
          </div>
        </div>
        <! -- Menus -->
        <div class="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
          <div class="flex flex-col space-y-3">
            <a href="#">About</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
          </div>
          <div class="flex flex-col space-y-3">
            <a href="#">Contact</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
        <!-- Social -->
        <div class="flex justify-center pb-10 space-x-3">
          <div>
            <a href="#">
              <img src="/src/assets/fylo/images/facebook.svg" alt="" class="p-2 bg-darkBlue rounded-full ficon">
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/src/assets/fylo/images/twitter.svg" alt="" class="p-2 bg-darkBlue rounded-full ficon">
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/src/assets/fylo/images/instagram.svg" alt="" class="p-2 bg-darkBlue rounded-full ficon">
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ficon:hover {
  filter: invert(80%) sepia(37%) saturate(7048%) hue-rotate(132deg) brightness(105%) contrast(104%);
}
</style>
