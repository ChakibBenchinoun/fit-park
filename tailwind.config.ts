const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./ui/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				body: ['var(--font-noto-serif-georgian)', ...fontFamily.serif],
				heading: ['var(--font-antic-didone)', ...fontFamily.sans],
				logo: ['var(--font-cinzel-decorative)', ...fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
