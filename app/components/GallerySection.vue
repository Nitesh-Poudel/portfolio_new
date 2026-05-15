<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Added modules
import 'swiper/css';
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles

const modules = [Navigation, Pagination, Autoplay];

const galleryGroups = [

  {
    title: 'Refreshment', // Fixed spelling
    description: 'Outing with colleagues from Ambition Guru / Sociair.', // Fixed spelling
    images: [
        '/file/gallery/ag11.jpeg', 
        '/file/gallery/ag12.jpeg',
        '/file/gallery/ag13.jpeg',
    ]
  },
  {
    title: 'Passions & Lifestyle',
    description: 'Activities that keep the creativity flowing.',
    images: [
      '/file/gallery/hob4.jpg', 
      '/file/gallery/hob1.jpg', 
      '/file/gallery/hob2.jpg', 
      '/file/gallery/hob3.jpg',
      '/file/gallery/hob5.jpg' 
    ]
  },
  {
    title: 'Graduation',
    description: 'Memories from college days.',
    images: [
        '/file/gallery/triton3.jpeg',
        '/file/gallery/triton4.jpeg',
        '/file/gallery/triton5.jpeg',
        '/file/gallery/triton1.jpeg',
        '/file/gallery/triton2.jpeg',
    ]
  },
    {
    title: 'Professional Milestones',
    description: 'Acknowledged for volunteering as a Web Development Trainer.',
    images: ['/file/gallery/certificate.jpg']
  },
//   {
//     title: 'Future Horizons',
//     description: 'The journey continues forward.',
//     images: ['/file/gallery/hob4.jpg']
//   }
];
</script>

<template>
  <section id="gallery" class="py-5 container">
    <h2 class="fw-bold mb-4 text-white">My Gallery</h2>

    <div class="swiper-container-wrapper ">
      <Swiper
        :modules="modules"
        :slides-per-view="1.2"
        :space-between="15"
        :pagination="{ clickable: true }"
        :navigation="{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }"
        :breakpoints="{
          '640': { slidesPerView: 1.5 },
          '768': { slidesPerView: 2.2 },
          '1024': { slidesPerView: 3 }
        }"
        class="gallery-swiper pb-5"
      >
        <SwiperSlide v-for="(group, index) in galleryGroups" :key="index">
          <div class="glass-card gallery-card h-100 overflow-hidden">
            
            <div :class="['image-grid', `grid-${Math.min(group.images.length, 4)}`]">
              <div v-for="(img, i) in group.images.slice(0, 4)" :key="i" class="grid-item">
                <img :src="img" class="img-fluid object-fit-cover w-100 h-100 gallery-img" loading="lazy">
                <div v-if="i === 3 && group.images.length > 4" class="more-overlay">+{{ group.images.length - 3 }}</div>
              </div>
            </div>

            <div class="gallery-info p-3">
              <h5 class="fw-bold mb-1 text-accent">{{ group.title }}</h5>
              <p class="m-0 text-small text-light-gray">{{ group.description }}</p>
            </div>
          </div>
        </SwiperSlide>

        <div class="custom-nav custom-prev"><i class="bi bi-chevron-left"></i></div>
        <div class="custom-nav custom-next"><i class="bi bi-chevron-right"></i></div>
      </Swiper>
    </div>
  </section>
</template>
<style scoped>
.swiper-container-wrapper {
  position: relative; /* Anchor for the custom arrows */
}

/* Base Navigation Circle Styling */
.custom-nav {
  position: absolute;
  top: 140px; 
  z-index: 10;
  width: 45px;
  height: 45px;
  background: rgba(15, 23, 42, 0.8); /* Dark base */
  border: 1px solid rgba(251, 191, 36, 0.3); /* Light border */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fbbf24;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(2px);
  transform: translateY(-50%); 
}

/* Light/Glow effect on hover */
.custom-nav:hover {
  background: #fbbf24;
  color: #0f172a;
  box-shadow: 0 0 15px rgba(251, 191, 36, 0.5);
  border-color: #fbbf24;
}

/* Positioning them between the blocks */
.custom-prev {
  left: 0px;
}
.custom-next {
  right: -0px;
}

/* Ensure arrows don't disappear on small screens */
@media (max-width: 768px) {
  .custom-nav {
    display: none; /* Hide buttons on mobile to avoid clutter; use touch-swipe */
  }
}

.gallery-card {
  min-height: 420px;
  display: flex;
  flex-direction: column;
  background: rgba(30, 41, 59, 0.5);
}

.image-grid {
  height: 280px; /* This height matches the 'top' calculation above */
  display: grid;
  gap: 6px;
  padding: 10px;
}

/* Hover "Separate" effect */
.grid-item {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}
.grid-item:hover {
  border-color: rgba(251, 191, 36, 0.5);
  transform: scale(0.98); /* Slight shrink creates 'separation' visual */
}

.gallery-img {
  transition: transform 0.5s ease;
}
/* .grid-item:hover .gallery-img {
  transform: scale(1.1);
} */

/* Pagination Dots */
:deep(.swiper-pagination) {
  bottom: 0 !important;
}
:deep(.swiper-pagination-bullet-active) {
  background: #fbbf24 !important;
}
.grid-1 {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}

/* 2 Images: Perfect 50/50 split */
.grid-2 {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
}

/* 3 Images: 1 Large Left, 2 Stacked Right */
.grid-3 {
    grid-template-columns: 1.5fr 1fr; /* Featured image is wider */
    grid-template-rows: 1fr 1fr;
}
.grid-3 .grid-item:first-child {
    grid-row: span 2; /* Spans top and bottom rows */
}

/* 4 Images: Perfect 2x2 */
.grid-4 {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
</style>