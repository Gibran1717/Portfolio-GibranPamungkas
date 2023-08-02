/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "25px",
    },
    extend: {
      colors: {
        cyan: "#06b6d4",
        secondary: "#e2e8f0",
        dark: "#0f172a",
        stone: "#1c1917",
        warning: "#fbbf24",
      },
      screens: {
        "2xl": "1320px",
      },
    },

    variants: {
      extends: {
        scale: ["active"],
      },
    },
  },
  plugins: [],
};
