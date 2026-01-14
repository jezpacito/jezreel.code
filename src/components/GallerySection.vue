<template>
  <section class="section">
    <h2 class="text-2xl font-bold mb-5 text-harvard-navy flex items-center gap-2">
      <span>📸</span> Gallery
    </h2>
    
    <!-- Gallery Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
      <div 
        v-for="(image, index) in galleryImages" 
        :key="index"
        class="gallery-item group relative overflow-hidden border border-harvard-navy/20 aspect-square"
      >
        <img 
          :src="image.url" 
          :alt="image.caption"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-harvard-navy/0 group-hover:bg-harvard-navy/70 transition-all duration-300 flex items-end p-3">
          <p class="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            {{ image.caption }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const galleryImages = ref([
  {
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop',
    caption: 'Workspace & Development'
  },
  {
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=600&fit=crop',
    caption: 'Speaking at Tech Events'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop',
    caption: 'Team Collaboration'
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=600&fit=crop',
    caption: 'Planning & Strategy'
  },
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop',
    caption: 'Code Reviews'
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop',
    caption: 'Remote Work Setup'
  }
])
</script>

<style scoped>
.gallery-item {
  cursor: pointer;
}
</style>
