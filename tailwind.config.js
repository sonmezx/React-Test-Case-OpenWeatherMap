/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#051139",
        "secondary": "#111c44",
      }
    },
    container:{
      center: true,
      padding: "4rem"
    }
  },
  plugins: [],
}
