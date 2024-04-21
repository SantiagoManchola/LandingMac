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
      OP: 'Open Sans',
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
    extend: {
      backgroundImage: {
        'hero-img': "url('./banner_image.png')",
        'hero-register-img': "url('.register.png')",
      },
      keyframes: {
        StickyHeader: {
          '0%': {
            transform: 'translateY(-60px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        stickyHeader : 'StickyHeader 0.3s ease forwards',
      }
    },
  },
  plugins: [],
}