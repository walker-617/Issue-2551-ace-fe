/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      web: {
        min: "1280px",
      },
      tablet: {
        min: "768px",
        max: "1279px",
      },
      phone: {
        max: "767px",
      },
    },
  },

  plugins: [],
};
