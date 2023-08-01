/** @type {import('tailwindcss').Config} */

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
      },

  },
  plugins: [],
};
