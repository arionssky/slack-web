import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#ffebe9',
					100: '#fcd6d5',
					200: '#f2aba8',
					300: '#ea7e7a',
					400: '#e25752',
					500: '#de3f39',
					600: '#dd312b',
					700: '#c5231e',
					800: '#b01c1a',
					900: '#9b1013',
				},
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};
export default config;
