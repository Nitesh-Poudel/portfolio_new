<template>
  <div class="timeline-wrapper">
    <h2 class="fw-bold mb-5">{{ title }}</h2>
    <div v-for="(item, index) in items" :key="index" class="timeline-item">
      <h5 class="text-white mb-1">{{ item.role }}</h5>
      <p class="text-warning small mb-0">{{ item.company }} | {{ item.year }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['title', 'items']);
</script>