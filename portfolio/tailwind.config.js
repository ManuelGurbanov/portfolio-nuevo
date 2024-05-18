/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom': '70vw',
      },
      colors: {
        'green': {
          1: '#042326',
          2: '#0A3A40',
          3: '#0F5959',
        },
      }
    },
  },

  plugins: [],
}

