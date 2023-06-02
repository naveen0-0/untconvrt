/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        dashBoardColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      },
    },
  },
};
