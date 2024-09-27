<script setup lang="ts">
import { ref } from 'vue';
import Accordion from './Accordion.vue';

interface IFAQ {
  question: string;
  answer: string;
}

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
]);
</script>

<template>
  <section id="faq-accordion">
    <div class="container mx-auto px-6 mb-32">
      <!-- Accordion Container -->
      <div class="max-w-2xl m-8 mx-auto overflow-hidden">
        <!-- Tabs -->
        <Accordion
            v-for="(faq, index) in FAQs"
            :tabindex="index + 1"
            :question="faq.question"
            :answer="faq.answer" />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
