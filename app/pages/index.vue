<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Experience & Education Data
const experienceData = [
  { role: 'Full Stack Dev', company: 'Ambition Guru', year: '2025 - Present' },
  { role: 'Frontend Dev', company: 'Smart Sewa', year: '2024' },
  { role: 'Laravel Intern', company: 'Joogle Technology', year: '2024' }
];

const educationData = [
  { role: 'BCA (Bachelor in Computer Application)', company: 'Tribhuvan University', year: 'Ongoing' },
  { role: '10+2 Secondary Education', company: 'Arunodaya School', year: '2019' }
];

// Project Data (If you move the Project Section to its own component later, move this too)
const projects = [
    { id: 'online-thrift', title: 'Online Thrift Service', img: '/Images/thrift2.png', desc: '...', link: 'https://github.com/...' },
    { id: 'book-sharing', title: 'Book Sharing Platform', img: '/Images/book1.png', desc: '...', link: 'https://github.com/...' },
    { id: 'eims', title: 'Education System', img: '/Images/eims.png', desc: '...', badge: 'Laravel & Vue.js' },
    { id: 'marketplace', title: 'Service Marketplace', img: '/Images/smartsewa.png', desc: '...', badge: 'Modular' }
];

onMounted(() => {
    // Initialize AOS for the whole page
    AOS.init({ duration: 800, once: true });

    // Initialize Swiper for projects
    new Swiper(".projectSwiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 30 }
        }
    });
});
</script>

<template>
    <div class="container" id="home">
        <HeroSection /> 

        <ExpertiseSection />

       

        <section id="projects" class="py-5">
            <h2 class="fw-bold mb-4">Featured Projects</h2>
            <div class="swiper projectSwiper pb-5">
                <div class="swiper-wrapper">
                    <div v-for="(project, index) in projects" :key="index" class="swiper-slide h-auto">
                        <ProjectCard :project="project" />
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next text-warning"></div>
                <div class="swiper-button-prev text-warning"></div>
            </div>
        </section>

         <section class="py-5">
            <div class="row">
                <div class="col-lg-6">
                    <TimelineSection title="Experience" :items="experienceData" />
                </div>
                <div class="col-lg-6">
                    <TimelineSection title="Education" :items="educationData" />
                </div>
            </div>
        </section>

        <GallerySection />
        <ContactSection />
    </div>
</template>