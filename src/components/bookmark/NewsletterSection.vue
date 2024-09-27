<script setup lang="ts">

</script>

<template>
  <!-- News Letter Section -->
  <section id="newsletter" class="bg-softBlue">
    <!-- Main Container -->
    <div class="max-w-lg mx-auto py-24">
      <div class="mb-6 text-lg tracking-widest text-center text-white uppercase">
        35,000+ Already Joined
      </div>
      <h2 class="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
        Stay up-to-date with what we're doing
      </h2>
      <!-- Form -->
      <form action=""
            class="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6
              md:flex-row md:space-y-0 md:space-x-4 md:px-0">
        <!-- Input & Button Container -->
        <div class="flex flex-col justify-between items-center mx-auto mf:flex-row md:mx-0">
          <input
              type="text"
              class="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3"
              placeholder="Enter your email address"
          />
          <input
              type="submit"
              class="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90"
              value="Contact Us"
          />
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>

</style>
