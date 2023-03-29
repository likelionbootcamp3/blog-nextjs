/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        background: "var(--background-color)",
        body: "var(--text-color)",
        neutral: "var(--neutral-color-1)",
      },
      height: {
        navbar: "var(--navbar-height)",
        "navbar-scroll": "var(--navbar-scroll-height)"
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
