/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "330px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        tertiary: "#F9A602",
      },
      backgroundImage: {
        bgHero: "url('./assets/home_hero.png')",
      },
      fontFamily: {
        poppins: "Poppins",
        jost: "Jost",
      },
    },
  },
  plugins: [],
};
