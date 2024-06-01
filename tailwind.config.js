import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        1: "#1897b0",
        2: "#32779b",
        3: "#09488c",
        4: "#0d9ade",
        5: '#1997b2',
        6: "#327799",
        primary: {
          DEFAULT: '#3B82F6',
          50: '#f5f3ff',
          100: '#e0e7ff',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95'
        }
      },
      fontFamily:{
        aclonica:["Aclonica","sans-serif"],
        arimo:["Arimo", "sans-serif"],
        robot:["Roboto","sans-serif"]
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-horizontal-tb': {
          'writing-mode': 'horizontal-tb',
        },
        '.writing-mode-vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
        '.writing-mode-vertical-lr': {
          'writing-mode': 'vertical-lr',
        },
        '.text-orientation-mixed': {
          'text-orientation': 'mixed',
        },
        '.text-orientation-upright': {
          'text-orientation': 'upright',
        },
      }, ['responsive']);
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* For Webkit-based browsers (Chrome, Safari) */
          '::-webkit-scrollbar': {
            display: 'none',
          },
          /* For IE, Edge, and Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
