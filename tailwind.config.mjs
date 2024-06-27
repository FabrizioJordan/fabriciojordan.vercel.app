/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			transitionProperty:{
				'opacityTransform': 'opacity, transform',
				'filterColors': 'colors, filter, transform'
			}
		},
	},
	plugins: [],
}
