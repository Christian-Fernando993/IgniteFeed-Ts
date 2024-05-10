/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors:{
        // Tons de Cinza
        'gray-100': '#E1E1D6',
        'gray-300': '#C4C4CC',
        'gray-400': '#8D8D99',
        'gray-600': '#323238',
        'gray-700': '#29292E',
        'gray-800': '#202024',
        'gray-900': '#121214',

        // Cores
        'green-500': '#00875F',
        'green-300': '#00B37E',
      },
      width:{},
      maxWidth:{},
      height:{},
      gridTemplateColumns:{
        'wrapper': '256px 1fr'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      '@tablet': '40rem',
      '@laptop': '64rem',
      '@desktop': '80rem',
    }
  },
  plugins: [],
};
