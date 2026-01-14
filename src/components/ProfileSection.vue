<template>
  <section class="py-3 px-6 md:px-12 max-w-6xl mx-auto">
    <div class="bg-white dark:bg-gray-800 border border-harvard-navy/10 dark:border-gray-700 p-5 relative transition-colors duration-300">
      <!-- Toggle Switch - Top Right -->
      <button 
        @click="toggleDarkMode"
        class="absolute top-5 right-5 inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none"
        :class="isDark ? 'bg-harvard-navy' : 'bg-gray-300'"
      >
        <span 
          class="inline-block h-5 w-5 transform rounded-full bg-white transition-transform flex items-center justify-center text-xs"
          :class="isDark ? 'translate-x-6' : 'translate-x-1'"
        >
          {{ isDark ? '🌙' : '☀️' }}
        </span>
      </button>
      
      <div class="flex flex-col md:flex-row items-start gap-12">
        <!-- Profile Picture -->
        <div class="flex-shrink-0">
          <div class="w-auto h-full rounded-sm overflow-hidden border-2 border-harvard-navy/10">
            <img 
              src="/profile.png" 
              alt="Jez Gatmaitan"
              class="w-40 h-full object-cover"
            />
          </div>
        </div>
        
        <!-- Header Info -->
        <div class="flex-1">
          <h1 class="text-4xl md:text-5xl mb-2 text-harvard-navy dark:text-white font-bold inline-flex items-center gap-2 transition-colors duration-300">
            Jezreel Gatmaitan 
            <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/>
            </svg>
          </h1>
          
          <p class="text-base text-harvard-gray dark:text-gray-300 mb-1 transition-colors duration-300">Metro Manila, Philippines</p>
          <p class="text-base text-harvard-navy dark:text-white mb-3 transition-colors duration-300">Software Engineer</p>
          
          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-2 text-sm items-center">
            <a href="mailto:jezreelgatmaitan.wrk@gmail.com" class="px-4 py-2 bg-harvard-navy dark:bg-gray-700 text-white rounded-sm hover:bg-harvard-crimson transition-colors">
              Schedule a Call
            </a>
            <a href="mailto:jezreelgatmaitan.wrk@gmail.com" class="px-4 py-2 border border-harvard-navy/30 dark:border-gray-600 dark:text-gray-200 rounded-sm hover:border-harvard-crimson dark:hover:border-red-400 transition-colors">
              Send Email
            </a>
            <a href="/resume.pdf" download class="px-4 py-2 bg-harvard-crimson dark:bg-red-600 text-white rounded-sm hover:bg-harvard-navy dark:hover:bg-red-700 transition-colors">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  // Check if dark mode was previously set
  isDark.value = document.documentElement.classList.contains('dark')
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkMode', 'false')
  }
}
</script>

