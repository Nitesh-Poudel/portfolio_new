<script setup>
const skills = [
    // Top Row (3 Cards)
    { title: 'Web Development', icon: 'bi-laptop', desc: 'Laravel, Vue.js, and modern CSS frameworks.', col: 'col-md-4', delay: 0 },
    { title: 'Backend & APIs', icon: 'bi-database-check', desc: 'Scalable REST APIs and MySQL management.', col: 'col-md-4', delay: 100 },
    { title: 'System Architecture', icon: 'bi-diagram-3', desc: 'Efficient and scalable system design.', col: 'col-md-4', delay: 200 },
    
    // Bottom Row (2 Cards)
    { title: 'Instruction & Training', icon: 'bi-person-video3', desc: 'Providing training on web development and basic IT.', col: 'col-md-6', delay: 0 },
    { title: 'Agile Methodology', icon: 'bi-clipboard-check', desc: 'Implementing agile practices for efficient delivery.', col: 'col-md-6', delay: 100 }
];
</script>

<template>
    <section class="">
        <div class="container">
            <div class="row g-4 justify-content-center">
                <div 
                    v-for="(skill, index) in skills" 
                    :key="index" 
                    :class="[skill.col, 'col-12']" 
                    :data-aos="'fade-up'" 
                    :data-aos-delay="skill.delay"
                >
                    <div class="glass-card text-center h-100 d-flex flex-column align-items-center p-4">
                        <i :class="['bi', skill.icon, 'display-4 text-warning mb-3']"></i>
                        <h5 class="">{{ skill.title }}</h5>
                        <p class="small opacity-75">{{ skill.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.glass-card {
    /* Ensures the cards look consistent even with different widths */
    min-height: 220px;
}
</style>