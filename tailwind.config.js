/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "noto-sans": "Noto Sans",
    },
    colors: {
      "neutral-900": "hsl(227, 75%, 14%)",
      "neutral-800": "hsl(226, 25%, 17%)",
      "neutral-700": "hsl(225, 23%, 24%)",
      "neutral-600": "hsl(226, 11%, 37%)",
      "neutral-300": "hsl(0, 0%, 78%)",
      "neutral-200": "hsl(217, 61%, 90%)",
      "neutral-100": "hsl(0, 0%, 93%)",
      "neutral-0": "hsl(200, 60%, 99%)",
      "red-700": "hsl(3, 77%, 44%)",
      "red-500": "hsl(3, 71%, 56%)",
      "red-400": "hsl(3, 86%, 64%)",
    },
    backgroundImage: {
      "light-gradient": "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)",
      "dark-gradient": "linear-gradient(180deg, #040918 0%, #091540 100%)",
    },
    extend: {
      padding: {
        4.5: "1.125rem",
      },
    },
  },
  plugins: [],
};
