module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
