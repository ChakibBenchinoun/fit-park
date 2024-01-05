const { fontFamily } = require("tailwindcss/defaultTheme");
import YellowBeckground from "./public/yellow-beckbground.jpg";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-noto-serif-georgian)", ...fontFamily.serif],
        heading: ["var(--font-antic-didone)", ...fontFamily.sans],
        logo: ["var(--font-cinzel-decorative)", ...fontFamily.sans],
      },
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
      },

      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
    backgroundImage: {
      "yellow-background": "url('/yellow-backbground.jpg')",
      "steel-background": "url('/steel-background.jpg')",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
