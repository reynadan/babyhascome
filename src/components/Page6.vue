<template>
  <section
    class="min-h-screen  flex flex-col justify-center items-center  text-center"
  >
    <h2 class="text-2xl md:text-4xl mb-4">Pas loin !<br/> Bébé est finalement arrivé le </h2>
    <div class="wave-container">
      <h1 class="wave-text">
        <span class="font-bold">{{ $birthDate }}</span>
      </h1>
    </div>
    <p class="text-sm md:text-base opacity-0 fade-in">Né sous le signe {{ $signeAstro }}, et merde.</p>
  </section>
</template>