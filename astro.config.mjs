// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.seoa.dev',
  integrations: [mdx(), sitemap(), react()],

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'GyeonggiBatang',
      cssVariable: '--font-gyeonggi-batang',
      fallbacks: ['serif'],
      options: {
        variants: [
          {
            src: ['./node_modules/@noonnu/gyeonggi-batang/fonts/gyeonggibatang-normal.woff'],
            weight: 400,
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Neucha',
      cssVariable: '--font-neucha',
      fallbacks: ['cursive'],
      options: {
        variants: [
          {
            src: [
              './node_modules/@fontsource/neucha/files/neucha-latin-400-normal.woff2',
              './node_modules/@fontsource/neucha/files/neucha-latin-400-normal.woff',
            ],
            weight: 400,
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
