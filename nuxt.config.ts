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
        { name: 'google-site-verification', content: 'JB8fK2YOdlu2seSRj8XJ_VuyZ0WsqdlH0d1bHd8rZsE' },
      ]
    }
  }
})
