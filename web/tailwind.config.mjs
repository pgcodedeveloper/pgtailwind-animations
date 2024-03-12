import animations from '@pgcode/tailwind-animations'

import theme from '@pgcode/tailwind-animations/src/theme.js';

const { animation } = theme;

const safeList = Object.keys(animation).map(key => `animate-${key}`);

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [animations],
	safelist: safeList,
}
