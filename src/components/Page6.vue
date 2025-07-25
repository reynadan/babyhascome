<template>
  <section
    class="min-h-screen  flex flex-col justify-center items-center  text-center"
  >
    <h2 class="text-2xl md:text-4xl mb-4">Pas loin !<br/> Bébé est finalement arrivé le </h2>
    <br/>
    <div class="wave-container">
      <h1 class="wave-text text-5xl ms-madi-regular">
        <span>{{ birthDate }}</span>
      </h1>
    </div><br/>
    <p class="text-sm md:text-base opacity-0 fade-in">Né sous le signe {{ signeAstro }}, et merde.</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { birthDate, signeAstro } from "/src/config/globalConfig";

export default defineComponent({
  name: "BirthDate",
  data() {
    return {
      birthDate, signeAstro
    };
  },
});
</script>