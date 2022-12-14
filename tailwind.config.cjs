/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: 13,
      sm: 14,
      md: 15,
      base: 16,
      lg: 19,
      xl: 20,
      '2xl': 22,
      '3xl': 42,
      '4xl': 84
    },
    colors: {
      transparent: "transparent",
      'fullBlack': '#000000',
      'black': '#0F1419',
      'dark-1': '#17202A',
      'dark-2': '#1C2733',
      'dark-3': '#283340',
      'dark-4': '#3A444C',
      'dark-5': '#5B7083',
      'dark-6': '#8899A6',
      'dark-7': '#EBEEF0',
      'dark-8': '#F7F9FA',
      'primary-blue': '#1DA1F2',
      'white': '#FFFFFF',
      'error': '#da4a43'
    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      }
    },
  },
  plugins: [],
}
