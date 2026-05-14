<script setup>
import { onMounted } from 'vue';
import Typed from 'typed.js';

onMounted(() => {
    new Typed(".auto-type", {
        strings: [
        "Solving Problems You Didn't Know You Had.",
        "Living Between the Terminal and the Vision.",
        "Living in a Modular Monolith.",
        "Git Commit: 'Fixed it. Hopefully.''"
        ],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });
});
</script>

<template>
    <section class="hero-section">
        <div class="row align-items-center">
            <div class="col-lg-5 order-lg-2" data-aos="zoom-in">
                <div class="profile-img-container">
                    <img src="/Images/aaa.jpeg" 
                        alt="Nitesh Poudel" 
                        loading="lazy"
                        class="profile-img">
                </div>
            </div>

            <div class="col-lg-7 order-lg-1" data-aos="fade-right">
                <h1 class="display-1 fw-bold">Nitesh Poudel</h1>
                <h3 class="text-warning mb-4"><span class="auto-type"></span></h3>
                <p class="lead opacity-75 mb-5">
                    I am a Web Developer passionate about building scalable and user-friendly applications. 
                    With experience in Laravel, Vue.js, Nuxt.js and API development, I specialize in dynamic solutions.
                </p>
                <div class="d-flex gap-3">
                    <a href="#contact" class="btn btn-warning px-4 py-2 fw-bold">Hire Me</a>
                    <a href="#projects" class="btn btn-outline-light px-4 py-2">View Work</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.profile-img {
    transition: transform 0.3s ease; 
    cursor: pointer;
    transform: rotate(310deg);
    width: 100%;
    max-width: 400px;
}

.hero-section {
    padding: 100px 0;
}
</style>