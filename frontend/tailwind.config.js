/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This line is critical!
  ],
  theme: {
    extend: {
      colors: {
  mangaBlack: "#080808",
  neonLime: "#CCFF00",
  cyberBlue: "#001AFF",
},
      boxShadow: {
        'manga': '6px 6px 0px 0px #050505',
        'manga-lg': '12px 12px 0px 0px #050505',
      }
    },
  },
  plugins: [],
}