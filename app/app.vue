<script setup>
// SEO Implementation
useSeoMeta({
  title: 'Nitesh Poudel | Fullstack Developer Portfolio',
  ogTitle: 'Nitesh Poudel | Laravel & Vue.js Expert',
  description: 'Junior to Mid Fullstack Developer based in Kathmandu, specialized in Clean Code, Laravel, and Nuxt 4.',
  ogDescription: 'Explore the projects and expertise of Nitesh Poudel, a developer focused on scalable system architecture.',
  ogImage: '/Images/aaa.jpeg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
   <nav class="navbar navbar-expand-lg custom-nav fixed-top">
    <div class="container">
      <NuxtLink class="navbar-brand fw-bold text-white" to="/">
        NITESH<span class="text-warning">.</span>
      </NuxtLink>
      
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <i class="bi bi-list text-white fs-2"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link custom-link" to="/#home">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link custom-link" to="/#skills">Skills</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link custom-link" to="/#projects">Projects</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link custom-link" to="/#gallery">Gallery</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link custom-link" to="/#contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>  

    <NuxtPage />

    <footer class="py-5 mt-5 rounded-0 border-0 footer-section">
      <div class="container">
        <div class="row text-center text-md-start">
          <div class="col-md-4 mb-4">
            <h5 class="text-uppercase fw-bold text-warning mb-4 letter-spacing">Contact</h5>
            <p class="opacity-75 mb-2"><i class="bi bi-envelope-fill text-warning me-2"></i> ntspoudel@gmail.com</p>
            <p class="opacity-75 mb-2"><i class="bi bi-geo-alt-fill text-warning me-2"></i> Kathmandu, Nepal</p>
            <p class="opacity-75 mb-2"><i class="bi bi-phone-fill text-warning me-2"></i> +977-9800000000</p>
          </div>

          <div class="col-md-4 mb-4">
            <h5 class="text-uppercase fw-bold text-warning mb-4 letter-spacing">Quick Links</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="#projects" class="footer-link"><i class="bi bi-chevron-right text-warning small me-2"></i>Projects</a></li>
              <li class="mb-2"><a href="#skills" class="footer-link"><i class="bi bi-chevron-right text-warning small me-2"></i>Skills</a></li>
              <li class="mb-2"><a href="#contact" class="footer-link"><i class="bi bi-chevron-right text-warning small me-2"></i>Contact</a></li>
            </ul>
          </div>

          <div class="col-md-4 mb-4">
            <h5 class="text-uppercase fw-bold text-warning mb-4 letter-spacing">Follow Me</h5>
            <div class="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://github.com/Nitesh-Poudel" class="social-btn"><i class="bi bi-github"></i></a>
              <a href="#" class="social-btn"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="social-btn"><i class="bi bi-envelope-heart"></i></a>
            </div>
            <div class="mt-4">
              <a href="#home" class="text-warning text-decoration-none small fw-bold">
                <i class="bi bi-arrow-up-circle-fill me-2"></i>BACK TO TOP
              </a>
            </div>
          </div>

          <div class="col-md-12 text-center mt-4 pt-3 border-top border-secondary border-opacity-25">
            <p class="freelance-badge m-0">📬 Open to freelance & remote opportunities</p>
            <small class="opacity-50 d-block mt-2">© 2026 Nitesh Poudel. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* NAV DESIGN RESTORED */
.custom-nav {
  background: rgba(15, 23, 42, 0.8) !important;
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px 0;
}

.custom-link {
  color: #f8fafc !important;
  font-weight: 500;
  margin: 0 12px;
  position: relative;
  transition: 0.3s;
}

.custom-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--accent-gold);
  transition: 0.3s;
}

.custom-link:hover::after {
  width: 100%;
}

.custom-link:hover {
  color: var(--accent-gold) !important;
}

/* FOOTER DESIGN */
.footer-section {
  background: rgba(15, 23, 42, 0.6) !important;
  backdrop-filter: blur(10px);
}

.footer-link {
  text-decoration: none;
  color: white;
  opacity: 0.7;
  transition: 0.3s;
}

.footer-link:hover {
  opacity: 1;
  color: var(--accent-gold);
  padding-left: 5px;
}

.social-btn {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-btn:hover {
  background: var(--accent-gold);
  color: #0f172a;
  transform: translateY(-3px);
}

.letter-spacing {
  letter-spacing: 2px;
}

.freelance-badge {
  color: #10b981 !important;
  font-size: 0.9rem;
}
</style>