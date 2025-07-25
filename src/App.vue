<template>
  <main
    ref="mainContainer"
    class="h-screen w-screen overflow-y-scroll snap-y snap-mandatory"
    @scroll="handleScroll"
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
    <section class="snap-start">
      <PageTen />
    </section>
    <section class="snap-start">
      <PageEleven />
    </section>
    <section class="snap-start">
      <PageTwelve />
    </section>
    <section class="snap-start">
      <PageThirteen />
    </section>
    <section class="snap-start">
      <PageFourteen />
    </section>
    <section class="snap-start">
      <PageFifteen />
    </section>
  </main>
  <!-- Flèche qui rebondit -->
  <div
    v-show="!isLastPage"
    class="pb-10 animate-bounce text-2xl flex items-center justify-center"
  >
    ⬇
  </div>

<button
  v-show="isLastPage"
  @click="scrollToTop"
  class="fixed bottom-10 right-1/2 translate-x-1/2 bg-green-800 text-white font-bold py-2 px-4 rounded shadow-lg"
>
  Recommencer au début
</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PageOne from './components/Page1.vue';
import PageTwo from './components/Page2.vue';
import PageThree from './components/Page3.vue';
import PageFour from './components/Page4.vue';
import PageFive from './components/Page5.vue';
import PageSix from './components/Page6.vue';
import PageSeven from './components/Page7.vue';
import PageEight from './components/Page8.vue';
import PageNine from './components/Page9.vue';
import PageTen from './components/Page10.vue';
import PageEleven from './components/Page11.vue';
import PageTwelve from './components/Page12.vue';
import PageThirteen from './components/Page13.vue'; // pendu
import PageFourteen from './components/Page14.vue';
import PageFifteen from './components/Page15.vue';

// Références pour suivre l'état de la page
const mainContainer = ref<HTMLDivElement | null>(null);
const isLastPage = ref(false);

// Gestionnaire pour détecter si l'utilisateur est à la dernière page
const handleScroll = () => {
  const container = mainContainer.value;
  if (container) {
    // Vérifie si l'utilisateur a atteint le bas du conteneur
    const scrollPosition = container.scrollTop + container.clientHeight;
    const scrollHeight = container.scrollHeight;
    isLastPage.value = scrollPosition >= scrollHeight - 1; // Tolère une marge pour éviter des erreurs minimes
  }
};

// Fonction pour remonter tout en haut du container principal
const scrollToTop = () => {
  const container = mainContainer.value;
  if (container) {
    container.scrollTo({
      top: 0, // Remonter au tout début
      behavior: "smooth", // Défilement fluide
    });
  }
};
</script>

<style>
html {
  scroll-behavior: smooth; /* Active le défilement fluide */
}
</style>