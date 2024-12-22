/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: `#44C3F4`,
        secondary: `#13bc84`,
        accent: `#E2D8FD`,
        sidebar: `#00222F`,
        card: `#163241`,
      },
      margin:{
        '1/4': '25%',
        '1/3': '33.33333%',
        '1/2': '50%',
        '2/3': '66.66667%',
        '3/4': '75%',
      }
    },
  },
  plugins: [],
}

