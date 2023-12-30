<template>
	<main class="relative w-full min-h-screen grid justify-items-center items-start px-6 md:px-0 py-[8.9rem] md:py-[10.5rem] bg-light-pink">
    <img class="absolute top-0 left-0 w-full pointer-events-none h-[14.5rem] md:h-[20rem] object-cover" src="/background.png" alt="">
    <slot />
  </main>
</template>

<script setup lang="ts">
import '../assets/tailwind.css'
import '@fontsource-variable/work-sans'
</script>
