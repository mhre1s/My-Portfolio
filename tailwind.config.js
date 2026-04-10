/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        customPurple: "#111021",
        brand: {
          dark: '#020617',
          card: '#0f172a',
          teal: '#14b8a6',
          blue: '#0ea5e9'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #14b8a655 0deg, #0ea5e955 180deg, #14b8a655 360deg)',
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateY(30px)',
            opacity: "0",
          },
          "100%": {
            transform: 'translateY(0)',
            opacity: "1"
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        }
      },
      animation: {
        slideIn: 'slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
