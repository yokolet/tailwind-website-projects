<script setup lang="ts">

</script>

<template>
  <div id="website">
  </div>
</template>

<style scoped>
#website {
  @apply font-rubik overflow-x-hidden;
}

.ficon:hover {
  filter: invert(53%) sepia(38%) saturate(3303%) hue-rotate(326deg) brightness(101%) contrast(96%);
}

@media screen(lg) {
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
