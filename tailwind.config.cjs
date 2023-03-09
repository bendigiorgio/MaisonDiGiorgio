const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#FDFCFB",
      "h-yellow": "#F1AF05",
      "h-orange": "#FF8B1A",
      "h-red": "#B12522",
      "s-blue": "#27314C",
      "s-purple-grey": "#403A47",
      "s-purple": "#211C30",
      "s-grey": "#272424",
    },
    extend: {
      fontFamily: {
        krylon: ["var(--krylon-font)", ...fontFamily.serif],
        josefin: ["var(--josefin-font)", ...fontFamily.serif],
        times: ["Times", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};

module.exports = config;
