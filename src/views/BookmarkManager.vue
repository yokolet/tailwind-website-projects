<script setup lang="ts">

</script>

<template>
  <div id="website">
    <nav class="container relative mx-auto p-6">
      <!-- Flex Container for Nav Items -->
      <div class="flex items-center justify-between space-x-20 my-6">
        <!-- Logo -->
        <div class="z-30">
          <img src="../assets/bookmark/images/logo-bookmark.svg" alt="" id="logo">
        </div>
        <!-- Menu Items -->
        <div class="hidden items-center space-x-10 uppercase text-grayishBlue2 md:flex">
          <a href="#features" class="tracking-widest hover:text-softRed">Features</a>
          <a href="#download" class="tracking-widest hover:text-softRed">Download</a>
          <a href="#faq" class="tracking-widest hover:text-softRed">FAQ</a>
          <a
              href="#"
              class="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md
              hover:text-softRed hover:bg-white"
          >Login</a>
        </div>
        <!-- Hamburger Button -->
        <button id="menu-btn" class="z-30 block md:hidden focus:outline-none hamburger">
          <span class="hamburger-top bg-black"></span>
          <span class="hamburger-middle bg-black"></span>
          <span class="hamburger-bottom bg-black"></span>
        </button>
      </div>
    </nav>
    <!-- Hero Section -->
    <section id="hero">
      <!-- Container for Image & Content -->
      <div class="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mg-0">
        <!-- Content -->
        <div class="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 class="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
            A Simple Bookmark Manager
          </h1>
          <p class="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
            A clean and simple interface to organize your favorite websites. Open a new browser tab and see your
            sites load instantly. Try it for free.
          </p>
          <!-- Buttons Container -->
          <div class="flex items-center justify-center w-full space-x-4 lg:justify-start">
            <a href=""
               class="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue
               md:text-base hover:bg-white hover:text-softBlue">
              Get It On Chrome
            </a>
            <a href=""
               class="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300
               md:text-base hover:bg-white hover:text-gray-600">
              Get It On Firefox
            </a>
          </div>
        </div>
        <!-- Image -->
        <div class="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div class="bg-hero"></div>
          <img
              src="../assets/bookmark/images/illustration-hero.svg"
              alt=""
              class="relative z-10 lg:top-24 xl:top-0 overflow-x-visible" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#website {
  @apply font-rubik overflow-x-hidden;
}

.ficon:hover {
  filter: invert(53%) sepia(38%) saturate(3303%) hue-rotate(326deg) brightness(101%) contrast(96%);
}

@media(min-width: 1020px) {
  .bg-hero {
    left: 30%;
    @apply absolute h-[300px] w-[2000px] rounded-l-full top-52 bg-softBlue;
  }

  .bg-tabs {
    right: 60%;
    @apply absolute h-[300px] w-[2000px] rounded-r-full top-60 bg-softBlue;
  }
}
</style>
