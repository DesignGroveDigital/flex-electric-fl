/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#009D16",
        accent: "#E35100",
        secondary: '#5100E3',
        dark: "#353334",
      },
      fontFamily: {
        xoireqe: ['var(--font-xoireqe)'],
        edgar: ['var(--font-opti-edgar)'],
      },
    },
  },
  plugins: [],
};