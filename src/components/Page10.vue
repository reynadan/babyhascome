<template>
    
    <!-- Image avec espacement réduit -->
    <img src="/src/assets/images/pronoNamesTrans.svg" 
         class="w-full rounded-xl h-screen" /><br/>
</template>

<style scoped>
@keyframes fadeIn {
  40% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 3s ease-in-out infinite;
}
</style>