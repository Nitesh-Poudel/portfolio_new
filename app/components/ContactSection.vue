<template>
  <section id="contact" class="py-5" data-aos="fade-up">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="display-5 fw-bold text-white">Get In Touch</h2>
        <div class="mx-auto mt-2" style="width: 60px; height: 3px; background: var(--accent-gold);"></div>
      </div>

      <div class="row g-4 align-items-stretch">
        <div class="col-lg-5">
          <div class="glass-card p-4 h-100 d-flex flex-column justify-content-between border-gold-hover">
            <div>
              <h4 class="text-warning fw-bold mb-4">Let's Talk</h4>
              <p class="opacity-75 mb-5">
                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and system architectures.
              </p>
              
              <div class="contact-detail mb-3">
                <i class="bi bi-geo-alt-fill text-warning me-3"></i>
                <span>Kathmandu, Nepal</span>
              </div>
              <div class="contact-detail mb-3">
                <i class="bi bi-envelope-at-fill text-warning me-3"></i>
                <span>niteshpoudel.dev@gmail.com</span>
              </div>
            </div>

            <div class="d-flex gap-3 mt-4">
              <a href="https://github.com/Nitesh-Poudel" class="social-circle"><i class="bi bi-github"></i></a>
              <a href="#" class="social-circle"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="social-circle"><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="glass-card p-4 shadow-lg">
            <form @submit.prevent="handleSubmit">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control glass-input" id="name" placeholder="Name">
                    <label for="name" class="text-white-50">Your Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control glass-input" id="email" placeholder="Email">
                    <label for="email" class="text-white-50">Email Address</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-4">
                    <textarea class="form-control glass-input" id="msg" placeholder="Message" style="height: 150px"></textarea>
                    <label for="msg" class="text-white-50">How can I help you?</label>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-warning w-100 py-3 fw-bold text-dark text-uppercase letter-spacing-1">
                    Send Message <i class="bi bi-send-fill ms-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Matching your Hero and Global Style */
.glass-input {
  background: rgba(255, 255, 255, 0.03) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: white !important;
  border-radius: 12px !important;
}

.glass-input:focus {
  border-color: var(--accent-gold) !important;
  box-shadow: 0 0 15px rgba(251, 191, 36, 0.2) !important;
  background: rgba(255, 255, 255, 0.07) !important;
}

.form-floating > label {
  padding-left: 15px;
}

.social-circle {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-circle:hover {
  background: var(--accent-gold);
  color: #0f172a;
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(251, 191, 36, 0.4);
}

.letter-spacing-1 {
  letter-spacing: 1px;
}

.contact-detail i {
  font-size: 1.2rem;
}
</style>