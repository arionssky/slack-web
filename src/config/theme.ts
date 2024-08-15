'use client';
import { createTheme } from '@mantine/core';
import resolveConfig from 'tailwindcss/resolveConfig';
import twConfig from '../../tailwind.config';
import { Tuple } from '@/types';

const tailwindColors = resolveConfig(twConfig);

interface ITailwindColors {
	primary: Tuple<string, 10>;
	// tailwind other colors are here
}
const getTailwindColors = () => {
	if (tailwindColors.theme?.accentColor) {
		const { primary } = tailwindColors.theme?.accentColor;
		if (typeof primary !== 'string') {
			const colors: ITailwindColors = {
				primary: Object.values(primary) as Tuple<string, 10>,
			};
			return colors;
		}
	}
};

// design system config is here
export const theme = createTheme({
	primaryColor: 'primary',
	defaultRadius: 4,
	colors: {
		...getTailwindColors(),
	},
	components: {
		Button: {
			defaultProps: {
				color: 'primary',
			},
		},
	},
});
