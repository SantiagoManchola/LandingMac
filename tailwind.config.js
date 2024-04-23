/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{jsx}",
    "./src/**/**/**/*.{jsx}",
  ],
  theme: {

    fontFamily:{
      'OP': ['"Open Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
    },

    colors:{
      cafe: "#84754E", 
      black: "#000000",
      transparent: "transparent",
      white: "#FFFFFF",
      bone: "#E6E7E8",
      boneSecondary: "#EAEAEA",
      redDark: "#D30507",
    },
    extend: {},
  },
  plugins: [],
}