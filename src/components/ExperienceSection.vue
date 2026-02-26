<template>
  <section class="bg-white dark:bg-gray-800 border border-harvard-navy/10 dark:border-gray-700 p-4 transition-colors duration-300">
    <h2 class="text-xl font-bold mb-3 text-harvard-navy dark:text-white transition-colors duration-300">Experience</h2>
    
    <div class="space-y-3">
      <div v-for="(job, index) in experience" :key="index" class="border-l-2 border-harvard-navy/20 dark:border-gray-600 pl-3 transition-all duration-300 hover:border-harvard-crimson hover:shadow-md cursor-pointer">
        <div class="flex items-start justify-between gap-2 mb-1">
          <h3 class="text-sm font-bold text-harvard-navy dark:text-white transition-colors duration-300">{{ job.title }}</h3>
          <span class="text-xs text-harvard-gray dark:text-gray-400 whitespace-nowrap transition-colors duration-300">{{ job.year }}</span>
        </div>
        <p class="text-xs text-harvard-crimson dark:text-red-400 mb-1 transition-colors duration-300">{{ job.company }}</p>
        <p v-if="job.description" class="text-sm text-harvard-gray dark:text-gray-300 leading-relaxed transition-colors duration-300">{{ job.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Experience {
  title: string
  company: string
  year: string
  description: string
}

const experience = ref<Experience[]>([
  {
    title: 'Software Engineer',
    company: 'More Telecom (Emapta)',
    year: 'July 2024 - Present',
    description: 'Maintaining full-stack systems for customer-facing websites and internal tools in the telco industry. Orchestrating backend services and consuming Vocus APIs to support frontend requirements, while implementing ABB integrations across multiple concurrent projects.'
  },
  {
    title: 'Software Engineer',
    company: 'Lanex Corporation',
    year: 'Oct 2023 - July 2024',
    description: 'Developed and maintained applications for monitoring system health and performance. Handled deployment to production and staging environments, identified and resolved bugs through systematic testing and debugging.'
  },
  {
    title: 'PHP Developer',
    company: 'Coreproc Inc.',
    year: 'July 2022 - Oct 2023',
    description: 'Built new features and maintained monitoring applications with comprehensive testing workflows. Implemented third-party APIs including ID and face verification systems.'
  },
  {
    title: 'Full-Stack Developer',
    company: 'Codevidia',
    year: 'March 2021 - July 2022',
    description: 'Developed features across the full stack with unit testing. Integrated payment systems (Stripe), designed database schemas, and contributed to project architecture planning.'
  },
  {
    title: 'Junior Full-Stack Developer',
    company: 'Boxtypd Technologies',
    year: '2020 - March 2021',
    description: 'Contributed to feature development and maintenance. Implemented third-party API integrations and assisted in database design and project planning.'
  }
])
</script>
