<script setup lang="ts">
</script>

<template>
  <router-view />
</template>

<style>
/* Hamburger Menu */
.hamburger {
  @apply relative cursor-pointer w-[24px] h-[24px] transition-all duration-[250];
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  @apply absolute w-[24px] h-[2px] top-0 left-0 rotate-0 transition-all duration-500;
}

.hamburger-middle {
  @apply translate-y-[7px]
}

.hamburger-bottom {
  @apply translate-y-[14px]
}

.open {
  @apply rotate-90
}

.open .hamburger-top {
  @apply rotate-45 translate-y-[6px] -translate-x-[6px]
}

.open .hamburger-middle {
  @apply hidden
}

.open .hamburger-bottom {
  @apply -rotate-45 translate-y-[6px] -translate-x-[6px]
}
</style>
