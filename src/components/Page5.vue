<template>
  <section
    class="min-h-screen flex flex-col justify-center items-center text-center"
  >
    <h2 class="text-2xl md:text-4xl mb-4">
      Vous pensiez donc, en médiane,<br/> que bébé <u>arriverait</u> le
    </h2>
    <p class="text-4xl md:text-6xl mb-6">{{ estimatedBirthDate }}</p>
    <p class="text-sm md:text-base opacity-0 fade-in">
      Voyons voir ce que dit le docteur...
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { estimatedBirthDate } from "/src/config/globalConfig";

export default defineComponent({
  name: "EstimatedBirthDate",
  data() {
    return {
      estimatedBirthDate,
    };
  },
});
</script>