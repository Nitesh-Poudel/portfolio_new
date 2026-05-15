<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

const route = useRoute();
const projectId = route.params.id;

const projects = [
    { 
        id: 'online-thrift', 
        title: 'Online Thrift Service', 
        img: '/Images/thrift2.png', 
        screenshots: [
          '/Images/thrift1.png', 
          '/Images/thrift2.png', 
         '/Images/thrift3.png', 
          '/Images/thrift2.png', 
           '/Images/thrift2.png', 
            '/Images/thrift3.png', 
          '/Images/thrift2.png', 
           '/Images/thrift2.png', 
        ],
        desc: 'Sustainable fashion platform for peer-to-peer clothing transactions.',
        full_desc: 'A comprehensive platform designed to promote sustainable fashion. Built with a focus on user experiencomprehensive platform desigo promote sustainable fashion. Built with a focus on user experiencomprehensive platform designed to promote sustainable fashion. Built with a focus on user experience and secure transactions.',
        tech: ['Vue.js', 'Laravel', 'Tailwind CSS'],
        link: 'https://github.com/Nitesh-Poudel/Thrift-Service'
    },
    { id: 'book-sharing', title: 'Book Sharing Platform', img: '/Images/book1.png', desc: '...', link: 'https://github.com/...' },
    { id: 'eims', title: 'Education System', img: '/Images/eims.png', desc: '...', badge: 'In Progress' },
    { id: 'marketplace', title: 'Service Marketplace', img: '/Images/smartsewa.png', desc: '...', badge: 'Modular' }
    // ... other projects
];

const project = projects.find(p => p.id === projectId);
const activeImage = ref(project?.img);

const galleryImages = computed(() => {
  if (!project) return [];
  return project.screenshots || [project.img];
});

const setFeatured = (img) => {
  activeImage.value = img;
};

useSeoMeta({
  title: project ? `${project.title} | Nitesh Poudel` : 'Project Not Found',
});
</script>

<template>
  <div class="container py-5 text-white" v-if="project">
    <nav class="mb-4" data-aos="fade-down">
      <NuxtLink to="/" class="text-warning text-decoration-none small">← Back to Portfolio</NuxtLink>
    </nav>

    <div class="row g-5">
      <div class="col-lg-7" data-aos="fade-right">
        <div class="glass-container p-2 rounded-4 mb-3">
          <transition name="fade" mode="out-in">
            <img :key="activeImage" :src="activeImage" class="w-100 rounded-3 shadow-lg object-fit-cover main-preview" :alt="project.title">
          </transition>
        </div>
        <div class="max-w-4xl mx-auto p-6">
          <!-- <BaseSlider 
            :images="projectImages" 
            height="500px" 
            thumb-height="100px" 
          /> -->
        </div>

          <div class="slider-wrapper ">
            <swiper
            :modules="[Navigation, FreeMode]"
            :slides-per-view="4"
            :space-between="10"
            :navigation="true"
            :free-mode="true"
            class="thumbnail-swiper"
          >
            <swiper-slide v-for="(img, index) in galleryImages" :key="index">
              <div 
                class="thumb-card rounded-2 overflow-hidden border-2 border transition cursor-pointer"
                :class="activeImage === img ? 'border-warning' : 'border-transparent'"
                @click="setFeatured(img)"
              >
                <img :src="img" class="w-100 h-100 object-fit-cover" style="height: 70px;">
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <div class="col-lg-5" data-aos="fade-left">
        <div class="d-flex align-items-center gap-3 mb-2">
           <h1 class="text-warning fw-bold mb-0">{{ project.title }}</h1>
           <span v-if="project.badge" class="badge bg-warning text-dark">{{ project.badge }}</span>
        </div>
        
        <p class="text-info font-monospace mb-4">{{ project.desc }}</p>
        
        <div class="project-card-dark p-4 rounded-4 mb-4">
          <h5 class="text-white border-bottom border-secondary pb-2 mb-3">Project Overview</h5>
          <p class="opacity-75 lh-lg small mb-0">{{ project.full_desc }}</p>
        </div>

        <div class="mb-4">
          <h5 class="text-white mb-3">Stack</h5>
          <div class="d-flex flex-wrap gap-2">
            <span v-for="t in project.tech" :key="t" class="tech-tag">
              {{ t }}
            </span>
          </div>
        </div>

        <div class="d-flex gap-3 mt-5">
          <a v-if="project.link" :href="project.link" target="_blank" class="btn btn-warning px-4 flex-grow-1 fw-bold">Source Code</a>
          <NuxtLink to="/" class="btn btn-outline-secondary px-4">Home</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-container {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.main-preview {
  height: 400px;
  width: 100%;
  display: block;
}

.thumb-card {
  filter: grayscale(40%);
  transition: all 0.3s ease;
}

.thumb-card:hover, .thumb-card.border-warning {
  filter: grayscale(0%);
  transform: translateY(-2px);
}

.project-card-dark {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.tech-tag {
  background: rgba(255, 193, 7, 0.1);
  color: #ffc107;
  border: 1px solid rgba(255, 193, 7, 0.2);
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.cursor-pointer {
  cursor: pointer;
}

/* Customizing Swiper Arrows */
:deep(.swiper-button-next), :deep(.swiper-button-prev) {
  color: #ffc107 !important;
  transform: scale(0.5);
}
</style>