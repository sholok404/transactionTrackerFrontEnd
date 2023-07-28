/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
    	due: '#991b1b',
    	cleared: '#166534',
	transparent: 'transparent',
	current: 'currentColor',
	black: colors.black,
	white: colors.white,
	gray: colors.gray,
	emerald: colors.emerald,
	indigo: colors.indigo,
	yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [
  	require('@headlessui/tailwindcss')
  ],
}
