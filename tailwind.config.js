/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#323F7C",
        secondary: "#5742E8",
        section: "#F2FFF7",
        typography: "#606060",
      },
      keyframes: {
        up: {
          "0%": { transform: "translate3d(0,-10px,0)" },
          // "50%": { translate: "translateY(0)" },
          "100%": { translate: " translate3d(0,10px,0)" },
        },
      },
      animation: {
        up: "up 1s alternate infinite",
      },
      boxShadow: {
        card: "0px 0px 54px 0px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
