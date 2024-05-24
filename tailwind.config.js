/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      height: {
        0.25: '0.0625rem', // Adds h-0.25 class for 1px height
      },
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
