/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d97706',  // amber-600
          dark: '#b45309',     // amber-700
          light: '#f59e0b'     // amber-500
        },
        accent: '#475569'       // slate-600
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
