export default defineNuxtConfig({
  css: [
    'bootstrap/dist/css/bootstrap.min.css', // 1. Base Framework
    'bootstrap-icons/font/bootstrap-icons.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    '~/assets/css/main.css' // 2. YOUR CUSTOM COLORS (Must be last)
  ]
})