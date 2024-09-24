<script setup lang="ts">
import { ref } from 'vue';
import Accordion from '../components/bookmark/Accordion.vue';

interface ITab {
  id: number;
  title: string;
}

interface IPanel {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface IDownload {
  margin: string;
  image: string;
  message: string;
  version: string;
}

interface IFAQ {
  question: string;
  answer: string;
}

const currentTab = ref<number>(0);

const tabs = ref<ITab[]>([
  {
    id: 0,
    title: 'Simple Bookmarking',
  },
  {
    id: 1,
    title: 'Speedy Searching',
  },
  {
    id: 2,
    title: 'Easy Sharing',
  },
]);

const panels = ref<IPanel[]>([
  {
    id: 0,
    image: '/src/assets/bookmark/images/illustration-features-tab-1.svg',
    title: 'Bookmark in one click',
    description: 'Organize your bookmarks however you like. Our simple ' +
        'drag-and-drop interface gives you complete control over how you ' +
        'manage your favourite sites.',
  },
  {
    id: 1,
    image: '/src/assets/bookmark/images/illustration-features-tab-2.svg',
    title: 'Intelligent search',
    description: 'Our powerful search feature will help you find saved sites in no ' +
        'time at all. No need to trawl through all of your bookmarks.',
  },
  {
    id: 2,
    image: '/src/assets/bookmark/images/illustration-features-tab-3.svg',
    title: 'Share your bookmarks',
    description: 'Easily share your bookmarks and collections with others. Create ' +
        'a shareable a link that you can send at the click of a button.',
  },
]);

const downloads = ref<IDownload[]>([
  {
    margin: '',
    image: '/src/assets/bookmark/images/logo-chrome.svg',
    message: 'Add to Chrome',
    version: 'Minimum Version 62',
  },
  {
    margin: 'md:mt-8',
    image: '/src/assets/bookmark/images/logo-firefox.svg',
    message: 'Add to Firefox',
    version: 'Minimum Version 55',
  },
  {
    margin: 'md:mt-16',
    image: '/src/assets/bookmark/images/logo-opera.svg',
    message: 'Add to Opera',
    version: 'Minimum Version 46',
  },
]);

const FAQs = ref<IFAQ[]>([
  {
    question: 'What is Bookmark?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ' +
        'repellat amet doloribus consequuntur eos similique provident ' +
        'tempora voluptates iure quia fuga dicta voluptatibus culpa ' +
        'mollitia recusandae delectus id suscipit labore?',
  },
  {
    question: 'How can I request a new browser?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ' +
        'repellat amet doloribus consequuntur eos similique provident ' +
        'tempora voluptates iure quia fuga dicta voluptatibus culpa ' +
        'mollitia recusandae delectus id suscipit labore?',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ' +
        'repellat amet doloribus consequuntur eos similique provident ' +
        'tempora voluptates iure quia fuga dicta voluptatibus culpa ' +
        'mollitia recusandae delectus id suscipit labore?',
  },
  {
    question: 'What about other Chromium browsers?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ' +
        'repellat amet doloribus consequuntur eos similique provident ' +
        'tempora voluptates iure quia fuga dicta voluptatibus culpa ' +
        'mollitia recusandae delectus id suscipit labore?',
  },
])
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

    <!-- Features Heading -->
    <section id="features">
      <div class="container mx-auto mt-16 px-6 md:mx-0">
        <h2 class="mb-6 text-4xl font-semibold text-center">Features</h2>
        <p class="max-w-md mx-auto text-center text-grayishBlue2">
          Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync
          between your devices so you can access them on the go.
        </p>
      </div>
    </section>
    <!-- Features Tabs -->
    <section id="tabs">
      <!-- Tabs/Panels Container -->
      <div class="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div class="bg-tabs"></div>
        <!-- Tabs Flex Container -->
        <div class="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          <!-- Tabs-->
          <div
              v-for="(tab, index) in tabs"
              @click="currentTab = index"
              class="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed
              md:w-1/3 tab"
          >
            <div
                class="py-5"
                :class="currentTab === index ? 'border-b-4 border-softRed' : ''"
            >
              {{ tab.title }}
            </div>
          </div>
        </div>
        <!-- Tab Panels -->
        <div id="panels" class="container mx-auto">
          <!-- Panels -->
          <div
              v-for="(panel, index) in panels"
              v-show="currentTab === index"
              class="flex flex-col py-5 md:flex-row md:space-x-7 panel"
          >
            <!-- Panel Image -->
            <div class="flex justify-center md:w-1/2">
              <img :src="panel.image" alt="" class="relative z-10">
            </div>
            <!-- Panel Content -->
            <div class="flex flex-col space-y-8 md:w-1/2">
              <h3
                  :class="index == 0 ? 'mt-32' : 'mt-14'"
                  class="text-3xl font-semibold text-center md:mt-0 md:text-left"
              >
                {{ panel.title }}
              </h3>
              <p class="max-w-md text-center text-grayishBlue2 md:text-left">
                {{ panel.description }}
              </p>
              <div class="mx-auto md:mx-0">
                <a
                    href="#"
                    class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex
                    bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >More Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Download Heading -->
    <seciont id="download">
      <div class="container mx-auto px-6">
        <h2 class="mb-6 text-3xl font-semibold text-center md:text-4xl">
          Download the extension
        </h2>
        <p class="max-w-lg mx-auto text-center text-grayishBlue2">
          We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd
          like us to prioritize.
        </p>
      </div>
    </seciont>

    <!-- Download Boxes -->
    <section id="download-boxes" class="py-32">
      <!-- Boxes Container -->
      <div
          class="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0
          md:space-x-7 md:flex-row"
      >
        <!-- Boxes -->
        <div
            v-for="download in downloads"
            class="w-full md:w-1/3"
        >
          <div
              class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg"
              :class="download.margin"
          >
            <!-- Image -->
            <div class="flex justify-center">
              <img :src="download.image" alt="">
            </div>
            <!-- Text -->
            <h5 class="pt-6 text-xl font-bold">{{ download.message }}</h5>
            <p class="text-gray-400">{{ download.version }}</p>
            <!-- Dots -->
            <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                  href="#"
                  class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue
                  hover:text-softBlue hover:bg-white border-softBlue"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <! -- FAQ Heading -->
    <section id="faq">
      <div class="container mx-auto">
        <h2 class="mb-6 text-3xl font-semibold text-center md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p class="max-w-lg px-6 mx-auto text-center text-grayishBlue2">
          Here are some of our FAQs If you have any other questions you'd like answered, please feel free to email us.
        </p>
      </div>
    </section>
    <!-- FAQ Accordion -->
    <section id="faq-accordion">
      <div class="container mx-auto px-6 mb-32">
        <!-- Accordion Container -->
        <div class="max-w-2xl m-8 mx-auto overflow-hidden">
          <!-- Tab 1 -->
          <Accordion
              v-for="(faq, index) in FAQs"
              :tabindex="index + 1"
              :question="faq.question"
              :answer="faq.answer" />
        </div>
      </div>
    </section>

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
                class="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0"
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

    <!-- Footer -->
    <footer class="py-16 bg-veryDarkBlue2">
      <!-- Footer Flex Container -->
      <div class="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
        <!-- Logo/Menu Container -->
        <div
            class="flex flex-col items-center justify-between space-y-8 text-lg font-light text-grayishBlue2
            md:flex-row md:space-y-0 md:space-x-14"
        >
          <img src="../assets/bookmark/images/logo-bookmark-footer.svg" alt="" class="mb-1" />
          <a href="#features" class="uppercase hover:text-softRed hover:text-softRed">Features</a>
          <a href="#download" class="uppercase hover:text-softRed hover:text-softRed">Download</a>
          <a href="#faq" class="uppercase hover:text-softRed hover:text-softREd">FAQ</a>
        </div>
        <!-- Social Container -->
        <div class="flex space-x-10">
          <a href="#">
            <img src="../assets/bookmark/images/icon-facebook.svg" alt="" class="h-6 ficon" />
          </a>
          <a href="#">
            <img src="../assets/bookmark/images/icon-twitter.svg" alt="" class="h-6 ficon" />
          </a>>
        </div>
      </div>
    </footer>
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
