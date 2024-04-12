// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  runtimeConfig: {
    public: {
      AMBIENCE_URL: process.env.NUXT_PUBLIC_AMBIENCE_URL,
      AMBIENCE_API: process.env.NUXT_PUBLIC_AMBIENCE_API,
    },
  },
  app:{
    head:{
      title: 'Vinicius Barbosa',
    }
  }

});
