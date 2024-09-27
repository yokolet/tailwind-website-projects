<script setup lang="ts">
import { ref } from 'vue';

interface IURL {
  fullUrl: string;
  shortUrl: string;
}

const urls = ref<IURL[]>([
  {
    fullUrl: 'https://frontendmentor.io',
    shortUrl: 'https://rel.ink/k4IKyk',
  },
  {
    fullUrl: 'https://twitter.com/frontendmentor',
    shortUrl: 'https://rel.ink/gxOXp9',
  },
  {
    fullUrl: 'https://linkedin.com/frontend-mentor',
    shortUrl: 'https://rel.ink/gob3X9',
  }
]);


const inputText = ref<string | null>(null);
const errorMsg = ref<string>('');

const validateURL = (url: string) => {
  const regex = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
      'i');
  return !!regex.test(url);
}

const verifyUrl = () => {
  if (inputText.value === null || inputText.value === '') {
    errorMsg.value = 'Please enter something';
  } else if (inputText.value !== null && !validateURL(inputText.value)) {
    errorMsg.value = 'Please enter a valid URL';
  } else if (inputText.value !== null) {
    errorMsg.value = '';
    alert('Success');
  }
  inputText.value = '';
}
</script>

<template>
  <!-- Shorten Section -->
  <section id="shorten" class="relative bg-gray-100">
    <!-- Shorten Container -->
    <div class="max-w-4xl mx-auto p-6 space-y-6">
      <!-- Form -->
      <form
          id="link-form"
          class="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row
            md:space-y-0 md:space-x-3"
          @submit.prevent="verifyUrl"
      >
        <input
            id="link-input"
            type="text"
            class="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
            :class="errorMsg.length > 0 ? 'border-red' : ''"
            placeholder="Shorten a link here"
            v-model="inputText"
        />
        <button class="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
          Shorten It!
        </button>
        <!-- Error Messages -->
        <div id="error-msg" class="absolute left-7 bottom-3 text-red text-sm italic">{{ errorMsg }}</div>
      </form>
      <!-- Links -->
      <div v-for="(url, index) in urls"
           class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-ld md:flex-row">
        <p class="font-bold text-center text-veryDarkViolet md:text-left">
          {{ url.fullUrl }}
        </p>
        <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
          <div class="font-bold text-cyan">{{ url.shortUrl }}</div>
          <button
              :class="index % 2 == 1 ? 'bg-veryDarkViolet' : 'bg-cyan'"
              class="p-2 px-8 text-white rounded-lg hover:opacity-70 focus:outline-none"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
