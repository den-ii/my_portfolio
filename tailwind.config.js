/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-100": "#1F1F1F",
        "gray-100": "#FEFDFB",
        "dark-secondary": "#D4FF9D",
      },
      backgroundImage: (theme) => ({
        hero: "linear-gradient(to right, #8e2de2, #4a00e0);",
        hero1: "url('/wall7.jpg')",
        hero2: "url('/wall1.jpg')",
      }),
      fontFamily: {
        Patua: ["Patua One", "Trebuchet Ms", "sans-serif"],
        Quicksand: ["Quicksand", "Trebuchet Ms", "sans-serif"],
        Poppins: ["Poppins", "Trebuchet Ms", "sans-serif"],
      },
    },
  },
  plugins: [],
};
