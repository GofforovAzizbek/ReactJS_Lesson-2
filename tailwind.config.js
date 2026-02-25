/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        hind: ["Hind Siliguri", "sans-serif"],
      },
      boxShadow: {
        primary: "0px 0px 23px 0px #9494942B",
      },
    },
  },
  plugins: [],
};
