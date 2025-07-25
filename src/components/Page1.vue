<template>
  <div class="h-screen flex flex-col justify-center items-center relative">
    <div class="wave-container">
      <h1 class="wave-text text-9xl	ms-madi-regular">
        <span>B</span><span>a</span><span>B</span><span>y</span>
      </h1>
    </div>

    <h1 class="text-4xl md:text-8xl font-bold animate-fadeIn ms-madi-regular">has come !</h1><br /><br /><br />
    <h1 class="text-2xl md:text-4xl text-center px-6">
      Si vous êtes ici, c'est que notre bébé est enfin arrivé.<br /> Avant de découvrir son secret, laissez nous vous
      raconter son histoire en défilant vers le bas !
    </h1>
  </div>
</template>


<script>
import { onMounted } from "vue";
import confetti from "canvas-confetti";

export default {
  setup() {
    // Déclenche les confettis une fois que la page est montée
    onMounted(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    });
  },
};
</script>