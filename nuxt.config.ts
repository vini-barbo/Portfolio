// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      AMBIENCE_URL: process.env.NUXT_PUBLIC_AMBIENCE_URL,
      AMBIENCE_API: process.env.NUXT_PUBLIC_AMBIENCE_API,
    },
  },
});
