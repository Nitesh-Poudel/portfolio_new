<template>
  <div class="glass-card overflow-hidden h-100 mx-2">
    <img :src="project.img" class="w-100 object-fit-cover" style="height:250px;" :alt="project.title" loading="lazy">
    <div class="p-4">
      <h4 class="text-warning">{{ project.title }}</h4>
      <p class="opacity-75">{{ project.desc }}</p>
      <div class="mt-auto d-flex align-items-center gap-2">
        <NuxtLink :to="`/projects/${project.id}`" class="btn btn-sm btn-outline-warning">
            View Detail
        </NuxtLink>
        <span v-if="project.badge" class="badge bg-secondary opacity-75">{{ project.badge }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['project']);
</script>
