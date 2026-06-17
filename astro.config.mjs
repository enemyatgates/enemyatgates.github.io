// @ts-check
// https://astro.build/config

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://enemyatgates.github.io',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
});