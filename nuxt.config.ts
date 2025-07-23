// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  // devtools: { enabled: true },
  css: [
    './assets/styles.css'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { name: 'google-site-verification', content: '21e720cec2261f05' }
      ]
    }
  }
})
