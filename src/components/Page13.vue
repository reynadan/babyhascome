<template>
  <div class="min-h-screen flex justify-center items-center">

    <div class="game-container">
      <h2 class="text-2xl md:text-4xl mb-4">Trouve son prénom !</h2>

      <div class="feedback-image">
        <!-- Image verte, rouge ou orange selon la situation -->
        <img v-if="feedbackImage" :src="feedbackImage" alt="feedback image"
          class="image w-full rounded-xl h-auto object-fill" />
      </div>
      <div class="word-display">
        <span v-for="(letter, index) in discoveredWord" :key="index">
          {{ letter }}
        </span>
      </div>
      <div class="keyboard">
        <button v-for="letter in alphabet" :key="letter" :disabled="usedLetters.includes(letter)"
          @click="onLetterClick(letter)">
          {{ letter }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
// Importation de confetti
import confetti from "canvas-confetti";
import { babyName } from "/src/config/globalConfig.js";

export default defineComponent({
  name: "HangmanGame",
  setup() {
    const state = reactive({
      targetWord: babyName.toUpperCase(),
      usedLetters: [] as string[],
      correctLetters: [] as string[],
      feedbackImage: "", // Contiendra le lien de l'image (vert, rouge ou orange)
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    // Renvoie le mot découvert jusqu'à présent
    const discoveredWord = computed(() =>
      state.targetWord
        .split("")
        .map((letter) =>
          state.correctLetters.includes(letter) ? letter : "_"
        )
    );

    function onLetterClick(letter: string) {
      state.usedLetters.push(letter);

      if (state.targetWord.includes(letter)) {
        // Lettre correcte
        state.correctLetters.push(letter);

        // Déterminer une image aléatoire pour une lettre correcte (parties de bébé)
        const imageOptions = [
          "src/assets/images/photoBebePart1.jpg",
          "src/assets/images/photoBebePart2.jpg",
          "src/assets/images/photoBebePart3.jpg",
        ];
        const randomRightImage = imageOptions[Math.floor(Math.random() * imageOptions.length)];

        // Vérifie si le mot entier est trouvé
        if (!discoveredWord.value.includes("_")) {
          state.feedbackImage = "src/assets/images/photoBebeFull.jpg"; // Image complète (baby)
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
          });
        } else {
          // Afficher une des images aléatoires
          state.feedbackImage = randomRightImage;
        }
      } else {
        // Lettre incorrecte
        const imageOptions = [
          "src/assets/images/photoWrongLetter1.jpg",
          "src/assets/images/photoWrongLetter2.jpg",
          "src/assets/images/photoWrongLetter3.jpg",
        ];
        const randomWrongImage = imageOptions[Math.floor(Math.random() * imageOptions.length)];
        state.feedbackImage = randomWrongImage;
      }
    }

    return {
      alphabet,
      discoveredWord,
      feedbackImage: computed(() => state.feedbackImage),
      usedLetters: computed(() => state.usedLetters),
      onLetterClick,
    };
  },
});
</script>

<style scoped>
/* Ajustement pour étirer horizontalement */
.min-h-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  /* Ajoute un espace horizontal */
  height: 100vh;
  /* Full-screen height */
}

.game-container {
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
  /* Étire horizontalement */
  width: 100%;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Ajoute une légère ombre */
  border-radius: 10px;
  /* Arrondi les bords */
  background-color: #68735E;
  /* Couleur de fond douce */
}

.word-display {
  font-size: 2rem;
  margin-bottom: 2rem;
  /* Augmente l'espacement */
  letter-spacing: 0.8rem;
  /* Étire les espaces entre les lettres */
}

.feedback-image {
  margin: 1.5rem 0;
}

.image {
  max-width: 100%;
  height: auto;
}

.keyboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  /* Étend légèrement les boutons */
  gap: 0.8rem;
  /* Espacement entre les touches */
}

button {
  padding: 0.6rem 1rem;
  font-size: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover:not(:disabled) {
  background-color: #1e9aaa;
  /* Effet au survol */
}

button:disabled {
  background: #86868673;
  cursor: not-allowed;
}
</style>