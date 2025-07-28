<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center p-4 relative"
  >
    <!-- Conteneur pour l'image -->
    <div class="w-full max-w-sm">
      <img
        src="/src/assets/images/photoBebeFull.jpg"
        alt="Description de l'image"
        class="w-full object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</template>

<style scoped>
/* Optimisation pour mobile */
html,
body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth; /* Défilement fluide par défaut */
}

.min-h-screen {
  min-height: 100vh; /* Hauteur minimale de l'écran */
}

button {
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #2563eb; /* Couleur légèrement différente au survol */
}
</style>