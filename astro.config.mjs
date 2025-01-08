// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'CRM Documentation',
        customCss: [
            // Path to your Tailwind base styles:
            './src/tailwind.css',
        ],
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
    }), tailwind({
        // Disable the default base styles:
        applyBaseStyles: false,
    }),
    ],
});