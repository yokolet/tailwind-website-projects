<script setup lang="ts">

</script>

<template>
  <!-- CTA Section -->
  <section id="cta" class="py-24 bg-darkViolet">
    <div class="flex flex-col p-2 space-y-6">
      <h5 class="mx-auto space-y-10 text-4xl font-bold text-center text-white">
        Boost your links today
      </h5>
      <button
          class="px-10 py-5 mx-auto text-2xl font-bold text-shite rounded-full bg-cyan hover:bg-cyanLight
            md:text-base md:py-3 focus:outline-none">
        Get Started
      </button>
    </div>
  </section>
</template>

<style scoped>
#cta {
  @apply bg-[url('/src/assets/shortly/images/bg-boost-desktop.svg')] bg-no-repeat bg-cover;
}
</style>
