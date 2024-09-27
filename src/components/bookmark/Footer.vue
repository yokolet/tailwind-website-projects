<script setup lang="ts">
defineProps<{ menus: string[] }>()
</script>

<template>
  <!-- Footer -->
  <footer class="py-16 bg-veryDarkBlue2">
    <!-- Footer Flex Container -->
    <div class="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
      <!-- Logo/Menu Container -->
      <div
          class="flex flex-col items-center justify-between space-y-8 text-lg font-light text-grayishBlue2
            md:flex-row md:space-y-0 md:space-x-14"
      >
        <img src="/src/assets/bookmark/images/logo-bookmark-footer.svg" alt="" class="mb-1" />
        <a
            v-for="menu in menus"
            :href="`#${menu}`"
            class="uppercase hover:text-softRed"
        >{{ menu }}</a>
      </div>
      <!-- Social Container -->
      <div class="flex space-x-10">
        <a href="#">
          <img src="/src/assets/bookmark/images/icon-facebook.svg" alt="" class="h-6 ficon" />
        </a>
        <a href="#">
          <img src="/src/assets/bookmark/images/icon-twitter.svg" alt="" class="h-6 ficon" />
        </a>>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ficon:hover {
  filter: invert(53%) sepia(38%) saturate(3303%) hue-rotate(326deg) brightness(101%) contrast(96%);
}
</style>
