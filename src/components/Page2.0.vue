<template>
  <section class="h-screen flex flex-col justify-center items-center">
    <swiper
      :slides-per-view="1"
      :space-between="10"
      :pagination="{ clickable: true }"
      class="w-full h-full"
    >
      <swiper-slide
        v-for="(photo, index) in photos"
        :key="index"
        class="h-full flex items-center justify-center"
      >
        <img :src="photo" class="h-full object-contain rounded-xl" />
      </swiper-slide>
    </swiper>
  </section>
</template>


<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import photoAlbum1 from '/src/assets/images/album1/photoAlbum1.png';
import photoAlbum2 from '/src/assets/images/album1/photoAlbum2.png';
import photoAlbum3 from '/src/assets/images/album1/photoAlbum3.png';
import photoAlbum4 from '/src/assets/images/album1/photoAlbum4.png';
import photoAlbum5 from '/src/assets/images/album1/photoAlbum5.png';
import photoAlbum6 from '/src/assets/images/album1/photoAlbum6.png';
import photoAlbum7 from '/src/assets/images/album1/photoAlbum7.png';

const photos = [
  photoAlbum1,
  photoAlbum2,
  photoAlbum3,
  photoAlbum4,
  photoAlbum5,
  photoAlbum6,
  photoAlbum7
];
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>
