<template>
  <section
    class="max-w-[37.5rem] w-full rounded-[.5rem] md:rounded-[1rem] bg-white p-6 md:p-10 flex flex-col gap-6 md:gap-8 z-10 card-shadow"
  >
    <h2 class="text-display flex items-center gap-[.8rem]">
      <Logo class="w-6 h-6 md:w-auto md:h-auto" />
      FAQs
    </h2>

    <div class="flex flex-col gap-5 md:gap-6">
      <Accordion
        title="What is Frontend Mentor, and how will it help me?"
        description="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
        default-value
      />
      <div class="w-full h-[1px] bg-light-pink" />
      <Accordion
        title="Is Frontend Mentor free?"
        description="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
      />
      <div class="w-full h-[1px] bg-light-pink" />
      <Accordion
        title="Can I use Frontend Mentor projects in my portfolio?"
        description="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
      />
      <div class="w-full h-[1px] bg-light-pink" />
      <Accordion
        title="How can I get help if I'm stuck on a challenge?"
        description="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Accordion from "./Accordian.vue";
import Logo from './icons/Logo.vue'

///// props/emits /////

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
