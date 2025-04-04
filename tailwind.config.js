 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./index.html","./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
              Roboto: ["Roboto", "sans-serif"], 
              montserrat: ["Montserrat", "sans-serif"],
            },
          },
    },
    plugins: [],
  }