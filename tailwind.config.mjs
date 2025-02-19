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
        primary: "#009C1D",
        accent: "#E25100",
        dark: "#363435",
      },
      fontFamily: {
        xoireqe: ['var(--font-xoireqe)'],
        edgar: ['var(--font-opti-edgar)'],
      },
    },
  },
  plugins: [],
};