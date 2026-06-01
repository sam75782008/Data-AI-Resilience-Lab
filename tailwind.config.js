/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 35px 80px -40px rgba(15, 23, 42, 0.75)',
      },
    },
  },
  plugins: [],
}

