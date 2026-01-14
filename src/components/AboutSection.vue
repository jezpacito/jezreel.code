<template>
  <section class="py-3 px-6 md:px-12 max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 gap-3">
      <!-- About Section -->
      <div class="bg-white dark:bg-gray-800 border border-harvard-navy/10 dark:border-gray-700 p-4 transition-colors duration-300">
        <h2 class="text-xl font-bold mb-3 text-harvard-navy dark:text-white transition-colors duration-300">About</h2>
        
        <div class="space-y-2.5 text-sm leading-relaxed text-harvard-navy/90 dark:text-gray-300 transition-colors duration-300">
         <p>
  I'm a full-stack software engineer specializing in developing solutions with 
  <span class="font-semibold text-harvard-navy dark:text-white">Vue.js and the Laravel framework</span>. 
  Since 2020, I’ve been working in the industry, contributing to diverse projects across different tech stacks 
  and gaining hands-on experience in modern web and mobile application development. Beyond coding, my work includes 
  consultancy, mentorship, and tutorials, where I guide students and share practical knowledge.
</p>

<p>
  I’ve helped small businesses streamline their operations by delivering software solutions tailored to their needs, 
  combining technical expertise with practical mentorship and consultancy. These experiences have strengthened my ability 
  to design solutions that are both efficient and user-focused.
</p>

<p>
  Recently, I’ve been diving deeper into 
  <span class="font-semibold text-harvard-navy dark:text-white">artificial intelligence</span>, 
  focusing on integrating AI tools and techniques into modern applications to deliver innovative, 
  cutting-edge technology solutions. My goal is to bridge emerging technologies with real-world applications 
  that create meaningful impact.
</p>
        </div>
      </div>
      
      <!-- Experience Section -->
      <ExperienceSection />
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceSection from './ExperienceSection.vue'
</script>
