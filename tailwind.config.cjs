/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				lightBlue: '#f6f9fc',
				yellow1: '#ff9d0d',
				gray1: '#f3f4f5',
				peach1: '#fff6e7',
				green1: '#007c5b',
				orange1 : "#ed5b26"
			},
			borderRadius: {
				roundedBg: '80%',
				r50: '50%'
			},
			height: {
				'10v': '10vh',
				'12v': '12vh',
				'15v': '15vh',
				'20v': '20vh',
				'30v': '30vh',
				'35v': '35vh',
				'40v': '40vh',
				'45v': '45vh',
				'60v': '60vh',
				'70v': '70vh',
				'80v': '80vh'
			},
			margin: {}
		}
	},
	plugins: []
};
