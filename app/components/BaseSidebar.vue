<script setup>
import { ref, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

const props = defineProps({
  images: { type: Array, required: true },
  height: { type: String, default: '400px' },
  thumbHeight: { type: String, default: '80px' }
});

const activeImage = ref(props.images[0]);

// Ensure active image updates if props change dynamically
watch(() => props.images, (newImgs) => {
  activeImage.value = newImgs[0];
}, { deep: true });
</script>

<template>
  <div class="base-slider-container flex flex-col gap-4">
    <div class="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl" :style="{ height: height }">
      <transition name="fade" mode="out-in">
        <img 
          :key="activeImage" 
          :src="activeImage" 
          class="w-100 h-100 object-cover"
        />
      </transition>
    </div>

    <div class="thumbnail-wrapper">
      <swiper
        :modules="[Navigation, FreeMode]"
        :slides-per-view="Math.min(images.length, 4)"
        :space-between="12"
        :navigation="true"
        :free-mode="true"
        class="rounded-lg"
      >
        <swiper-slide v-for="(img, index) in images" :key="index">
          <div 
            @click="activeImage = img"
            class="cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-300"
            :class="activeImage === img ? 'border-amber-400 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'"
            :style="{ height: thumbHeight }"
          >
            <img :src="img" class="w-full h-full object-cover" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

:deep(.swiper-button-next), :deep(.swiper-button-prev) {
  @apply scale-50 text-amber-400 transition-opacity hover:opacity-100;
}
</style>