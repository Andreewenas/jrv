const plugin = require("tailwindcss/plugin");
const svgToDataUri = require("mini-svg-data-uri");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Blaze Circuit', 'sans-serif'], // 'CustomFont' sesuai dengan nama di @font-face
        ebold: ['Expend Bold', 'sans-serif'],
        sunsive: ['Sunsive Black', 'sans-serif'],
        neuebold: ['Neue Bold', 'sans-serif'],
        neuereguler: ['Neue Reguler', 'sans-serif'],
      },
       animation: {
        shine: 'shine 5s linear infinite',
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
       },
       'star-movement-bottom': {
        '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
        '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
      },
      'star-movement-top': {
        '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
        '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
      },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      const colors = theme("colors"); // Ambil warna dari tema

      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="${value}" fill="none"><path d="M64 0H0V64"/></svg>`
            )}")`,
          }),
        },
        {
          values: colors,
          type: ["color"],
        }
      );

      matchUtilities(
        {
          "bg-grid": (value) => ({  
            backgroundSize: value,
          }),
        },
        {
          values: theme("spacing"),
          type: ["number", "length", "any"],
        }
      );
    }),
  ],
};
