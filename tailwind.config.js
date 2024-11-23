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
  // Tailwind CSS uses a "purge" process that scans your files for class names and includes only those it finds in the final CSS bundle.
  // Since we're dynamically generating class names for the number of columns in the PhotoSwipe gallery (e.g., 'columns-2'),
  // Tailwind doesn't detect them during this scan and thus doesn't include the corresponding CSS styles.
  // The solution is to force Tailwind to include all the columns classes in the final generated CSS.
  safelist: ['columns-1', 'columns-2', 'columns-3', 'columns-4', 'columns-5', 'columns-6'],
}
