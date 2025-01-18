/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        customPurple: "#111021",
      },
      backgroundColors: {
        'gradient-to-r': 'linear-gradient(to right, #ff7e5f, #feb47b)'
      }
    },
  },
  plugins: [],
}

