/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ["Poppins", "sans-serif"]
      },
      fontWeight:{
        "100" : "100",
        "200" : "200",
        "300" : "300",
        "400" : "400",
        "500" : "500",
        "600" : "600",
        "700" : "700",
        "800" : "800",
        "900" : "900",
      },
      screens: {
        "lxl": "1199px",
        "lsm": "520px",
        "lmd": "780px",
        "llg": "990px",
        "l2xl":"1350px"
      },
      margin: {
        "75": "75px",
        "90":"120px",
      }
    },
  },
  plugins: [],
}

