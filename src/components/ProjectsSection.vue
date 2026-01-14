<template>
  <section class="section">
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-xl font-bold text-harvard-navy dark:text-white transition-colors duration-300">Recent Projects</h2>
      <router-link to="/projects" class="text-sm text-harvard-crimson dark:text-red-400 hover:underline transition-colors duration-300">View All →</router-link>
    </div>
    
    <div class="grid md:grid-cols-2 gap-3">
      <div 
        v-for="(project, index) in recentProjects" 
        :key="index"
        class="project-card bg-white dark:bg-gray-800 border dark:border-gray-700 p-4 transition-colors duration-300"
      >
        <h3 class="text-base font-bold mb-2 text-harvard-navy dark:text-white transition-colors duration-300">
          {{ project.name }}
        </h3>
        <p class="text-sm text-harvard-gray dark:text-gray-300 mb-2 leading-relaxed transition-colors duration-300">
          {{ project.description }}
        </p>
        <div class="mb-2">
          <p class="text-xs font-semibold text-harvard-navy dark:text-white mb-1 transition-colors duration-300">Tech Stack:</p>
          <p class="text-xs text-harvard-gray dark:text-gray-400 transition-colors duration-300">
            {{ project.tech.join(', ') }}
          </p>
        </div>
        <a 
          v-if="project.link !== '#'"
          :href="project.link" 
          target="_blank" 
          class="text-sm text-harvard-crimson dark:text-red-400 hover:underline transition-colors duration-300"
        >
          {{ project.linkText }} →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import projectsData from '../data/projects.json'

// Show only first 4 projects on home page
const recentProjects = computed(() => projectsData.slice(0, 4))
</script>
