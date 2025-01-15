// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint',(_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }));
    });
  }],
});
