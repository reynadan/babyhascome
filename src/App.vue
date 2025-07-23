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
    <section class="snap-start">
      <PageFour />
    </section>
    <section class="snap-start">
      <PageFive />
    </section>
    <section class="snap-start">
      <PageSix />
    </section>
    <section class="snap-start">
      <PageSeven />
    </section>
    <section class="snap-start">
      <PageEight />
    </section>
    <section class="snap-start">
      <PageNine />
    </section>
  </main>
</template>

<script setup lang="ts">
import PageOne from './components/Page1.vue';
import PageTwo from './components/Page2.vue';
import PageThree from './components/Page3.vue';
import PageFour from './components/Page4.vue';
import PageFive from './components/Page5.vue';
import PageSix from './components/Page6.vue';
import PageSeven from './components/Page7.vue';
import PageEight from './components/Page8.vue';
import PageNine from './components/Page9.vue';
</script>

<style>
/* Active le comportement smooth pour les scrolls "manuels" */
html {
  scroll-behavior: smooth;
}
</style>