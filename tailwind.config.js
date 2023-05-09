/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'overlay-secondary-hover': 'var(--overlay-secondary-hover)',
				'overlay-secondary': 'var(--overlay-secondary)',
				'overlay-primary': 'var(--overlay-primary)',
				'primary-color': 'var(--primary-color)',
				'secondary-color': 'var(--secondary-color)',
				'curious-blue-1': 'var(--curious-blue-1)',
				'curious-blue-2': 'var(--curious-blue-2)',
				'royal-blue': 'var(--royal-blue)',
				'cadet-blue': 'var(--cadet-blue)',
				'gray-chateau': 'var(--gray-chateau)',
				heather: 'var(--heather)',
				'pale-sky': 'var(--pale-sky)',
				iron: 'var(--iron)',
				crimson: 'var(--crimson)',
				'steel-gray': 'var(--steel-gray)',
				'coral-red': 'var(--coral-red)',
				'athens-gray': 'var(--athens-gray)',
				'light-pink': 'var(--light-pink)',
				'transparent-black': 'var(--transparent-black)',
				'transparent-midnight': 'var(--transparent-midnight)',
				'transparent-white': 'var(--transparent-white)',
				'transparent-dark': 'var(--transparent-dark)',
				apple: 'var(--apple)',
			},
			borderRadius: {
				'radius-8': 'var(--radius-8)',
				'radius-12': 'var(--radius-12)',
			},
			boxShadow: {
				'tooltip-shadow': 'var(--tooltip-shadow)',
				'action-shadow': 'var(--action-shadow)',
				'alert-shadow': 'var(--alert-shadow)',
			},
			backgroundImage: {
				'gradient-black-top-bottom': 'var(--gradient-black-top-bottom)',
				'gradient-black-bottom-top': 'var(--gradient-black-bottom-top)',
				'gradient-white-top-bottom': 'var(--gradient-white-top-bottom)',
				'gradient-white-top-bottom': 'var(--gradient-white-top-bottom)',
			},
			letterSpacing: {
				'ls-1': 'var(--ls-1)',
				'ls-2': 'var(--ls-2)',
			},
		},
	},
	plugins: [],
};
