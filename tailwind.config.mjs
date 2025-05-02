/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(180deg, rgba(240, 244, 236, 1), rgba(241, 235, 226, 1) 100%)',
      },
      colors: {
        'custom-light': '#252624',
        'custom-dark': '#252624',
        'custom-gray': '#E5E5E5',
        'dark-bg': '#1A202C',
        'dark-text': '#E2E8F0',
      },
    },
  },
  darkMode: 'class',
  
  plugins: [],
};
