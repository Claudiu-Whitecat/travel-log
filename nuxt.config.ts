// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/app.css'],
  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/strapi'],
  i18n: {
    defaultLocale: 'ro',
    locales: [
      {
        code: 'ro',
        name: 'Romanian',
        file: 'ro-RO.ts',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en-US.ts',
      },
    ],
    detectBrowserLanguage: false,
    strategy: 'prefix_except_default',
  },
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {
      path: '/',
      maxAge: 14 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === 'production',
      sameSite: true,
    },
    cookieName: 'strapi_jwt'
  },
})
