// @ts-check
// https://astro.build/config

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://enemyatgates.github.io',

  vite: {
    plugins: [tailwindcss()],
  },
});
