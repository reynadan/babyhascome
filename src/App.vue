<template>
  <main
    class="h-screen w-screen overflow-y-scroll snap-y snap-mandatory"
  >
    <section class="snap-start">
      <PageOne />
    </section>
    <section class="snap-start">
      <PageTwo />
    </section>
    <section class="snap-start">
      <PageThree />
    </section>
  </main>
</template>

<script setup lang="ts">
import PageOne from './components/Page1.vue';
import PageTwo from './components/Page2.vue';
import PageThree from './components/Page3.vue';
</script>

<style>
/* Active le comportement smooth pour les scrolls "manuels" */
html {
  scroll-behavior: smooth;
}
</style>