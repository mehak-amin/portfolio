/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        body: 'hsl(240, 100%, 2%)',
        container: 'hsl(240, 8%, 6%)',
        first: 'hsl(255, 60%, 64%)',
        'first-alt': 'hsl(255, 80%, 56%)',
        'first-alt-2': 'hsl(255, 60%, 56%)',
        'first-light': 'hsl(255, 60%, 74%)',
        title: 'hsl(240, 8%, 95%)',
        text: 'hsl(240, 8%, 70%)',
        'text-light': 'hsl(240, 8%, 50%)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Unbounded', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'blob': 'animateBlob 5s linear infinite',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        animateBlob: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
