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
        "link-text": "#6EB4F8",
        "link-text-clicked": "#BB8AF9",
        "footer-bg": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
