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
      },
      keyframes:{
        slideIn:{
          '0%':{
            transform: 'translateX(-100%)',
            opacity: "1",
          },
          "100%": {
            transform: 'translateX(0)',
            opacity: "1"
          },
        },
      },
      animation: {
        slideIn: 'slideIn 0.8s ease-out',
      },
    },
  },
  plugins: [],
}

