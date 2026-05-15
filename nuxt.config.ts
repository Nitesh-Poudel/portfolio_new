export default defineNuxtConfig({
  ssr: true,
  routeRules: {
    '/': { prerender: true } 
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css', 
    'bootstrap-icons/font/bootstrap-icons.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      title: 'Nitesh Poudel | Web Developer, Designer & Freelancer | Final Year Projects',
      meta: [
        // { name: 'google-site-verification', content: 'google-site-verification: google8a0d32f924e99331.html' },
        { 
          name: 'google-site-verification', 
          content: '7-TqjJHpDGfVrUhQQhPaB7wYk8N31e2Jns0VT4LQuJ4' 
        },        { 
          name: 'description', 
          content: 'Professional Web Developer and UI/UX Designer in Kathmandu. Offering freelance web development, custom website design, and high-quality Final Year Projects for BCA/CSIT students. Expert in Laravel, Vue.js, and Nuxt.' 
        },
        { 
          name: 'keywords', 
          content: 'Web Developer Nepal, Website Designer Kathmandu, Freelance Web Developer, BCA Final Year Project, CSIT Project Source Code, NuxtJS Developer, Laravel Freelancer Nepal' 
        },
        // Open Graph tags (How your link looks when shared on Facebook/LinkedIn)
        { property: 'og:title', content: 'Nitesh Poudel | Web Developer & Freelancer' },
        { property: 'og:description', content: 'Need a custom website or a final year project? Let’s build something together.' },
        { property: 'og:type', content: 'website' }
      ],
    }
  }
})