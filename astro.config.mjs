// @ts-check
import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://ignfer.com',
    base: "/",
    vite: {
        resolve: {
            alias: {
                '@assets': '/src/assets',
                '@blogs': '/src/blogs',
                '@content': '/src/content',
                '@components': '/src/components',
                '@layouts': '/src/layouts',
                '@styles': '/src/styles',
                '@utils': '/src/utils'
            }
        },
        plugins: [tailwindcss()]
    },
    integrations: [icon(), mdx(), react(), sitemap()],
});