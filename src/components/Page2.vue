<template>
  <section class="min-h-screen  flex flex-col justify-center items-center ">
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

// Import explicit des images
import photoAlbum1 from '/src/assets/images/photoAlbum1.jpg';
import photoAlbum2 from '/src/assets/images/photoAlbum2.png';
import photoAlbum3 from '/src/assets/images/photoAlbum3.png';

const photos = [
  photoAlbum1,
  photoAlbum2,
  photoAlbum3,
];
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>
