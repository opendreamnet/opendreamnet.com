import { API, Account } from '../modules/api'

declare module '@nuxt/types' {
  export interface Context {
    $api: API
  }

  export interface NuxtAppOptions {
    $api: API
  }
}

declare module 'vue/types/vue' {
  export interface Vue {
    $api: API
  }
}

declare module 'vuex/types/index' {
  export interface Store<S> {
    $api: API
  }
}