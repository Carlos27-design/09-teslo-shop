/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      montserrat: ["montserrat", "sans-serif"],
    },

    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night"],
  },
};
