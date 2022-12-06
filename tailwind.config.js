/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
    colors: {
      primary: "#046db5",
      secondary: "#00a8de",
      danger: "#fa0000",
      success: "#79c702",
      warning: "#ffc400",
      ...colors,
    },
  },
};
