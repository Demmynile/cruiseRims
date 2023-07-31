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
        bgProduct: "url('./assets/product-hero.png')",
        bgProductImg1: "url('./assets/product-img1.png')",
        bgProductImg2: "url('./assets/product-img2.png')",
        bgProductImg3: "url('./assets/product-img3.png')",
        bgProductImg4: "url('./assets/product-img4.png')",
      },
      fontFamily: {
        poppins: "Poppins",
        jost: "Jost",
      },
    },
  },
  plugins: [],
};
