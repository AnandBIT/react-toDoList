/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#fff',
			black: '#000',
		},
		screens: {
			'2xl': { max: '1500px' },
			// => @media (max-width: 1535px) { ... }

			xl: { max: '1200px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '900px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '600px' },
			// => @media (max-width: 639px) { ... }

			xs: { max: '450px' },
			// => @media (max-width: 450px) { ... }
		},
	},
	plugins: [],
};
