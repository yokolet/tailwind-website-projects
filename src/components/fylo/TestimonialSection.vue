<script setup lang="ts">
import { ref } from 'vue';
import profileImage1 from '/src/assets/fylo/images/profile-1.jpg';
import profileImage2 from '/src/assets/fylo/images/profile-2.jpg';
import profileImage3 from '/src/assets/fylo/images/profile-3.jpg';

interface ICustomer {
  image: string;
  description: string;
  name: string;
  company: string;
}

const customers = ref<ICustomer[]>([
  {
    image: profileImage1,
    description: 'Fylo has improved our team productivity by an order of magnitude. ' +
        'Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Satish Patel',
    company: 'Founder & CEO. Huddle',
  },
  {
    image: profileImage2,
    description: 'Fylo has improved our team productivity by an order of magnitude. ' +
        'Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Bruce McKenzie',
    company: 'Founder & CEO. Huddle 2',
  },
  {
    image: profileImage3,
    description: 'Fylo has improved our team productivity by an order of magnitude. ' +
        'Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Eva Boyd',
    company: 'Founder & CEO. Huddle 3',
  },
]);
</script>

<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="bg-gray-50 dark:bg-darkBlue">
    <!-- Testimonial Container -->
    <div class="container mx-auto px-6 pt-12 pb-80 md:pb-96">
      <!-- Boxes Container -->
      <div class="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
        <!-- Quote Image -->
        <img
            src="/src/assets/fylo/images/bg-quotes.png"
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
</template>

<style scoped>

</style>
