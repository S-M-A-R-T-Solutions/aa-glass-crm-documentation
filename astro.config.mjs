// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CRM Documentation',
			social: {
				// github: 'https://github.com/withastro/starlight',
			},
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
				},
				es: {
					label: 'Español'
				},
			}
		}),
	],
});
