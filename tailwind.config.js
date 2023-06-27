/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
    ],
    options: {
      safelist: [
        'bg-customBlack',
        'bg-customBlue'
    ], // Whitelist the custom color class
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlack: '#030712',
        customBlue: '#0ea5e9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

