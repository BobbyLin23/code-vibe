import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['shadcn-nuxt', '@nuxt/icon', '@vueuse/nuxt', '@nuxtjs/color-mode'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  devServer: {
    port: 3010,
  },
  components: [
    '~/components',
    {
      path: '~/components/ui',
      pathPrefix: false,
    },
    {
      path: '~/components/layout',
      pathPrefix: false,
    },
    {
      path: '~/components/landing',
      pathPrefix: false,
    },
  ],
  colorMode: {
    classSuffix: '',
  },
})
