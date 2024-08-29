/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        primary: "#1476ff",
        "primary-light": "#f3f5ff",
        secondary: "#f9faff",
      },
    },
  },
  plugins: [],
};
