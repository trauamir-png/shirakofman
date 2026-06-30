/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        'blue-gray': '#516A73',
        'muted-text': '#64748B',
        'border-light': '#E5E7EB',
        'warm-bg': '#F7F5F1',
        'dark-text': '#111827',
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
