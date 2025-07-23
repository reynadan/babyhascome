<template>
  <section class="min-h-screen bg-green-600 flex flex-col justify-center items-center text-white">
    <h2 class="text-2xl md:text-4xl mb-4">Nos premières photos</h2>
    <!-- Slider horizontal -->
    <swiper :slides-per-view="1" :space-between="10" :pagination="{ clickable: true }" :scrollbar="{ draggable: true }"
      class="w-full max-w-md">
      <swiper-slide v-for="(photo, index) in photos" :key="index">
        <img :src="photo" class="w-full rounded-xl" />
      </swiper-slide>
    </swiper>
    <!-- Indicateur directionnel -->
    <div class="mt-4 flex items-center text-sm opacity-75">
      <span class="material-icons mr-2">arrow_back</span>
      Glissez horizontalement
      <span class="material-icons ml-2">arrow_forward</span>
    </div>
    <br/> <br/>
  <div class="absolute bottom-4 animate-bounce text-2xl">⬇</div>

  </section>

</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const photos = [
  './src/assets/images/photoAlbum1.png',
  './src/assets/images/photoAlbum2.png',
  './src/assets/images/photoAlbum3.png',
];
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>