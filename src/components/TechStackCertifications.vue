<template>
  <section class="section">
    <div class="grid md:grid-cols-2 gap-4">
      <!-- Tech Stack -->
      <div class="bg-white dark:bg-gray-800 border border-harvard-navy/10 dark:border-gray-700 p-4 transition-colors duration-300">
        <h2 class="text-2xl font-bold mb-3 text-harvard-navy dark:text-white transition-colors duration-300">Tech Stack</h2>
        
        <div class="space-y-3">
          <!-- Frontend -->
          <div>
            <h3 class="text-sm font-bold mb-2 text-harvard-navy dark:text-white transition-colors duration-300">Frontend</h3>
            <div class="flex flex-wrap gap-1.5">
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">JavaScript</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">TypeScript</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">ReactJS</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">VueJS</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Vue.js + Capacitor</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">jQuery</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Material UI</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Bootstrap</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Ant Design</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Axios</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Sass</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">HTML and CSS</span>
            </div>
          </div>
          
          <!-- Backend -->
          <div>
            <h3 class="text-sm font-bold mb-2 text-harvard-navy dark:text-white transition-colors duration-300">Backend</h3>
            <div class="flex flex-wrap gap-1.5">
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">PHP</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Laravel</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Laravel Horizon</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Package Development</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Laravel Nova</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Laravel Voyager</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">NodeJS</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">MySQL</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">REST API</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">GraphQL</span>
            </div>
          </div>
          
          <!-- DevOps & Tools -->
          <div>
            <h3 class="text-sm font-bold mb-2 text-harvard-navy dark:text-white transition-colors duration-300">DevOps & Tools</h3>
            <div class="flex flex-wrap gap-1.5">
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">AWS Services</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Hostinger</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">WSL>(ubuntu)</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Docker</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">GIT</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">GitHub Actions</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">CI/CD</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">PhpUnit Testing</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Laravel Dusk</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Laravel Debugbar</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Sentry</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Stripe</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Plaid</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Veratad (Verification)</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">Payment Integration</span>
              <span class="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">API Integration</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="bg-white dark:bg-gray-800 border border-harvard-navy/10 dark:border-gray-700 p-4 transition-colors duration-300">
        <h2 class="text-2xl font-bold mb-3 text-harvard-navy dark:text-white transition-colors duration-300">Certifications</h2>
        
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
