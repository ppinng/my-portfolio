/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   mobile: "420px",
    //   tablet: "820px",
    // },
    extend: {
      fontFamily: {
        monst: ["Montserrat", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
    colors: {
      white: "#FAFAFA",
      orange: "#fb923c",
      customorange: "#fca055",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      stone: colors.stone,
      sky: colors.sky,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,
      amber: colors.amber,
    },
  },
  plugins: [],
};
