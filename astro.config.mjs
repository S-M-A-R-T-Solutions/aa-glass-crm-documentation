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
            facebook: "https://www.facebook.com/aaglasswindows",
            instagram: "https://www.instagram.com/aaglasswindows"
        },
        logo: {
            src: './src/assets/logo.png',
            alt: 'AA Glass Windows Logo'
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