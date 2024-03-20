/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: "640px",
	  
			md: "768px",
	  
			lg: "1024px",
	  
			xl: "1280px",
	  
			"2xl": "1536px",
	  
			"3xl": "1600px",
	  
			"4xl": "2560px",
		  },
		extend: {
			fontFamily: {
				nunito: ['Nunito']
			},
			colors: {
				lesser: {
					300: '#996DFF',
					400: '#8257E6',
					500: '#7951d7',
					600: '#6142AA'
				}
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		styled: 'false',
		base: 'false'
	}
};