<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { ref } from 'vue';

interface IItem {
  image: string;
  title: string;
  description: string;
}

interface ICustomer {
  image: string;
  description: string;
  name: string;
  company: string;
}

const isDark = useDark();
const toggleDark = useToggle(isDark);

const items = ref<IItem[]>([
  {
    image: '/src/assets/fylo/images/icon-access-anywhere.svg',
    title: 'Access your file from anywhere',
    description: 'The ability to use a smartphone, tablet, or computer to access your account means your files ' +
        'follow you everywhere.',
  },
  {
    image: '/src/assets/fylo/images/icon-security.svg',
    title: 'Security you can trust',
    description: '2-factor authentication and user-controlled encryption are just a couple of the security ' +
    'features we allow to help secure your files',
  },
  {
    image: '/src/assets/fylo/images/icon-collaboration.svg',
    title: 'Access your file from anywhere',
    description: 'The ability to use a smartphone, tablet, or computer to access your account means your files ' +
        'follow you everywhere.',
  },
  {
    image: '/src/assets/fylo/images/icon-any-file.svg',
    title: 'Security you can trust',
    description: '2-factor authentication and user-controlled encryption are just a couple of the security ' +
        'features we allow to help secure your files',
  },
]);

const customers = ref<ICustomer[]>([
  {
    image: '/src/assets/fylo/images/profile-1.jpg',
    description: 'Fylo has improved our team productivity by an order of magnitude. ' +
        'Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Satish Patel',
    company: 'Founder & CEO. Huddle',
  },
  {
    image: '/src/assets/fylo/images/profile-2.jpg',
    description: 'Fylo has improved our team productivity by an order of magnitude. ' +
        'Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Bruce McKenzie',
    company: 'Founder & CEO. Huddle 2',
  },
  {
    image: '/src/assets/fylo/images/profile-3.jpg',
    description: 'Fylo has improved our team productivity by an order of magnitude. ' +
        'Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Eva Boyd',
    company: 'Founder & CEO. Huddle 3',
  },
]);
</script>

<template>
  <div id="website">
    <!-- Header -->
    <header class="container mx-auto pt-10 px-6 text-center h-40 md:h-20">
      <!-- Dynamic Logo -->
      <div
          class="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute
          top-10 left-10"></div>
      <!-- Menu -->
      <div class="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
        <a href="#features" class="hover:text-accentCyan">Features</a>
        <a href="#testimonials" class="hover:text-accentCyan">Testimonials</a>
        <!-- Dark/Light Mode Button -->
        <button
            id="theme-toggle"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none
            focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            @click="toggleDark()"
        >
          <!-- Dark SVG Icon -->
          <svg
              v-show="!isDark"
              id="theme-toggle-dark-icon"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          <!-- Light SVG Icon -->
          <svg
              v-show="isDark"
              id="theme-toggle-light-icon"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </header>
    <!-- Hero Section -->
    <section id="hero" class="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom">
      <!-- Hero Container -->
      <div class="container mx-auto px-6 text-center pt-10 md:pt-20 pb-52">
        <img src="../assets/fylo/images/illustration-intro.png" alt="" class="mx-auto">
        <h1 class="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p class="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends, family, and co-workers.
        </p>
        <button class="p-3 rounded-full w-52 bg-accentCyan hover:scale-95">
          Get Started
        </button>
      </div>
    </section>
    <!-- Features Section -->
    <section id="features" class="pt-12 bg-gray-50 dark:bg-darkBlue1">
      <!-- Features Container -->
      <div class="container mx-auto px-6 pb-32">
        <!-- First Row -->
        <div class="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          <!-- Items -->
          <div
              v-for="item in items.slice(0, 2)"
              class="flex flex-col items-center space-y-2 md:w-1/2">
            <div class="flex items-center justify-center h-24 mb-6">
              <img :src="item.image" alt="">
            </div>
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="max-w-md">
              {{ item.description }}
            </p>
          </div>
        </div>
        <!-- Second Row -->
        <div class="flex flex-col space-y-24 text-center mt-28 md:flex-row md:space-y-0">
          <!-- Items -->
          <div
              v-for="item in items.slice(2)"
              class="flex flex-col items-center space-y-2 md:w-1/2">
            <div class="flex items-center justify-center h-24 mb-6">
              <img :src="item.image" alt="">
            </div>
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="max-w-md">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Productive Section -->
    <section id="productive" class="bg-white dark:bg-darkBlue">
      <!-- Productive Container -->
      <div class="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        <!-- Image -->
        <div class="md:w-1/2">
          <img src="../assets/fylo/images/illustration-stay-productive.png" alt="" class="mb-10">
        </div>
        <!-- Content -->
        <div class="flex flex-col items-start md:w-1/2">
          <div class="flex flex-col space-y-5">
            <h4 class="max-w-md text-xl font-bold md:text-4xl">
              Stay productive, where you are
            </h4>
            <p class="text-md md:text-lg">
              Never let location be an issue when accessing your files. Fylo has you covered for all of your
              file storage needs.
            </p>
            <p class="text-md md:text-lg">
              Securely share files and folders with friends, family, and colleagues for live collaboration.
              No email attachments required.
            </p>
          </div>
          <!-- Link -->
          <div class="block mt-4">
            <a href="#" class="border-b order-accentCyan text-accentCyan"
            >
              See how Fylo works
              <img src="../assets/fylo/images/icon-arrow.svg" alt="" class="inline pb-2">
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Testimonials Section -->
    <section id="testimonials" class="bg-gray-50 dark:bg-darkBlue">
      <!-- Testimonial Container -->
      <div class="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        <!-- Boxes Container -->
        <div class="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          <!-- Quote Image -->
          <img
              src="../assets/fylo/images/bg-quotes.png"
              alt=""
              class="absolute left-1 -top-2 w-10 md:-top-16 md:w-20" />
          <!-- Boxes -->
          <div
              v-for="customer in customers"
              class="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:2-1/3"
          >
            <p class="text-sm leading-5 md:text-lg">
              {{ customer.description }}
            </p>
            <!-- Customer Info -->
            <div class="flex space-x-4">
              <img :src="customer.image" alt="" class="w-10 h-10 rounded-full">
            </div>
            <div>
              <h5 class="text-sm font-semibold">{{ customer.name }}</h5>
              <p class="text-xs font-extralight">{{ customer.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Early Access Section -->
    <section id="early-access" class="relative px-6 dark:bg-darkBlue2 md:px-0">
      <div class="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-darkBlue1 md:px-16">
        <h5 class="text-2xl font-bold">Get early access today</h5>
        <p class="text-sm">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
          our support team would be happy to help you.
        </p>
        <!-- Input & Button Container -->
        <div class="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          <div class="w-full md flex-1">
            <input
                type="text"
                class="w-full px-10 py-3 rounded-full focus:outline-none"
                placeholder="email@example.com"
            />
          </div>
          <button class="w-full p-3 px-6 rounded-full bg-accentCyan md:w-56 hover:scale-95">
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="bg-darkBlue2 text-white">
      <div class="container mx-auto pt-12 px-5 pb-10">
        <!-- Flex Container for All Items -->
        <div class="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          <!-- Email & Phone -->
          <div class="mt-10 space-y-6">
            <div class="flex items-center space-x-3 md:-mt-10">
              <div class="w-6">
                <img src="../assets/fylo/images/icon-phone.svg" alt="" class="scale-10">
              </div>
              <div>+1-543-123-4567</div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-6">
                <img src="../assets/fylo/images/icon-email.svg" alt="" class="scale-10">
              </div>
              <div>example@fylo.com</div>
            </div>
          </div>
          <! -- Menus -->
          <div class="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
            <div class="flex flex-col space-y-3">
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div class="flex flex-col space-y-3">
              <a href="#">Contact</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
          <!-- Social -->
          <div class="flex justify-center pb-10 space-x-3">
            <div>
              <a href="#">
                <img src="../assets/fylo/images/facebook.svg" alt="" class="p-2 bg-darkBlue rounded-full ficon">
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../assets/fylo/images/twitter.svg" alt="" class="p-2 bg-darkBlue rounded-full ficon">
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../assets/fylo/images/instagram.svg" alt="" class="p-2 bg-darkBlue rounded-full ficon">
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
#website {
  @apply min-h-screen w-screen font-opensans dark:bg-darkBlue dark:text-white;
}

.ficon:hover {
  filter: invert(80%) sepia(37%) saturate(7048%) hue-rotate(132deg) brightness(105%) contrast(104%);
}
</style>
