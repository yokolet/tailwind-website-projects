<script setup lang="ts">
import { ref } from 'vue';

interface IURL {
  fullUrl: string;
  shortUrl: string;
}

interface IStat {
  image: string;
  title: string;
  description: string;
}

interface IFooter {
  [key: string]: string[];
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

const statistics = ref<IStat[]>([
  {
    image: '/src/assets/shortly/images/icon-brand-recognition.svg',
    title: 'Brand Recognition',
    description: "Boost your brand recognition with each click. Generic links don't mean a thing. Brand links " +
        "help instil confidence in your content",
  },
  {
    image: '/src/assets/shortly/images/icon-detailed-records.svg',
    title: 'Detailed Records',
    description: "Gain insights into who is clicking your links. Knowing when and where people engage with your " +
        "content helps inform better decisions.",
  },
  {
    image: '/src/assets/shortly/images/icon-fully-customizable.svg',
    title: 'Fully Customizable',
    description: "Improve brand awareness and content discoverability through customizable links, " +
        "supercharging audience engagement.",
  },
]);

const topMenus = ref<string[]>([
    'features', 'pricing', 'resources'
])

const footerMenus = ref<IFooter>({
  'features': [
      'link shortening', 'branded links', 'analytics',
  ],
  'resources': [
      'blog', 'developer', 'support',
  ],
  'company': [
      'about', 'our team', 'careers', 'contact',
  ]
});

const footerOrder = ref<string[]>(['features', 'resources', 'company']);

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

const socialIcons = ref<string[]>([
    '/src/assets/shortly/images/icon-facebook.svg',
    '/src/assets/shortly/images/icon-twitter.svg',
    '/src/assets/shortly/images/icon-pinterest.svg',
    '/src/assets/shortly/images/icon-instagram.svg',
]);

const openMobileMenu = ref<boolean>(false);
</script>

<template>
  <div id="app">
    <!-- Nav Container -->
    <nav class="relative container mx-auto p-6">
      <!-- Flex Container For All Items -->
      <div class="flex items-center justify-between">
        <!-- Flex Container For Logo/Menu -->
        <div class="flex items-center space-x-20">
          <!-- Logo -->
          <img src="../assets/shortly/images/logo.svg" alt="">
          <!-- Left Menu -->
          <div class="hidden space-x-8 font-bold lg:flex">
            <a
                v-for="menu in topMenus"
                href="#"
                class="text-grayishViolet hover:text-veryDarkViolet capitalize"
            >
              {{ menu }}
            </a>
          </div>
        </div>
        <!-- Right Buttons Menu -->
        <div class="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <div class="hover:text-veryDarkViolet">Login</div>
          <a href="#" class="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
            Sign up
          </a>
        </div>
        <!-- Hamburger Button -->
        <div class="md:hidden">
          <button
              id="menu-btn"
              type="button"
              class="z-40 block hamburger md:hidden focus:outline-none"
              :class="openMobileMenu ? 'open' : ''"
              @click="openMobileMenu = !openMobileMenu"
          >
            <span class="hamburger-top bg-[#9c9aa6]"></span>
            <span class="hamburger-middle bg-[#9c9aa6]"></span>
            <span class="hamburger-bottom bg-[#9c9aa6]"></span>
          </button>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div
          v-show="openMobileMenu"
          id="menu"
          class="absolute flex p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100">
        <div class="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <a
              v-for="menu in topMenus"
              href="#"
              class="w-full text-center">{{ menu }}</a>
          <a href="#" class="w-full p-6 border-t border-gray-400 text-center">Login</a>
          <a href="#" class="w-full py-3 text-center rounded-full bg-cyan rounded-full">Sign Up</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero">
      <!-- Hero Container -->
      <div class="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
        <!-- Content Container -->
        <div class="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 class="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            More than just shorter links
          </h1>
          <p class="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Build your brand's recognition and get detailed insights on how your links are performing.
          </p>
          <div class="mx-auto lg:mx-0">
            <a href="#"
               class="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">
              Get Started
            </a>
          </div>
        </div>
        <!-- Image -->
        <div class="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
          <img src="../assets/shortly/images/illustration-working.svg" alt="">
        </div>
      </div>
    </section>

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
    <!-- Stats Section -->
    <section id="stats" class="py-24 bg-gray-100">
      <div class="container max-auto px-3">
        <h2 class="text-4xl mb-6 font-bold text-center">
          Advanced Statistics
        </h2>
        <p class="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
          Track how your links are performing across the web with our advanced statistics dashbaord.
        </p>
      </div>
    </section>
    <!-- Feature Box Section -->
    <section id="features" class="pb-32 bg-gray-100">
      <div class="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
        <!-- Horizontal Line -->
        <div class="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
        <!-- Vertical Line -->
        <div class="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>
        <!-- Box 1 -->
        <div
            v-for="(stat, index) in statistics"
            class="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3"
            :class="[index > 0 ? 'mt-24' : '', index > 0 ? `md:mt-${+index * 8}` : '']"
        >
          <!-- Image Positioning -->
          <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
            <!-- Image Container For Background & Center -->
            <div class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img :src="stat.image" alt="">
            </div>
          </div>
          <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
            {{ stat.title }}
          </h5>
          <p class="text-center text-gray-400 md:text-left">
            {{ stat.description }}
          </p>
        </div>
      </div>
    </section>
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

    <footer class="py-16 bg-veryDarkViolet">
      <div class="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        <!-- Logo -->
        <img src="../assets/shortly/images/logo.svg" alt="">
        <!-- Menu Container -->
        <div class="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          <!-- Menus -->
          <div
              v-for="footer in footerOrder"
              class="flex flex-col items-center w-full md:items-start">
            <div class="mb-5 font-bold text-white capitalize">{{ footer }}</div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a
                  v-for="menu in footerMenus[footer]"
                  href="#"
                  class="capitalize text-grayishViolet hover:text-cyan">{{ menu }}</a>
            </div>
          </div>
        </div>
        <!-- Social Container -->
        <div class="flex space-x-6">
          <a v-for="socialIcon in socialIcons"
             href="#">
            <img :src="socialIcon" alt="" class="ficon">
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
#app {
  @apply font-poppins
}

#cta {
  @apply bg-[url('../assets/shortly/images/bg-boost-desktop.svg')] bg-no-repeat bg-cover;
}

.ficon:hover {
  filter: invert(79%) sepia(61%) saturate(464%) hue-rotate(130deg) brightness(89%) contrast(85%);
}
</style>
