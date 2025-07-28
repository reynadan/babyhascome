<template>
  <section class="min-h-screen  flex flex-col justify-center items-center ">
    <!-- Slider horizontal -->
    <swiper :slides-per-view="1" :space-between="10" :pagination="{ clickable: true }"
      class="w-full max-w-md">
      <swiper-slide v-for="(photo, index) in photos" :key="index">
        <img :src="photo" class="w-full rounded-xl" />
      </swiper-slide>
    </swiper>
  </section>

</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import photoAlbum8 from '/src/assets/images/album2/photoAlbum8.png';
import photoAlbum9 from '/src/assets/images/album2/photoAlbum9.png';
import photoAlbum10 from '/src/assets/images/album2/photoAlbum10.png';
import photoAlbum11 from '/src/assets/images/album2/photoAlbum11.png';
import photoAlbum12 from '/src/assets/images/album2/photoAlbum12.png';
import photoAlbum13 from '/src/assets/images/album2/photoAlbum13.png';
import photoAlbum14 from '/src/assets/images/album2/photoAlbum14.png';


const photos = [
  photoAlbum8,
  photoAlbum9,
  photoAlbum10,
  photoAlbum11,
  photoAlbum12,
  photoAlbum13,
  photoAlbum14,
];
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>
