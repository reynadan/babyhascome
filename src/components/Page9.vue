<template>
  <section
    class="min-h-screen  flex flex-col justify-center items-center  text-center"
  >
    <h2 class="text-2xl md:text-4xl mb-4">El niño pequeño mesure finalement ...</h2>
    <br/>
    <div class="wave-container">
      <h1 class="wave-text text-5xl ms-madi-regular">
        <span>{{ size }}</span>
      </h1>
    </div>
    <br/>
    <p class="text-sm md:text-base opacity-0 fade-in">
      C'est un beau bébé.<br/>
      Papa a trouvé la bonne taille ! (futur ngapeth)<br/>
      Adeline a été la plus proche pour le poids : 3,810 kg
    </p>
    <br/>
    <h2 class="text-2xl md:text-4xl mb-4 text-center">
      Maintenant on passe aux pronostiques sur les prénoms !
    </h2>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { size } from "/src/config/globalConfig";

export default defineComponent({
  name: "Size",
  data() {
    return {
      size
    };
  },
});
</script>