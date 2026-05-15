<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: '',
  date: '',
});

const isSubmitting = ref(false);
const submitStatus = ref(''); 

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = '';

  try {
    const response = await fetch('https://sheetdb.io/api/v1/bb5umraiqb7em', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [
          {
            name: form.value.name,
            email: form.value.email,
            message: form.value.message,
            date: new Date().toLocaleString() 
          }
        ]
      })
    });

    if (response.ok) {
      submitStatus.value = 'success';
      // Reset input layout values on successful log
      form.value = { name: '', email: '', message: '' };
    } else {
      submitStatus.value = 'error';
    }
  } catch (error) {
    console.error('Submission failed:', error);
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

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
              <a href="https://github.com/Nitesh-Poudel" class="social-circle" target="_blank"><i class="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/nitesh-poudel-162837251/" class="social-circle"><i class="bi bi-linkedin"></i></a>
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
                    <input 
                      v-model="form.name" 
                      type="text" 
                      class="form-control glass-input" 
                      id="name" 
                      placeholder="Name" 
                      required
                    >
                    <label for="name" class="text-white-50">Your Name</label>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input 
                      v-model="form.email" 
                      type="email" 
                      class="form-control glass-input" 
                      id="email" 
                      placeholder="Email" 
                      required
                    >
                    <label for="email" class="text-white-50">Email Address</label>
                  </div>
                </div>
                
                <div class="col-12">
                  <div class="form-floating mb-4">
                    <textarea 
                      v-model="form.message" 
                      class="form-control glass-input" 
                      id="msg" 
                      placeholder="Message" 
                      style="height: 150px" 
                      required
                    ></textarea>
                    <label for="msg" class="text-white-50">How can I help you?</label>
                  </div>
                </div>
                
                <div class="col-12">
                  <button 
                    :disabled="isSubmitting"
                    type="submit" 
                    class="btn btn-warning w-100 py-3 fw-bold text-dark text-uppercase letter-spacing-1 d-flex align-items-center justify-content-center gap-2"
                  >
                    <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status"></span>
                    <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                    <i v-if="!isSubmitting" class="bi bi-send-fill"></i>
                  </button>
                </div>

                <!-- Live Notification Feed Blocks -->
                <div class="col-12 mt-3" v-if="submitStatus">
                  <div v-if="submitStatus === 'success'" class="alert alert-success bg-success/20 text-emerald-400 border border-success/30 px-3 py-2 rounded-3 text-center text-small">
                  ✓ Awesome! Thank you for your message. I will get back to you soon.
                </div>
                  <div v-if="submitStatus === 'error'" class="alert alert-danger bg-danger/20 text-rose-400 border border-danger/30 px-3 py-2 rounded-3 text-center text-small">
                    ⚠ Process pipeline broken. Check connection or try again.
                  </div>
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

.text-small {
  font-size: 0.85rem;
}
</style>