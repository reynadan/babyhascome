<template>
<div class="h-screen flex flex-col justify-center items-center bg-green-600 text-white relative">
    <h1 class="text-4xl md:text-6xl font-bold animate-fadeIn">Baby has come</h1>
    <div class="absolute bottom-4 animate-bounce text-2xl">⬇</div>
</div>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1.5s ease-in-out;
}

/* better display of arrow on phone */
@media screen and (max-width: 768px) {
  .absolute.bottom-4 {
    bottom: 16px; 
  }
}

</style>