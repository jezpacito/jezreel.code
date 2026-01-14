<template>
  <section class="section">
    <h2 class="text-xl font-bold mb-3 text-harvard-navy dark:text-white transition-colors duration-300">Recommendations</h2>
    
    <div class="relative">
      <!-- Carousel Container -->
      <div class="overflow-hidden">
        <div 
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div 
            v-for="(rec, index) in recommendations" 
            :key="index"
            class="w-full flex-shrink-0 px-1"
          >
            <div class="bg-white dark:bg-gray-800 border border-harvard-navy/10 dark:border-gray-700 p-4 transition-all duration-300 hover:border-harvard-crimson hover:shadow-lg">
              <p class="text-sm leading-relaxed mb-3 italic text-harvard-navy/80 dark:text-gray-300 transition-colors duration-300">
                "{{ rec.quote }}"
              </p>
              <div class="border-t border-harvard-navy/10 dark:border-gray-700 pt-3 transition-colors duration-300">
                <p class="font-bold text-sm text-harvard-navy dark:text-white transition-colors duration-300">{{ rec.name }}</p>
                <p class="text-xs text-harvard-gray dark:text-gray-400 transition-colors duration-300">{{ rec.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Dots Indicator -->
      <div class="flex justify-center gap-2 mt-4">
        <button
          v-for="(rec, index) in recommendations"
          :key="index"
          @click="currentIndex = index"
          class="w-2 h-2 rounded-full transition-all"
          :class="currentIndex === index ? 'bg-harvard-crimson w-8' : 'bg-harvard-navy/30 dark:bg-gray-600'"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
let autoPlayInterval: number | null = null

const recommendations = ref([
  {
    quote: "Working with Jez on the ClientWise project, he takes initiative with tasks and is very proactive in making suggestions. His expertise in Laravel helped us deliver a robust solution.",
    name: "Philip Calub",
    title: "Freelance Software Developer"
  },
  {
    quote: "Jez delivered and helped our small business by creating a usable, personalized POS system that caters to our shop's needs.",
    name: "Aldrico Lubaton",
    title: "Business Owner"
  },
  {
    quote: "Jez was one of the good developers I've worked with. He's a fast learner and always delivers quality work on time.",
    name: "AJ Consolacion",
    title: "Senior Software Developer"
  },
  {
    quote: "Jez is very easy to work with—collaborative, approachable, and always ready to support the team.",
    name: "Louie Dalida",
    title: "Frontend Developer"
  }
])

// Auto-play carousel
onMounted(() => {
  autoPlayInterval = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % recommendations.value.length
  }, 5000) // Change every 5 seconds
})

onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
})
</script>
