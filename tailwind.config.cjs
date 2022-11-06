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
				orange1: '#ed5b26',
				orange2: '#ec5b24',
				gray2 : "#252422"
			},
			borderRadius: {
				roundedBg: '80%',
				r50: '50%'
			},
			height: {
				'1v': '2px',
				'10v': '10vh',
				'12v': '12vh',
				'15v': '15vh',
				'20v': '20vh',
				'30v': '30vh',
				'35v': '35vh',
				'40v': '40vh',
				'45v': '45vh',
				'50v': '50vh',
				'60v': '60vh',
				'70v': '70vh',
				'75v': '75vh',
				'80v': '80vh'
			},
			minHeight : {
				'1v': '2px',
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
			boxShadow: {
				shadow1: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
				shadow2: '0 2px 24px rgba(0,0,0,.04)',
			
			},
			margin: {}
		}
	},
	plugins: []
};
