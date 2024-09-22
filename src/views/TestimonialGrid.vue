<script setup lang="ts">
import { ref } from 'vue';

interface IContent {
  styles: string;
  image: string;
  name: string;
  status: string;
  summary: string;
  description: string;
}
const contents = ref<IContent[]>([
  {
    styles: 'relative p-10 rounded-xl bg-purple-700 md:col-span-2',
    image: '/src/assets/testimonial-grid/images/image-daniel.jpg',
    name: "Daniel Clifford",
    status: "Verified Graduate",
    summary: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the " +
        " company I joined, I honestly feel I got every penny's worth.",
    description: "I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition " +
        "and have heard some people who had an amazing experience here. I signed up for the free intro course and " +"" +
        "found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling " +
        "- time of my life. Since completing the course, I've successfully switched careers, working as a Software " +
        "Engineer at a VR startup. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vero repudiandae, " +
        "quasi atque officiis eum consectetur odio amet dolorem deleniti repellat expedita aut sunt laudantium cum " +
        "itaque nam voluptatum quod! Quo totam sequi omnis deserunt? Sit nam molestiae excepturi,perspiciatis " +
        "labore deleniti eum, eligendi quisquam quod sed nobis exercitationem tempora! "
  },
  {
    styles: 'p-10 rounded-xl bg-gray-600',
    image: '/src/assets/testimonial-grid/images/image-jonathan.jpg',
    name: "Jonathan Walters",
    status: "Verified Graduate",
    summary: "The team was very supportive and kept me motivated",
    description: "I started as a total newbie with virtually no coding skills. I now " +
        "work as a mobile engineer for a big company. This was one of the " +
        "best investments I've made in myself. Lorem ipsum dolor sit amet " +
        "consectetur adipisicing elit. Atque ipsam veritatis natus illum " +
        "ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem " +
        "necessitatibus facere nihil deleniti assumenda vel velit neque quia, " +
        "nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem " +
        "consequuntur praesentium a est eum velit quos maiores ipsum facere " +
        "tempora!",
  },
  {
    styles: 'hidden p-10 rounded-xl text-gray-900 bg-white md:block md:row-span-2',
    image: '/src/assets/testimonial-grid/images/image-kira.jpg',
    name: "Kira Whittle",
    status: "Verified Graduate",
    summary: "Such a life-changing experience. Highly recommended!",
    description: "Before joining the bootcamp, I've never written a line of code. I " +
        "needed some structure from professionals who can help me learn " +
        "programming step by step. I was encouraged to enroll by a former " +
        "student of theirs who can only say wonderful things about the " +
        "program. The entire curriculum and staff did not disappoint. They " +
        "were very hands-on and I never had to wait long for assistance. The " +
        "agile team project, in particular, was outstanding. It took my " +
        "learning to the next level in a way that no tutorial could ever " +
        "have. In fact, I've often referred to it during interviews as an " +
        "example of my developent experience. It certainly helped me land a " +
        "job as a full-stack developer after receiving multiple offers. 100% " +
        "recommend!",
  },
  {
    styles: 'p-10 rounded-xl text-gray-900 bg-white',
    image: '/src/assets/testimonial-grid/images/image-jeanette.jpg',
    name: "Jeanette Harmon",
    status: "Verified Graduate",
    summary: "An overall wonderful and rewarding experience",
    description: "Thank you for the wonderful experience! I now have a job I really " +
        "enjoy, and make a good living while doing something I love.",
  },
  {
    styles: 'p-10 rounded-xl bg-gray-900 md:col-span-2',
    image: '/src/assets/testimonial-grid/images/image-patrick.jpg',
    name: "Patrick Abrams",
    status: "Verified Graduate",
    summary: "Awesome teaching support from TAs who did the bootcamp themselves. " +
        "Getting guidance from them and learning from their experiences was " +
        "easy.",
    description: "The staff seem genuinely concerned about my progress which I find " +
        "really refreshing. The program gave me the confidence necessary to " +
        "be able to go out in the world and present myself as a capable " +
        "junior developer. The standard is above the rest. You will get the " +
        "personal attention you need from an incredible community of smart " +
        "and amazing people."
  },
  {
    styles: 'p-10 rounded-xl text-gray-900 bg-white md:hidden',
    image: '/src/assets/testimonial-grid/images/image-kira.jpg',
    name: "Kira Whittle",
    status: "Verified Graduate",
    summary: "Such a life-changing experience. Highly recommended!",
    description: "Before joining the bootcamp, I've never written a line of code. I " +
        "needed some structure from professionals who can help me learn " +
        "programming step by step. I was encouraged to enroll by a former " +
        "student of theirs who can only say wonderful things about the " +
        "program. The entire curriculum and staff did not disappoint. They " +
        "were very hands-on and I never had to wait long for assistance. The " +
        "agile team project, in particular, was outstanding. It took my " +
        "learning to the next level in a way that no tutorial could ever " +
        "have. In fact, I've often referred to it during interviews as an " +
        "example of my developent experience. It certainly helped me land a " +
        "job as a full-stack developer after receiving multiple offers. 100%" +
        "recommend!",
  }
])
</script>

<template>
  <div id="app">
    <!-- Global Container -->
    <div class="container mx-auto max-w-7xl p-2 md:p-10">
      <!-- Grid Container -->
      <div class="grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2">
        <!-- Box 1 -->
        <div
            v-for="(content, index) in contents"
            :class="content.styles">
          <!-- Quotes Image -->
          <img
              v-show="index === 0"
              src="../assets/testimonial-grid/images/bg-pattern-quotation.svg"
              alt=""
              class="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150">
          <!-- Box Header -->
          <div class="flex z-10 space-x-4">
            <img :src="content.image" alt="" class="w-10 h-10 rounded-full ring-2 ring-purple-300">
            <div class="text-sm">
              <h4 class="opacity-90">{{ content.name }}</h4>
              <p class="opacity-50">{{ content.status }}</p>
            </div>
          </div>
          <!-- Large Text -->
          <p class="relative z-10 mt-6 text-xl">
            {{ content.summary }}
          </p>
          <!-- Small Text -->
          <p
              class="mt-6 opacity-50"
              :class="[index === 0 ? 'line-clamp-6' : '', index === 1 ? 'line-clamp-5' : '']">
            "{{ content.description }}"
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  @apply font-barlow bg-gray-200;
}
</style>
