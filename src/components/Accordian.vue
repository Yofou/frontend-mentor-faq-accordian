<template>
  <div class="flex flex-col transition-[gap] duration-300" :class="{ 'gap-6': isOpen, 'gap-0': !isOpen }">
    <button class="text-left grid grid-cols-[1fr,max-content] gap-6 items-center group" @click="onToggle">
      <span class="text-title text-dark-purple hover:text-pink group-focus:text-pink">
        {{ props.title }}
      </span>


      <Close v-if="isOpen" />
      <Open v-else />
    </button>

    <div
      class="grid transition-[grid-template-rows] duration-300"
      :class="{ 'grid-rows-[0fr]': !isOpen, 'grid-rows-[1fr]': isOpen }"
    >
      <div class="overflow-hidden">
        <p class="text-body text-pale-purple">{{ props.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import Open from "./icons/Open.vue";
import Close from "./icons/Close.vue";

///// props/emits /////
const props = defineProps<{
  title: string;
  description: string;
  defaultValue?: boolean;
}>();

///// refs, provide or inject then variables /////
const isOpen = ref(props.defaultValue ?? false);

///// computed /////

///// methods /////
const onToggle = () => (isOpen.value = !isOpen.value);

///// watchers /////

///// lifecycle /////
</script>
