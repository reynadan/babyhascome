<template>
  <section
    class="min-h-screen  flex flex-col justify-center items-center  text-center"
  >
    <h2 class="text-2xl md:text-4xl mb-4">Vous pensiez donc, en médiane,<br/> que bébé <u>ferait</u></h2>
    <p class="text-4xl md:text-6xl mb-6">{{ estimatedSize }}</p>
    <p class="text-sm md:text-base opacity-0 fade-in">Sortons le mètre ruban...</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { estimatedSize } from "/src/config/globalConfig";

export default defineComponent({
  name: "estimatedSize",
  data() {
    return {
      estimatedSize
    };
  },
});
</script>