// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  extends: ['@nuxt/ui-pro'],
  modules: ["@nuxt/ui", "@nuxt/image"]
})