<template>
  <section class="section">
    <div class="bg-white dark:bg-gray-800 border border-harvard-navy/10 dark:border-gray-700 p-4 transition-colors duration-300">
      <h2 class="text-xl font-bold mb-3 text-harvard-navy dark:text-white transition-colors duration-300">Certifications & Training</h2>
      
      <div class="space-y-3">
        <div 
          v-for="(cert, index) in certifications" 
          :key="index" 
          class="border-l-2 border-harvard-navy/20 dark:border-gray-600 pl-3 transition-all duration-300 hover:border-harvard-crimson hover:shadow-md cursor-pointer"
        >
          <div class="flex items-start justify-between gap-2 mb-1">
            <h3 class="text-sm font-bold text-harvard-navy dark:text-white transition-colors duration-300">{{ cert.name }}</h3>
          </div>
          <p class="text-xs text-harvard-crimson dark:text-red-400 mb-1 transition-colors duration-300">{{ cert.issuer }}</p>
          <a 
            v-if="cert.link" 
            :href="cert.link" 
            target="_blank"
            class="text-xs text-harvard-gray dark:text-gray-400 hover:text-harvard-crimson dark:hover:text-red-400 transition-colors duration-300 underline"
          >
            View Certificate →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const certifications = ref([
  {
    name: 'Foundations of UX Design',
    issuer: 'Coursera',
    link: 'https://coursera.org/verify/CDN9QS3EZCN'
  },
  {
    name: 'NCII Certification',
    issuer: 'TESDA - Holy Trinity College',
    link: null
  },
  {
    name: 'Raspberry Pi Using Python Training',
    issuer: 'Holy Trinity College of General Santos City',
    link: null
  },
  {
    name: 'Android Development Training',
    issuer: 'Holy Trinity College of General Santos City',
    link: null
  },
  {
    name: 'Professional Web Design Training',
    issuer: 'Gensan Programmers Organization',
    link: null
  }
])
</script>
