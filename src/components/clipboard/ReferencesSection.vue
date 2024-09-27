<script setup lang="ts">
import { ref } from 'vue';
import logoGoogle from '/src/assets/clipboard/images/logo-google.png';
import logoIBM from '/src/assets/clipboard/images/logo-ibm.png';
import logoMicrosoft from '/src/assets/clipboard/images/logo-microsoft.png';
import logoHP from '/src/assets/clipboard/images/logo-hp.png';
import logoVectorGraphics from '/src/assets/clipboard/images/logo-vector-graphics.png';

const refImages = ref<string[]>([
  logoGoogle,
  logoIBM,
  logoMicrosoft,
  logoHP,
  logoVectorGraphics,
]);
</script>

<template>
  <!-- References Section -->
  <section id="references">
    <div class="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
      <img v-for="image in refImages" :src="image" alt="">
    </div>
  </section>
</template>

<style scoped>

</style>
