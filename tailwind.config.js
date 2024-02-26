/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "page-bg": "#EEEEEE",
        "dark-bg": "#202124",
        "border-light-bg": "#DFE1E5",
        "border-dark-bg": "#5F6368",
        "button-bg": "#F8F9FA",
        "button-blue-bg": "#1B66C9",
        "button-text": "#73406C",
        "button-text-light": "#FFFFFF",
        "footer-bg": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
