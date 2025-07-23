<template>
  <section
    class="min-h-screen bg-green-600 flex flex-col justify-center items-center text-white text-center"
  >
    <h2 class="text-2xl md:text-4xl mb-4">Vous pensiez donc, en moyenne, qu'il <u>arriverait</u> le</h2>
    <p class="text-4xl md:text-6xl mb-6">{{ $estimatedBirthDate }}</p>
    <p class="text-sm md:text-base opacity-0 fade-in">Voyons voir ce que dit le docteur...</p>
  </section>
</template>