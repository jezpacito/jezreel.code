<template>
  <!-- Chatbot Button -->
  <button
    v-if="!isOpen"
    @click="isOpen = true"
    class="fixed bottom-6 right-6 w-14 h-14 bg-harvard-crimson text-white rounded-full shadow-lg hover:bg-harvard-navy transition-all duration-300 flex items-center justify-center z-50"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  </button>

  <!-- Chatbot Window -->
  <div
    v-if="isOpen"
    class="fixed bottom-6 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex flex-col z-50 border border-harvard-navy/10"
  >
    <!-- Header -->
    <div class="bg-harvard-crimson text-white p-4 rounded-t-lg flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 bg-green-400 rounded-full"></div>
        <h3 class="font-bold">Chat with us</h3>
      </div>
      <button @click="isOpen = false" class="hover:bg-white/20 rounded p-1 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Messages -->
    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <div v-for="(message, index) in messages" :key="index">
        <!-- Bot Message -->
        <div v-if="message.type === 'bot'" class="flex gap-2">
          <div class="w-8 h-8 bg-harvard-crimson rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">
            JG
          </div>
          <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-[80%]">
            <p class="text-sm dark:text-white">{{ message.text }}</p>
          </div>
        </div>
        
        <!-- User Message -->
        <div v-if="message.type === 'user'" class="flex gap-2 justify-end">
          <div class="bg-harvard-crimson text-white rounded-lg p-3 max-w-[80%]">
            <p class="text-sm">{{ message.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="p-3 border-t border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-2 mb-2">
        <button
          v-for="action in quickActions"
          :key="action"
          @click="sendQuickMessage(action)"
          class="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-harvard-crimson hover:text-white dark:text-white rounded-full transition-colors"
        >
          {{ action }}
        </button>
      </div>
    </div>

    <!-- Input -->
    <div class="p-4 border-t border-gray-200 dark:border-gray-700">
      <div class="flex gap-2">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="Type your message..."
          class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-harvard-crimson text-sm dark:bg-gray-700 dark:text-white"
        />
        <button
          @click="sendMessage"
          class="px-4 py-2 bg-harvard-crimson text-white rounded-lg hover:bg-harvard-navy transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const newMessage = ref('')
const messages = ref([
  {
    type: 'bot',
    text: 'Hi! I\'m Jez\'s assistant. How can I help you today?'
  }
])

const quickActions = ref([
  'Schedule a call',
  'View projects',
  'Contact info',
  'Resume'
])

const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push({
      type: 'user',
      text: newMessage.value
    })
    
    // Simulate bot response
    setTimeout(() => {
      messages.value.push({
        type: 'bot',
        text: 'Thanks for your message! I\'ll get back to you shortly. In the meantime, feel free to explore my portfolio or download my resume.'
      })
    }, 500)
    
    newMessage.value = ''
  }
}

const sendQuickMessage = (action: string) => {
  messages.value.push({
    type: 'user',
    text: action
  })
  
  setTimeout(() => {
    let response = ''
    if (action === 'Schedule a call') {
      response = 'Great! Please email me at jezreelgatmaitan.wrk@gmail.com to schedule a call.'
    } else if (action === 'View projects') {
      response = 'Check out my recent projects section or visit the Projects page for more details!'
    } else if (action === 'Contact info') {
      response = 'You can reach me at jezreelgatmaitan.wrk@gmail.com or connect on LinkedIn!'
    } else if (action === 'Resume') {
      response = 'You can download my resume using the "Download Résumé" button in the profile section, or click here: /jezreel-gatmaitan-fullstack-developer-resume.pdf'
    }
    
    messages.value.push({
      type: 'bot',
      text: response
    })
  }, 500)
}
</script>
