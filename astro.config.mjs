import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://accfrboficial.github.io',
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
