<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Header -->
    <div class="py-4 px-6 md:px-12 max-w-6xl mx-auto border-b border-harvard-navy/10 dark:border-gray-700">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold text-harvard-navy dark:text-white transition-colors duration-300">All Projects</h1>
        <router-link to="/" class="text-sm text-harvard-crimson dark:text-red-400 hover:underline transition-colors duration-300">← Back to Home</router-link>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="py-4 px-6 md:px-12 max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div 
          v-for="(project, index) in allProjects" 
          :key="index"
          class="project-card bg-white dark:bg-gray-800 border dark:border-gray-700 p-4 transition-colors duration-300"
        >
          <h3 class="text-lg font-bold mb-2 text-harvard-navy dark:text-white transition-colors duration-300">{{ project.name }}</h3>
          <p class="text-xs text-harvard-gray dark:text-gray-300 mb-3 leading-relaxed transition-colors duration-300">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2 mb-3">
            <span 
              v-for="tech in project.tech" 
              :key="tech"
              class="text-xs px-2 py-1 bg-harvard-navy/5 dark:bg-gray-700 text-harvard-navy dark:text-gray-300 rounded-sm transition-colors duration-300"
            >
              {{ tech }}
            </span>
          </div>
          <a 
            v-if="project.link !== '#'"
            :href="project.link" 
            target="_blank"
            class="text-xs text-harvard-crimson dark:text-red-400 hover:underline transition-colors duration-300"
          >
            {{ project.linkText }}
          </a>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import FooterSection from '../components/FooterSection.vue'
import projectsData from '../data/projects.json'

const allProjects = projectsData
</script>
