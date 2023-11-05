/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-light1": "#fae5df",
        "custom-light2": "#f5cac2",
        "custom-main": "#ed7966",
        "custom-main2": "#303179",
        "custom-main3": "#141850",
      },
      textColor: {
        light: "#303179", // Define your light theme text color
        dark: "#fff", // Define your dark theme text color
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
