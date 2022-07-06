import { setNuxtConfig, getNuxtConfig } from '@opendreamnet/nuxtjs-base'
import pkg from './package.json'

process.env.npm_package_name = pkg.name
process.env.npm_package_description = pkg.description
process.env.npm_package_displayName = pkg.displayName
process.env.npm_package_version = pkg.version

export default setNuxtConfig({
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  plugins: [
    ...getNuxtConfig().plugins!,
    '~/plugins/api.ts'
  ],

  googleFonts: {
    download: process.env.NODE_ENV === 'production',
    families: {
      Inter: [300, 400, 600, 700]
    }
  },

  //
  publicRuntimeConfig: {
    opencollective: 'opendreamnet'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
})
