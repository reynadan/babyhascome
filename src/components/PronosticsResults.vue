<script lang="ts" setup>
import { ref, computed } from 'vue'


const mainImages: Record<string, string> = {
  "La date de naissance": "https://placehold.co/600x400/orange/blue",
  "L'heure": "https://img.shields.io/badge/%E2%99%82-blue",
  "Le poids": "/images/poids_big.png",
  "La taille en cm": "/images/taille_big.png",
  "Le genre du bébé": "/images/genre_big.png",
  "Prénom": "/images/prenom_big.png",
}

// Types
interface Pronostic {
  Horodateur: string
  "Le genre du bébé": string
  Prénom: string
  "L'heure": string
  "La date de naissance": string
  "La taille en cm": number
  "Le poids": string
  "Conseil pour les parents": string
  "Bébé ressemblera à": string
  "Votre nom prénom (qu’on puisse vous contacter sinon vote annulé)": string
}


const questions = [
  "La date de naissance",
  "L'heure",
  "Le poids",
  "La taille en cm",
  "Le genre du bébé",
  "Prénom"
]

const selectedIndex = ref(0)

const selectedQuestion = computed(() => questions[selectedIndex.value])

const pronostics = ref<Pronostic[]>([])

// Fonctions utilitaires
function parseWeight(w: string): number | null {
  // Extrait un poids en kg comme nombre float
  const match = w.match(/(\d+(?:[.,]\d+)?)/)
  if (!match) return null
  return parseFloat(match[1].replace(',', '.'))
}

function average(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length
}

function mode(arr: string[]): string | null {
  if (arr.length === 0) return null
  const freq = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  return Object.entries(freq).reduce((a, b) => (b[1] > a[1] ? b : a))[0]
}
const pronosticsForSelected = computed(() => {
  if (!selectedQuestion.value) return []
  return pronostics.value.map(p => p[selectedQuestion.value as keyof Pronostic] as string | number)
})

const statsForSelected = computed(() => {
  if (!selectedQuestion.value) return null
  const key = selectedQuestion.value

  const values = pronostics.value.map(p => p[key as keyof Pronostic])

  if (key === "La taille en cm") {
    const nums = values.filter(v => typeof v === 'number') as number[]
    return average(nums).toFixed(1) + ' cm'
  }

  if (key === "Le poids") {
    const nums = values
      .map(v => typeof v === 'string' ? parseWeight(v) : null)
      .filter((n): n is number => n !== null)
    return average(nums).toFixed(3) + ' kg'
  }

  const strs = values.filter(v => typeof v === 'string') as string[]
  return mode(strs)
})

// Final result à adapter aussi
const finalResult = {
  "Le genre du bébé": "Fille",
  "La date de naissance": "15/09/2025",
  "L'heure": "03:00:00",
  "La taille en cm": 51,
  "Le poids": "3kg500",
  "Prénom": "Bébé Chaton"
}

async function loadPronostics() {
  const res = await fetch('/data/pronostics.json')
  pronostics.value = await res.json()
}

loadPronostics()

const viewMode = ref<'pronostics' | 'stats' | 'result'>('pronostics')

const viewedQuestions = ref<Set<string>>(new Set())

function markQuestionAsViewed() {
  viewedQuestions.value.add(selectedQuestion.value)
}

</script>

<template>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 font-sans text-gray-800 container">
    <h1 class="text-3xl font-bold mb-6 text-center text-indigo-700">Pronostics Bébé</h1>

    <div class="flex justify-between mb-6 nav-buttons">
      <button @click="selectedIndex--" :disabled="selectedIndex === 0"
        class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed">Précédent</button>

      <p class="self-center font-semibold text-lg">{{ selectedQuestion }}</p>

      <button @click="selectedIndex++"
        :disabled="selectedIndex === questions.length - 1 || !viewedQuestions.has(selectedQuestion)"
        class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed">
        Suivant
      </button>
    </div>

    <div class="flex gap-4 justify-center mb-6 view-mode-buttons">

      <button @click="viewMode = 'pronostics'; markQuestionAsViewed()"
        class="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
        Voir pronostics
      </button>
      <button @click="viewMode = 'stats'; markQuestionAsViewed()"
        class="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
        Voir moyenne/majorité
      </button>
      <button @click="viewMode = 'result'; markQuestionAsViewed()" class="px-5 py-2 rounded transition
          disabled:text-gray-600
          bg-green-600 text-white hover:bg-green-700">
        Voir résultat final
      </button>

    </div>

    <div v-if="viewMode === 'pronostics'">
      <h3 class="text-xl font-semibold mb-3 border-b border-indigo-300 pb-2">Pronostics :</h3>
      <ul class="list-disc list-inside max-h-64 overflow-y-auto">
        <li v-for="(p, i) in pronosticsForSelected" :key="i" class="flex items-center gap-2">{{ p }}</li>
      </ul>
    </div>

    <div v-if="viewMode === 'stats'">
      <h3 class="text-xl font-semibold mb-3 border-b border-indigo-300 pb-2">Moyenne / Majorité :</h3>
      <p class="text-lg">{{ statsForSelected }}</p>
    </div>

    <div v-if="viewMode === 'result'">
      <h3>Résultat final :</h3>
      <div v-if="selectedQuestion && mainImages[selectedQuestion]" class="mb-6 flex justify-center">
        <img :src="mainImages[selectedQuestion]" alt="Image principale"
          class="max-w-full max-h-64 object-contain rounded-lg shadow-lg" />
      </div>
      <div class="flex items-center gap-3">
        <p>{{ finalResult[selectedQuestion] }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
@media (max-width: 640px) {
  .container {
    max-width: 100% !important;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .nav-buttons {
    flex-direction: column !important;
    gap: 0.5rem;
  }
  .nav-buttons button {
    width: 100%;
  }
  .view-mode-buttons {
    flex-direction: column !important;
    gap: 0.75rem;
  }
  .view-mode-buttons button {
    width: 100%;
    padding: 1rem 0;
    font-size: 1.1rem;
  }
  ul.list-disc {
    max-height: 30vh !important; /* moins haut sur mobile */
  }
  h1 {
    font-size: 1.75rem !important;
  }
  p, li {
    font-size: 1.1rem !important;
  }
}
</style>
