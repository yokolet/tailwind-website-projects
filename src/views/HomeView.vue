<script setup lang="ts">

import ListView from '../components/ListView.vue';
import GridView from '../components/GridView.vue';
import { ref } from 'vue';

const isGrid = ref<boolean>(true);
</script>

<template>
  <div id="app">
    <ListView v-show="!isGrid"/>
    <GridView v-show="isGrid"/>
  </div>
</template>

<style scoped>
#app {
  @apply font-poppins
}
</style>
