/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        harvard: {
          navy: '#0A1F44',
          crimson: '#A51C30',
          cream: '#F8F5F0',
          gray: '#6B7280',
        }
      },
      fontFamily: {
        serif: ['Crimson Text', 'Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
