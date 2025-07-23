<template>
  <section
    class="min-h-screen bg-green-600 flex flex-col justify-center items-center text-white"
  >
    <h2 class="text-2xl md:text-4xl mb-4">L'HEURE FATIDIQUE</h2>

    <!-- Slider horizontal -->
    <swiper
      :slides-per-view="1"
      :space-between="10"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      class="w-full max-w-md"
    >
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

const photos = [
  'https://placehold.co/400x300?text=Pronostiques+date+heure',
  'https://placehold.co/400x300?text=Date+heure+reelle',
  'https://placehold.co/400x300?text=Personne+qui+etait+la+plus+proche',
];
</script>