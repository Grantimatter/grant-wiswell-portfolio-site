import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit({hot: !process.env.VITEST})],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
        environment: 'jsdom',
        globals: true
	}
};

export default config;
